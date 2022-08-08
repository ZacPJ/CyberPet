const inquirer = require('inquirer');
const greeting = require('./randomGreetings');
let hunger = 0;
let thirst = 0;
let mood = 0;
let energy = 0;
let comfort = 0;

let species = {
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
            chair: 2,
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


class Profile {
    constructor(name){
        this.name = name
        this.species = species
    }
    
    set updateSpecies(entry){
        this.species = entry
    }
};

const petName = [
    {
        type: 'input',
        name: 'getName',
        message: "What'd you like to name your pet?"
    }
];
let pet = '';
const status = () => {
    console.log(`Name: ${pet.name}\nSpecies: ${pet.species}\n\nStats 0 - 10 (worst to best)\n\nHunger = ${hunger}/10\nThirst = ${thirst}/10\nMood = ${mood}/10\nEnergy = ${energy}/10\nComfort = ${comfort}/10\n\n`)
};



const start = async () => {
    const chosenSpecies = await inquirer.prompt([
        {
            type: 'list',
            name: 'getSpecies',
            message: "Choose a species:",
            choices: [...Object.keys(species)]
        }
    ])
    const response = await inquirer.prompt(petName)
    pet = new Profile(response.getName)
    pet.updateSpecies = chosenSpecies.getSpecies
    status();
    greeting.greetingMain(pet.species);

    let interactions = [
        "Feed",
        "Hydrate",
        "Play",
        "Bedtime",
        "Clean",
        "Check Status"
    ];

    while((hunger+thirst+mood+energy+comfort)<50) {
        const userChoice = await inquirer.prompt([
            {
                type: 'list',
                name: 'getChoice',
                message: `How would you like to interact with ${pet.name}?`,
                choices: interactions
            }
        ])
        if(userChoice.getChoice === "Feed") {
            const hungerOptions = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'getFood',
                    message: "Choose a feeding action:",
                    choices: [...Object.keys(species[chosenSpecies.getSpecies].food)]
                }
            ])
            hunger += species[chosenSpecies.getSpecies].food[hungerOptions.getFood]
            if(hunger<0){
                hunger = 0
            };
            if(hunger>10){
                hunger = 10
            };
            greeting.greetingFeed(pet.species)
        } else if(userChoice.getChoice === "Hydrate") {      
            const thirstOptions = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'getDrinks',
                    message: "Choose a hydration action:",
                    choices: [...Object.keys(species[chosenSpecies.getSpecies].drinks)]
                }
            ])
            thirst += species[chosenSpecies.getSpecies].drinks[thirstOptions.getDrinks]
            if(thirst>10){
                thirst = 10
            };
            greeting.greetingHydrate(pet.species)
        } else if(userChoice.getChoice === "Play") {    
            const moodOptions = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'getEnrichment',
                    message: "Choose a playing action:",
                    choices: [...Object.keys(species[chosenSpecies.getSpecies].enrichment)]
                }
            ])
            mood += species[chosenSpecies.getSpecies].enrichment[moodOptions.getEnrichment]
            if(mood>10){
                mood = 10
            };
            greeting.greetingPlay(pet.species)
        } else if(userChoice.getChoice === "Bedtime") {
            const energyOptions = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'getBedding',
                    message: "Choose a sleeping action:",
                    choices: [...Object.keys(species[chosenSpecies.getSpecies].bedding)]
                }
            ])
            energy += species[chosenSpecies.getSpecies].bedding[energyOptions.getBedding]
            if(energy>10){
                energy = 10
            };
            greeting.greetingSleep(pet.species)
        } else if(userChoice.getChoice === "Clean") {
            const comfortOptions = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'getHygiene',
                    message: "Choose a cleaning action:",
                    choices: [...Object.keys(species[chosenSpecies.getSpecies].hygiene)]
                }
            ])
            comfort += species[chosenSpecies.getSpecies].hygiene[comfortOptions.getHygiene]
            if(comfort>10){
                comfort = 10
            };
            greeting.greetingClean(pet.species)
        } else if(userChoice.getChoice === "Check Status") {
                    status()
        }
    }
    if((hunger+thirst+mood+energy+comfort)==50){
        console.log(`CONGRATULATIONS!! You made ${pet.name} reach it's full potential by maximising all of it's status points! Please play again :)`)
    }
};

start();