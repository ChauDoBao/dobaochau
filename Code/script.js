//CURSOR
const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Update the custom cursor's position
  customCursor.style.left = `${clientX}px`;
  customCursor.style.top = `${clientY}px`;
});


    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      customCursor.style.left = `${clientX}px`;
      customCursor.style.top = `${clientY}px`;
    });

    // Elements to trigger hover effects
    const hoverElements = document.querySelectorAll('.knife, .cup, .cloudright, .cassette, .you-1, .you-2, .you-3, .you-4, .puzzle2, .star, .sun, .flower');

    // Add hover effects
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover');
      });

      element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
      });
    });
  
//CASSETTE
  document.addEventListener('DOMContentLoaded', () => {
    const cassette = document.querySelector('.cassette-1');
    const iam = document.querySelector('.frame-1 .iam');
    const not = document.querySelector('.frame-1 .not');
  
    cassette.addEventListener('click', () => {
      iam.classList.toggle('move-up');
      not.classList.toggle('show');
    });
  });
  

// OBJECTS
const cup = document.querySelector('.frame-1 .cup');
const shirt = document.querySelector('.frame-1 .shirt');
const envelope = document.querySelector('.frame-1 .envelope');
const letterleft = document.querySelector('.frame-1 .letterleft');
const letterright = document.querySelector('.frame-1 .letterright');
const polaroidleft = document.querySelector('.frame-1 .polaroidleft');
const polaroidright = document.querySelector('.frame-1 .polaroidright');

document.addEventListener('DOMContentLoaded', () => {
  const sound = new Audio('swipe.mp3');
  const cup = document.querySelector('.frame-1 .cup');
  const shirt = document.querySelector('.frame-1 .shirt');
  const envelope = document.querySelector('.frame-1 .envelope');
  const letterleft = document.querySelector('.frame-1 .letterleft');
  const letterright = document.querySelector('.frame-1 .letterright');
  const polaroidleft = document.querySelector('.frame-1 .polaroidleft');
  const polaroidright = document.querySelector('.frame-1 .polaroidright');

  if (cup && shirt && envelope && letterleft && letterright && polaroidleft && polaroidright) {
    cup.addEventListener('click', () => {
      sound.play();  // Play sound on click›

      cup.style.transform = 'translateY(300px)';
      shirt.style.transform = 'translateX(-350px) translateY(-200px)';
      envelope.style.transform = 'translateY(-100px)';
      letterleft.style.transform = 'translateX(-200px) translateY(50px)';
      letterright.style.transform = 'translateX(350px) translateY(-50px)';
      polaroidleft.style.transform = 'translateX(-50px) translateY(150px)';
      polaroidright.style.transform = 'translateX(50px) translateY(-150px)';
    });
  } else {
    console.error("One or more elements were not found in the DOM.");
  }
});



//KNIFE
const object = document.querySelector('.frame-1 .knife');
const animated = document.querySelector('.frame-1 .blooddown');

object.addEventListener('click', () => {
  const sound = new Audio('knife-stab.mp3');
  
  sound.play();

  object.classList.toggle('animate');

  object.addEventListener('transitionend', () => {
    animated.classList.add('animatescale');
  }, { once: true }); // Use { once: true } to remove the listener automatically
});


//CLOUDS
const cloudright = document.querySelector('.frame-1 .cloudright');
const cloudleft = document.querySelector('.frame-1 .cloudleft');

cloudright.addEventListener(
  'click',
  () => {
    cloudright.style.transform = 'translateX(-700px) scale(1.5)';

    cloudleft.style.transform = 'translateX(1000px) translateY(-100px) scale(1.5)';
  },
  { once: true });

//RAIN
const rainContainer = document.querySelector('.rain-container');

function createRain() {
  for (let i = 0; i < 100; i++) { // Adjust the number for more or less rain
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    // Randomize starting position and animation duration
    raindrop.style.left = Math.random() * 100 + 'vw';
    raindrop.style.animationDuration = Math.random() * 2 + 1 + 's';
    raindrop.style.animationDelay = Math.random() * 2 + 's';

    rainContainer.appendChild(raindrop);
  }
}

createRain();

//SNOW
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    
    const numberOfSnowflakes = 50;
  
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
  
      snowflake.style.left = Math.random() * 100 + 'vw'; // Random left position (viewport width)
      snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random duration between 5 and 10 seconds
      snowflake.style.animationDelay = Math.random() * 5 + 's'; // Random delay

      const size = Math.random() * 20 + 50; //size
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
  
      snowContainer.appendChild(snowflake);
    }
  }
  
  window.onload = createSnowflakes;

  // PUZZLES
const puzzle2 = document.querySelector('.frame-1 .puzzle2');
const puzzle1 = document.querySelector('.frame-1 .puzzle1');

const sound = new Audio('swipe.mp3'); 

puzzle1.addEventListener('click', () => {
  sound.play();

  puzzle1.style.transform = 'translateX(-500px)';
  puzzle2.style.transform = 'translateX(500px)';
}, { once: true });


//BLUR
const circle = document.getElementById('circle1');

document.addEventListener('mousemove', (event) => {
  // Track mouse cursor's current position
  const x = event.clientX;
  const y = event.clientY;

  // Update the position
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});






  


  


