// function Surrogate() {};
// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function(superClass) {
  let Surrogate = function(){};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  // we create a surrogate to act as a buffer between the child and the parent, then we want the surrogates prototype
  // to equal the parents prototype, we create a new instance of the surrogate and then set the childs prototype equal
  // to the surrogate, then we set the the childs contructor to be equal to the child object.
}

Function.prototype.inherits = function(superClass) {
  this.prototype = Object.create(superClass.prototype)
}
function MovingObject() {}

MovingObject.prototype.shoot = function() {
  console.log("i shoot bang bang");
}

function Ship() {}
Ship.inherits(MovingObject);

function Asteroid() {}
Asteroid.inherits(MovingObject);

// const ship = new Ship();
// ship.shoot();
// const asteroid = new Asteroid();
// asteroid.shoot();