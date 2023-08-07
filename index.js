



const weAreOpen = document.getElementById('weAreOpen');
function toggleStyle() {
  if (weAreOpen.style.visibility === 'hidden') {
    weAreOpen.style.visibility = 'visible';
  } else {
    weAreOpen.style.visibility = 'hidden';
  }
  return
}

function startBlinking() {
  setInterval(toggleStyle, 800);
}
startBlinking();










const container = document.querySelector('.image-container');
const img = document.querySelector('.shake-image');
// const img2 = document.querySelector('.2');

// Add event listener for mousemove event
document.addEventListener('mousemove', function (event) {
  // Get the position of the cursor
  const mouseX = event.pageX;
  console.log('The x value = '+event.pagex);
  console.dir(event)
  const mouseY = event.pageY;


  //   console.log('Mouse X:', mouseX); // Output: horizontal coordinate of the mouse relative to the document
  //   console.log('Mouse Y:', mouseY);

  // Calculate the movement distance based on cursor position
  const moveX = (mouseX - window.innerWidth) * 0.005;
  console.log('Move ' + moveX + ' px in Xdirection');
  const moveY = (mouseY - window.innerHeight) * 0.01;
  console.log('Move ' + moveY + ' px in Ydirection');

  // Apply the translation to the container's background position
  img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  //   img2.style.transform = `translate(${moveX}px, ${moveY}px)`;

});