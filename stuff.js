
// Get the container element
const container = document.querySelector('.container');
const img = document.querySelector('img');
// const img2 = document.querySelector('.2');

// Add event listener for mousemove event
document.addEventListener('mousemove', function(event) {
  // Get the position of the cursor
  const mouseX = event.pageX;
  const mouseY = event.pageY;


//   console.log('Mouse X:', mouseX); // Output: horizontal coordinate of the mouse relative to the document
//   console.log('Mouse Y:', mouseY);

  // Calculate the movement distance based on cursor position
  const moveX = (mouseX - window.innerWidth) * 0.009;
  console.log('Move '+moveX+' px in Xdirection');
  const moveY = (mouseY - window.innerHeight) * 0.1;
  console.log('Move '+moveY +' px in Ydirection');

  // Apply the translation to the container's background position
  img.style.transform = `translate(${moveX}px, ${moveY}px)`;
//   img2.style.transform = `translate(${moveX}px, ${moveY}px)`;
  
});




// <div class="container">
// <img src="./IMAGES/bg.png"  height="750px" >
// <img src="./IMAGES/bg1.png" class="2" height="750px" >

// </div>
// <div class="a"></div>    

