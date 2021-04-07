let suit
let number


for (let i = 0; i < 4; i++) {
  switch (i) {
    case 0:
      suit = 'diamonds';
      break;
    case 1:
      suit = 'hearts';
      break;
    case 2:
      suit = 'clubs';
      break;
    case 3:
      suit = 'spades';
  }
  for (let j = 2; j < 15; j++) {
    if (j < 11) {
      number = j
      console.log(number + ' of ' + suit)
    } else {
      switch (j) {
        case 11:
          number = 'jack';
          break;
        case 12:
          number = 'queen';
          break;
        case 13:
          number = 'king';
          break;
        case 14:
          number = 'ace';
          break;
      }
      console.log(number + ' of ' + suit)
    }
  }
}
