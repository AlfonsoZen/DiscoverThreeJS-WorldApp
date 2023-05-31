import { PerspectiveCamera } from "three";

function createCamera() {
  const fov = 35;
  const aspect = 1;
  const near = .1;
  const far = 100; 

  const camera = new PerspectiveCamera( fov, aspect, near, far );

  // Move the camera back so we can view the scene
  camera.position.set( 0, 0, 10 );

  return camera;
}

export { createCamera };