import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  // Create a geometry
  const geometry = new BoxBufferGeometry( 2, 2, 2 );

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const mesh = new Mesh( geometry, material );

  return mesh;
}

export { createCube };