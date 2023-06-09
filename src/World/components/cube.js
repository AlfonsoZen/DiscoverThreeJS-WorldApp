import { BoxBufferGeometry, SphereGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  // Create a geometry
  const geometry = new SphereGeometry( 1 );

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const mesh = new Mesh( geometry, material );

  mesh.position.set( 2, 0, 0 );

  return mesh;
}

export { createCube };