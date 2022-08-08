"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var inquirer = require('inquirer');

var greeting = require('./randomGreetings');

var hunger = 0;
var thirst = 0;
var mood = 0;
var energy = 0;
var comfort = 0;
var species = {
  cat: {
    food: {
      dry: 7,
      wet: 5,
      stealFromPlate: 4,
      treat: 1
    },
    drinks: {
      water: 8,
      lactoFreeMilk: 6,
      abandonedTea: 4
    },
    enrichment: {
      madOne: 10,
      danglyWand: 7,
      chaseMouse: 4,
      chaseDog: 5,
      scratchFurniture: 3
    },
    bedding: {
      catBed: 2,
      freshClothing: 10,
      sunPatch: 6,
      humanLap: 4
    },
    hygiene: {
      bathe: 0,
      brush: 6,
      cleanLitter: 8,
      teeth: 2
    }
  },
  dog: {
    food: {
      dry: 7,
      wet: 5,
      leftOvers: 4,
      treat: 1,
      grass: -2
    },
    drinks: {
      water: 8
    },
    enrichment: {
      walk: 7,
      fetch: 5,
      tugOfWar: 4,
      chaseTail: 2,
      chaseCat: 6
    },
    bedding: {
      dogBed: 5,
      humanBed: 8,
      furniture: 4,
      floor: 2
    },
    hygiene: {
      bathe: 6,
      teeth: 4,
      trim: 3,
      brush: 5
    }
  },
  bear: {
    food: {
      fish: 6,
      honey: 1,
      berries: 3,
      mammal: 9
    },
    drinks: {
      water: 8
    },
    enrichment: {
      treeClimb: 4,
      scratchingPost: 2,
      chaseHuman: 6,
      forage: 5,
      reflection: 3
    },
    bedding: {
      den: 7,
      meadow: 4,
      tree: 2
    },
    hygiene: {
      bathe: 7,
      scratchTree: 4,
      cleanDen: 6
    }
  },
  snake: {
    food: {
      pinky: 1,
      fluffy: 2,
      mouse: 5,
      rat: 8
    },
    drinks: {
      water: 8
    },
    enrichment: {
      handlingSession: 4,
      freeRoam: 7,
      bassyMusic: 2
    },
    bedding: {
      naturalSide: 10,
      heatedSide: 6
    },
    hygiene: {
      substrate: 7,
      bathe: 6,
      sheddingToy: 3
    }
  },
  human: {
    food: {
      cereal: 3,
      sandwhich: 4,
      salad: 2,
      roast: 8,
      steak: 7,
      lasagne: 6,
      chocolate: 1
    },
    drinks: {
      water: 8,
      pop: 4,
      alcohol: 0,
      juice: 7,
      tea: 5,
      coffee: 5
    },
    enrichment: {
      park: 7,
      games: 8,
      reading: 5,
      music: 4,
      tv: 6,
      yoga: 6,
      watchPaintDry: 0
    },
    bedding: {
      bed: 7,
      sofa: 4,
      chair: 2
    },
    hygiene: {
      washingUp: 5,
      dusting: 3,
      hoovering: 4,
      bins: 6,
      useToilet: 3,
      bodyWash: 7,
      teeth: 4
    }
  }
};

var Profile =
/*#__PURE__*/
function () {
  function Profile(name) {
    _classCallCheck(this, Profile);

    this.name = name;
    this.species = species;
  }

  _createClass(Profile, [{
    key: "updateSpecies",
    set: function set(entry) {
      this.species = entry;
    }
  }]);

  return Profile;
}();

;
var petName = [{
  type: 'input',
  name: 'getName',
  message: "What'd you like to name your pet?"
}];
var pet = '';

var status = function status() {
  console.log("Name: ".concat(pet.name, "\nSpecies: ").concat(pet.species, "\n\nStats 0 - 10 (worst to best)\n\nHunger = ").concat(hunger, "/10\nThirst = ").concat(thirst, "/10\nMood = ").concat(mood, "/10\nEnergy = ").concat(energy, "/10\nComfort = ").concat(comfort, "/10\n\n"));
};

