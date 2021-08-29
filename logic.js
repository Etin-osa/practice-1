const circle = $('.circle');
const blocks = $('.menu-block span');
const navLeft = $('.grid-nav__left');
const navRight = $('.grid-nav__right');
const slots = [
  {
    img: $('.main-img__1'),
    main: $('#head1__child1 span')
  },
  {
    img: $('.main-img__2'),
    main: $('#head1__child2 span')
  },
  {
    img: $('.main-img__3'),
    main: $('#head1__child3 span')
  },
];
const props = {
  'opacity': 0,
  'transform': 'scale(1.3)'
}


// Numbers and strings
let count = 0;
let navActive = '#ECECEC';
let navFaint = 'rgba(236, 236, 236, .6)';


// Mouse movement
// $(document).mousemove(function(e) {
//   let x = e.pageX;
//   let y = e.pageY;

//   circle.css({
//     top: `${y - 35}px`,
//     left: `${x - 35}px`
//   });
// })


// Mouse over
// blocks.mouseover(function() {
//   circle.css({
//     background: '#ececece8',
//     border: '1px solid transparent'
//   })
// })


// NAVRIGHT
navRight.click(function() {

  if (count < 2) {
    // Before count
    // Change image
    changeImage(0, 1.3);

    // Increment
    count++

    // After count
    // Change image
    changeImage(1, 1);

    // Change icon colour
    iconColourChange(count);
  }

  console.log(slots[count].main.text())

})

// NAVLEFT
navLeft.click(function() {

  if (count > 0) {
    // Before count
    // Change image
    changeImage(0, 1.3);

    // Decrement
    count--

    // Aafter count
    // Change image
    changeImage(1, 1);
    
    // Change icon colour
    iconColourChange(count);
  }

})







// Change Image Function
function changeImage(opac, scale) {
  // Before count
  slots[count].img.css({
    'opacity': `${opac}`,
    'transform': `scale(${scale})`
  });
}

// Change icon colour
function iconColourChange(numb) {
  if (numb > 0) {
    navLeft.css('background', navActive);
  }

  if (numb === 0) {
    navLeft.css('background', navFaint);
  }

  if (numb === 2) {
    navRight.css('background', navFaint);
  }

  if (numb < 2) {
    navRight.css('background', navActive);
  }
}



// Add spans to div 
function createSpans(dom, str) {
  for ( var i = 0; i < str.length; i++ ) {
    const span = document.createElement('span');
    span.textContent = str[i];
    
    // Checking for empty span
    if (str[i] === ' ') {
      span.style.padding = '0 .35vw'
    }

    // Append span
    dom.append(span);
  }
}

// Multiple CreateSPANS call
function mulCreate(arr, str) {
  for ( var i = 0; i < arr.length; i++ ) {
    createSpans(arr[i], str[i]);
  }
}

// Start function
function start() {
  const allList = $('.main-head__child');
  const allMenu = $('.menu-text');

  // Note(s)
  const text1 = ['INTERIOR', 'EFFICIENT', 'AFFORDABLE', 'DESIGN', 'DESIGN', 'PRICES'];
  const text2 = ['INTERIOR DESIGN', 'EFFICIENT DESIGN', 'AFFORDABLE PRICES'];

  // Dom change(s)
  mulCreate(allList, text1);
  // mulCreate(allMenu, text2);
}


// Call Start function
start()