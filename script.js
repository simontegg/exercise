var _ = require('lodash');

var N = [1,1,1,2,2,2,2,3,3,3,4,4,5];
var Patterns = ['squat', 'hinge', 'push', 'pull', 'flow'];
var yogaTally = 12;

var Movements = {
  squat: {
    main: 'front-squat',
    alt: 'back-squat'
  },
  hinge: {
    main: 'press-handstand',
    alt: 'dead-lift'
  },
  push: {
    main: 'planche',
    alt: 'dumbell press'
  },
  pull: {
    main: 'muscle-up',
    alt: 'one-arm-chinup-progressions'
  },
  flow: {
    main: 'prasara yoga',
    alt: 'floreio'
  }

}


var n = _.shuffle(N)[0];
var today;
console.log('n', n)
if (n > 0) {
  today = _.shuffle(Patterns).slice(0,n);
  console.log('today', today)
  for (var i=0; i < today.length; i++) {
    var pattern = today[i];
    if (Math.random() <= 0.8) {
      console.log(Movements[pattern].main);
    } else {
      console.log(Movements[pattern].alt);
    }
  }
} else {
  console.log('rest day')
}