var start = function start() {
  var chosenSpecies, response, interactions, userChoice, hungerOptions, thirstOptions, moodOptions, energyOptions, comfortOptions;
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getSpecies',
            message: "Choose a species:",
            choices: _toConsumableArray(Object.keys(species))
          }]));

        case 2:
          chosenSpecies = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(inquirer.prompt(petName));

        case 5:
          response = _context.sent;
          pet = new Profile(response.getName);
          pet.updateSpecies = chosenSpecies.getSpecies;
          status();
          greeting.greetingMain(pet.species);
          interactions = ["Feed", "Hydrate", "Play", "Bedtime", "Clean", "Check Status"];

        case 11:
          if (!(hunger + thirst + mood + energy + comfort < 50)) {
            _context.next = 70;
            break;
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getChoice',
            message: "How would you like to interact with ".concat(pet.name, "?"),
            choices: interactions
          }]));

        case 14:
          userChoice = _context.sent;

          if (!(userChoice.getChoice === "Feed")) {
            _context.next = 27;
            break;
          }

          _context.next = 18;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getFood',
            message: "Choose a feeding action:",
            choices: _toConsumableArray(Object.keys(species[chosenSpecies.getSpecies].food))
          }]));

        case 18:
          hungerOptions = _context.sent;
          hunger += species[chosenSpecies.getSpecies].food[hungerOptions.getFood];

          if (hunger < 0) {
            hunger = 0;
          }

          ;

          if (hunger > 10) {
            hunger = 10;
          }

          ;
          greeting.greetingFeed(pet.species);
          _context.next = 68;
          break;

        case 27:
          if (!(userChoice.getChoice === "Hydrate")) {
            _context.next = 37;
            break;
          }

          _context.next = 30;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getDrinks',
            message: "Choose a hydration action:",
            choices: _toConsumableArray(Object.keys(species[chosenSpecies.getSpecies].drinks))
          }]));

        case 30:
          thirstOptions = _context.sent;
          thirst += species[chosenSpecies.getSpecies].drinks[thirstOptions.getDrinks];

          if (thirst > 10) {
            thirst = 10;
          }

          ;
          greeting.greetingHydrate(pet.species);
          _context.next = 68;
          break;

        case 37:
          if (!(userChoice.getChoice === "Play")) {
            _context.next = 47;
            break;
          }

          _context.next = 40;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getEnrichment',
            message: "Choose a playing action:",
            choices: _toConsumableArray(Object.keys(species[chosenSpecies.getSpecies].enrichment))
          }]));

        case 40:
          moodOptions = _context.sent;
          mood += species[chosenSpecies.getSpecies].enrichment[moodOptions.getEnrichment];

          if (mood > 10) {
            mood = 10;
          }

          ;
          greeting.greetingPlay(pet.species);
          _context.next = 68;
          break;

        case 47:
          if (!(userChoice.getChoice === "Bedtime")) {
            _context.next = 57;
            break;
          }

          _context.next = 50;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getBedding',
            message: "Choose a sleeping action:",
            choices: _toConsumableArray(Object.keys(species[chosenSpecies.getSpecies].bedding))
          }]));

        case 50:
          energyOptions = _context.sent;
          energy += species[chosenSpecies.getSpecies].bedding[energyOptions.getBedding];

          if (energy > 10) {
            energy = 10;
          }

          ;
          greeting.greetingSleep(pet.species);
          _context.next = 68;
          break;

        case 57:
          if (!(userChoice.getChoice === "Clean")) {
            _context.next = 67;
            break;
          }

          _context.next = 60;
          return regeneratorRuntime.awrap(inquirer.prompt([{
            type: 'list',
            name: 'getHygiene',
            message: "Choose a cleaning action:",
            choices: _toConsumableArray(Object.keys(species[chosenSpecies.getSpecies].hygiene))
          }]));

        case 60:
          comfortOptions = _context.sent;
          comfort += species[chosenSpecies.getSpecies].hygiene[comfortOptions.getHygiene];

          if (comfort > 10) {
            comfort = 10;
          }

          ;
          greeting.greetingClean(pet.species);
          _context.next = 68;
          break;

        case 67:
          if (userChoice.getChoice === "Check Status") {
            status();
          }

        case 68:
          _context.next = 11;
          break;

        case 70:
          if (hunger + thirst + mood + energy + comfort == 50) {
            console.log("CONGRATULATIONS!! You made ".concat(pet.name, " reach it's full potential by maximising all of it's status points! Please play again :)"));
          }

        case 71:
        case "end":
          return _context.stop();
      }
    }
  });
};

start();