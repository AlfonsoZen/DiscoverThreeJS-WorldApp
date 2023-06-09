import { World } from "./World/World.js";

// Create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World( container );

  // 2. Render the scene
  world.render();

}

// Call main to start the app
const button = document.querySelector('#run');
button.addEventListener( 'click', () => {
  main();
  button.remove();
})

// main();