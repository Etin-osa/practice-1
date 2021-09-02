const circle = $('.circle');
const blocks = $('.menu-block span');
const navLeft = $('.grid-nav__left');
const navRight = $('.grid-nav__right');
const mainNote = $('.grid-main__note');
const hamburger = $('#hamburger');
const headerMenu = $('.header-menu');
const cancel = $('.header-menu__cancel');
const sups = $('.menu-block__text sup');
const slots = [
  {
    img: $('.main-img__1'),
    main: [],
    menu: [],
    line: $('.grid-line__each-count div:nth-child(1)'),
    number: $('.grid-number__each-count div:nth-child(1)')
  },
  {
    img: $('.main-img__2'),
    main: [],
    menu: [],
    line: $('.grid-line__each-count div:nth-child(2)'),
    number: $('.grid-number__each-count div:nth-child(2)')
  },
  {
    img: $('.main-img__3'),
    main: [],
    menu: [],
    line: $('.grid-line__each-count div:nth-child(3)'),
    number: $('.grid-number__each-count div:nth-child(3)')
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
let slotMain = 'main';
let slotMenu = 'menu';
let slotLine = 'line';
let slotNumber = 'number';
let add = 'add';
let remove = 'remove';


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
    changeImage(add, count);

    // Add animation Main Span
    addAnimation(count, add, slotMain);

    // line Animation
    lineAnimation(count, add, slotLine, 'right');

    // Number Animation
    lineAnimation(count, add, slotNumber, 'right');
    
    // Increment
    count++
    
    // After count
    // Note animation
    noteAnimation(mainNote);
    
    // Change image
    changeImage(remove, count);
    
    // Add animation Main Span
    addAnimation(count, remove, slotMain);
    
    // line Animation
    lineAnimation(count, remove, slotLine, 'right');

    // Number Animation
    lineAnimation(count, remove, slotNumber, 'right');

    // Change icon colour
    iconColourChange(count);
  }

  // Lazy fix to one text Animation
  setTimeout(() => {
    mainNote.css('animation', 'none');
  }, 2000)
})

// NAVLEFT
navLeft.click(function() {

  if (count > 0) {
    // Before count
    // Change image
    changeImage(add, count);

    // addAnimation
    addAnimation(count, add, slotMain);

    // line Animation
    lineAnimation(count, add, slotLine, 'left');

    // Number Animation
    lineAnimation(count, add, slotNumber, 'left');
    
    // Decrement
    count--
    
    // Aafter count
    // NoteAnimation
    noteAnimation(mainNote);
    
    // Change image
    changeImage(remove, count)
    
    // addAnimation
    addAnimation(count, remove, slotMain);

    // line Animation
    lineAnimation(count, remove, slotLine, 'left');

    // Number Animation
    lineAnimation(count, remove, slotNumber, 'left');
    
    // Change icon colour
    iconColourChange(count);
  }

  // Lazy fix to one text Animation
  setTimeout(() => {
    mainNote.css('animation', 'none');
  }, 2000)
})


// Hamburger
hamburger.click(() => {
  // Header Menu
  headerMenu.addClass('open')

  // Menu List
  slots.forEach((slot, ind) => addAnimation(ind, remove, slotMenu));

  // Menu list hightlight
  sups.css('opacity', '1')
});

// Header cancel
cancel.click(() => {
  // headerMenu
  headerMenu.removeClass('open');

  // MenuList
  slots.forEach((slot, ind) => addAnimation(ind, add, slotMenu));

  // Menu list hightlight
  sups.css('opacity', '0')
});





// Change Image Function
function changeImage(str, ind) {
  if (str === add) {
    slots[ind].img.css({
      'transform': 'scale(1.3)',
      'zIndex': '-3',
      'transition': 'transform 1.6s ease-in .4s, z-index .2s ease-in 1.4s'
    });
  } else {
    slots[ind].img.css({
      'transform': 'scale(1)',
      'zIndex': '-1',
      'transition': 'z-index .2s ease-in 1.4s'
    });
  }
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


// Add Aniamtion Function
function addAnimation(cur, time, props) {
  const spanList = slots[cur][props];
  const duration = 0.7
  let eachSec = props === slotMain ? 0.03 : 0.01;
  let pace;

  spanList.forEach(list => {
    let listArr = Array.from(list);

    listArr.forEach((child, ind) => {
      if (time === add) {
        pace = duration - (eachSec * ind);
      } else {
        pace = 0 + (eachSec * ind);
      }

      // Call Animate span
      animateSpan(child, pace, time, props);
    })
  })
}


// Animate span
function animateSpan(cur, pace, time, props) {
  let val = time === add ? 100 : 10;
  let del = time === add ? 0 : props === slotMenu ? .7 : 1.3;

  cur.style.transform = `translateY(${val}%)`;
  cur.style.transition = `transform .3s ease ${del + pace}s`;
}

// Note Animation
function noteAnimation(dom) {
  dom.css({
    'animation': 'textAnimation 1.2s ease-out forwards .4s'
  })
}


// line & number animation
function lineAnimation(cur, time, props, dir) {
  let del = time === add ? .7 : 1.4;
  let val = time === add ? 
    dir === 'right' ? -100 : 100 : 0;
  let dom = slots[cur][props];

  // Add animation
  dom.css({
    'top': `${val}%`,
    'transition': `top .4s ease-out ${del}s`
  })
}


// function to Create spans and ADD to parent 
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


// Function to Add parent to slots
function addToSlot(dom, slot, numb) {
  const domId = dom.getAttribute('id');
  const selectSpans = $(`#${domId} span`);
  let curSlot = numb <= 2 ? numb : numb - 3;

  slots[curSlot][slot].push(selectSpans);
}


// Funciton to create multiple spans
function mulCreate(arr, str, slot) {
  for ( var i = 0; i < arr.length; i++ ) {
    // Create && Add span to parent
    createSpans(arr[i], str[i]);

    // Add parent to slots
    addToSlot(arr[i], slot, i);
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
  mulCreate(allList, text1, slotMain);
  mulCreate(allMenu, text2, slotMenu);
}


// Call Start function
start();