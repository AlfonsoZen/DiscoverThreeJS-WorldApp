import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js'
import { createCube_2 } from './components/cube2.js';
import { createScene } from './components/scene.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them from outside the module
let camera;
let renderer;
let scene;


class World {
  // 1. Create an instance of the World app
  constructor( container ) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    container.append( renderer.domElement );

    const cube = createCube();
    const cube_2 = createCube_2();

    scene.add( cube );
    scene.add( cube_2 );

    const resizer = new Resizer( container, camera, renderer );
  }

  // 2. Render the scene
  render() {
    renderer.render( scene, camera );
  }
}

export { World };