var level1 = [
  {
    q: 'What is this bicycle part?<p/><img class="question-img" src="images/bicycle parts/wheel.svg">',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 2,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/pedal.svg"></p>',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 0,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/chain.svg"></p>',
    options: ['Pedal', 'chain', 'Wheel', 'Seat'],
    correctIndex: 1,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/handlebar.svg"></p>',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 1,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/seat.svg"></p>',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 3,
  },
];

var level2 = [
  {
    q: 'What is this car part?<p/><img class="question-img" src="images/car parts/wheels.svg">',
    options: ['Antenna', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 1,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/antenna.svg"></p>',
    options: ['Antenna', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 0,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/headlight.svg"></p>',
    options: ['Door', 'Front light', 'Head light', 'Screen'],
    correctIndex: 2,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/side mirror.svg"></p>',
    options: ['Side mirror', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 0,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/windscreen.svg"></p>',
    options: ['Side mirror', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 3,
  },
];

var level3= [
  {
    q: 'What is this plane part?<p/><img class="question-img" src="images/plane parts/cabin.png">',
    options: ['Flaps', 'Wings', 'Cabin', 'Engine'],
    correctIndex: 2,
  },
  {
    q: 'What is this plane part?<p><img class="question-img" src="images/plane parts/cockpit.png"></p>',
    options: ['Cockpit', 'Propeller', 'Landing Gear', 'Rudder'],
    correctIndex: 0,
  },
  {
    q: 'What is this plane part?<p><img class="question-img" src="images/plane parts/engine.png"></p>',
    options: ['Tail', 'engine', 'Slats', 'Wings'],
    correctIndex: 1,
  },
  {
    q: 'What is this plane part?<p><img class="question-img" src="images/plane parts/tail.png"></p>',
    options: ['Cockpit', 'Cabin', 'Tail', 'Fuselage'],
    correctIndex: 2,
  },
  {
    q: 'What is this plane part?<p><img class="question-img" src="images/plane parts/wing.png"></p>',
    options: ['Landing Gear', 'engine', 'Tail', 'Wings'],
    correctIndex: 3,
  },
];

export { level1, level2, level3 };
