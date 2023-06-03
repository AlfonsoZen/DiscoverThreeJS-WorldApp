import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube_2() {
  // Create a geometry
  const geometry = new BoxBufferGeometry( 2, 2, 2 );

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const mesh = new Mesh( geometry, material );

  mesh.position.set( -1, 0, 0 );


  return mesh;
}

export { createCube_2 };