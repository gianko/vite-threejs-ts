import debounce from 'lodash.debounce'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './style.css'

const canvas = document.querySelector('[data-canvas]') as HTMLCanvasElement

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const onResize = () => {
  console.log('RESIZE')
  sizes.height = window.innerHeight
  sizes.width = window.innerWidth

  camera.aspect = sizes.width / sizes.height
  camera.updateMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, -2)
scene.add(camera)

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: '#FF00CC' })
)
scene.add(cube)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const tick = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

window.addEventListener('resize', debounce(onResize, 100))
tick()
