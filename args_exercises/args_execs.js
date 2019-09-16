// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

// function sum(...args) {
  //   let sum = 0;
  //   for (let i = 0; i < args.length; i++) {
    //     sum += args[i];
    //   }
    //   return sum;
    // }
    
    
    // console.log(sum(1, 2, 3, 4));
    // console.log(sum(1, 2, 3, 4, 5));
    
// Function.prototype.myBind = function(context, ...bindArgs) {
//   let that = this;
//   return function(...callArgs) {
//     return that.apply(context, bindArgs.concat(callArgs))
//   }
// };

// Function.prototype.myBind = function(context) {
//   let that = this;
//   let bindArgs = Object.values(arguments).slice(1);
//   return function() {
//     let callArgs = Object.values(arguments)
//     return that.apply(context, bindArgs.concat(callArgs));
//   };
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// //  Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
  let nums = []
  return function _curriedSum(num1) {
    nums.push(num1)
    if (nums.length === numArgs) {
      return nums.reduce((a, b) => a + b);
    }
  return _curriedSum
  }
}



// Function.prototype.curry = function(numArgs) {
//   let nums = [];
//   let that = this;
//   return function _curry(num) {
//     nums.push(num);
//     // debugger;
//     if (nums.length === numArgs) {
//       return that.apply(null, nums)
//       // return nums.reduce((a, b) => a + b);
//     }
//     return _curry;
//   }
// }

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // return that.apply(null, args);
      // return args.reduce((a, b) => a + b);
      return that(...args);
    }
    return _curry;
  };
};

function sum() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

const summer = sum.curry(4);
console.log(summer(5)(30)(20)(1)); // => 56