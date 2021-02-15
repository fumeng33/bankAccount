'use strict';

const assert = require('assert');
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// let jobs = {
//   "Driver": "Bus",
//   "Pilot": "Plane",
//   "Engineer": "Train",
// };
// holds two attributes title and na
class CrewMember {
  title; // driver, pilot, engineer 
  name; // Sam, Bob, Jake
  //two inputs for the constructor 
  constructor(inputTitle, inputName) {
    // two attributes for the name and title
    this.title = inputTitle;
    this.name = inputName;
  }
}

class Vehicle {
  type; // bus, plane, Train 
  name; // yellowBus, Albatross, trainThomas
  assignedCrew; // Sam, Bob, Jake

  constructor(inputType, inputName,) {
    this.type = inputType;
    this.name = inputName;
    this.assignedCrew = [];

  }
  // method: assigned crew will push the argument name crew
  assignCrew(crew) {
    this.assignedCrew.push(crew)
  }
  // declare a varible and assigned ship 
  isReady() {
    let isReady = false
    // if anyone is a pilot in this line 
    if (this.type == "Bus") {
      for (let i = 0; i <= this.assignedCrew.length - 1; i++) {
        // inspect every memeber in this crew to check the job title
        // we have the assignedcrew index 
        // in the for loop we need inspect their title matches the vehicle 
        // console.log(this.assignedCrew[i].title)
        if (this.assignedCrew[i].title == "Driver") {
          // return true 
          // the vehicle is ready to go 
          isReady = true;
        }
      }
      return isReady;
    }
    if (this.type == "Train") {
      for (let i = 0; i <= this.assignedCrew.length - 1; i++) {
        // inspect every memeber in this crew to check the job title
        // we have the assignedcrew index 
        // in the for loop we need inspect their title matches the vehicle 
        // console.log(this.assignedCrew[i].title)
        if (this.assignedCrew[i].title == "Engineer") {
          // return true 
          // the vehicle is ready to go 
          isReady = true;
        }
      }
      return isReady;
    }

    if (this.type == "Plane") {
      for (let i = 0; i <= this.assignedCrew.length - 1; i++) {
        // inspect every memeber in this crew to check the job title
        // we have the assignedcrew index 
        // in the for loop we need inspect their title matches the vehicle 
        // console.log(this.assignedCrew[i].title)
        if (this.assignedCrew[i].title == "Pilot") {
          // return true 
          // the vehicle is ready to go 
          isReady = true;
        }
      }
      return isReady;
    }

  }
}

const Bob = new CrewMember("Pilot", "Bob"); // taking in a title and name from the constructor
const Jake = new CrewMember("Engineer", "Jake");
const Sam = new CrewMember("Driver", "Sam");

const Albatross = new Vehicle("Plane", "Albatross");
const YellowBus = new Vehicle("Bus", "YellowBus");
const TrainThomas = new Vehicle("Train", "TrainThomas");

Albatross.assignCrew(Jake);
console.log(Albatross.isReady());

Albatross.assignCrew(Bob);
console.log(Albatross.isReady());

YellowBus.assignCrew(Sam);
console.log(YellowBus.isReady());

TrainThomas.assignCrew(Jake);
console.log(TrainThomas.isReady());

YellowBus.assignCrew(Bob);
console.log(YellowBus.isReady());

TrainThomas.assignCrew(Sam);
console.log(TrainThomas.isReady());



// UNIT TESTS: 

// can we create a new instance call crew1 name bob and title Pilot 
if (typeof describe === 'function') {
  describe('CrewMember', function () {
    it('should have a title, a name, and a vehicle before is ready', function () {
      const crew1 = new CrewMember('Pilot', 'Bob');
      assert.equal(crew1.name, 'Bob');
      assert.equal(crew1.title, 'Pilot');
    });
  });

  describe('Vehicle', function () {
    it('should have a type, a name before the vehicle is ready', function () {
      let Plane = new Vehicle('Plane', 'Albatross');
      assert.equal(Plane.name, 'Albatross');
      assert.equal(Plane.type, 'Plane');
      assert.equal(Plane.assignedCrew.length, 0); // empty string array of 0
    });
  });

    describe('assignedCrew', function () {
      it('vehicle should assign the right crew member', function () {
        let crew1 = new CrewMember ('Driver', 'Sam');
        let Vehicle1 = new Vehicle ('Train', 'trainThomas')
        Vehicle1.assignCrew(crew1) // assigned a vehicle
        assert.equal(Vehicle1.assignedCrew.length, 1);
      });

    });


      // describe('isReady', function () {
      // it('the vehicle is ready with the correct assigned crew and vehicle', function () {
      //   let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      //   assert.equal(mav.name, 'Mars Ascent Vehicle');
      //   assert.equal(mav.type, 'MAV');
      //   assert.equal(mav.ability, 'Ascend into low orbit');
      //   assert.equal(mav.crew.length, 0);
      // });
}