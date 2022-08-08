const effect = [
    "bold",
    "dim",
    "italic",
    "inverse",
    "reset",
    "underline"
]
const punctuation1 = [
    ".",
    "!",
    ",",
]
const punctuation2 = [
    ".",
    "!",
    "...",
    "~"
]
const colour = [
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "redBright",
    "yellowBright",
    "blueBright",
    "greenBright",
    "cyanBright",
    "whiteBright"
]
const welcome = [
    "Time",
    "Hello",
    "Greetings",
    "Salutations",
    "G'day",
    "Hola",
]
const chalk = require("chalk")
randomColour = () =>{
    return colour[Math.floor(Math.random()*colour.length)]
}
randomModifier = () =>{
    return effect[Math.floor(Math.random()*effect.length)]
}
randomWelcome = () =>{
    welcomeChoice =  welcome[Math.floor((Math.random()*welcome.length))]
    if(welcomeChoice == "Time"){
        time = currentTime.getHours()
        if (4<=time && time<=11){
            welcomeChoice = "Morning"
        }else if(12<= time && time<=17){
            welcomeChoice = "Afternoon"
        }else if(18<=time&& time<23){
            welcomeChoice = "Evening"
        }else{
            welcomeChoice = "It's very late"
        }
    }
    return welcomeChoice
}

function greetingMain(animal) {
const greeting = [
    "Welcome",
    "Welcome back",
    "I missed you",
    "There's so much to do",
    "I can't wait to play",
    "What will we do today?",
    "Where have you been?",
    "Look what I can do",
    "Nice to meet you",
    "Where were we?",
    "*Smiles*",
    "I cant wait",
]
animalNoise = []
if(animal == "cat"){
    animalNoise = [
        "*Meows*",
        "Purr",
        "*Purrs*",
        "*Purrrr*",
        "*Cleans Self*",
        "*Hiss*",
        "*Growls*",
    ]
}else if (animal == "dog"){
    animalNoise = [
        "*Woof*",
        "*Bark*",
        "*Grrr*",
        "*Bow wow*",
        "*Howl*",
        "*Scratches*",
        "*Rolls Over*"
    ]
}else if (animal == "bear"){
    animalNoise =[
        "*Growl*",
        "*Roar*",
        "*Eats Honey*",
        "Oh bother",
        "*Grumbles*",
        "*Grrr*",
        "*Bark* I mean *Growl*",
        "*Generic Bear Noises*",
    ]
}else if (animal == "snake"){
    animalNoise = [
        "*Hiss*",
        "*Ssss*",
        "*SsssSss*",
        "*Slithers*",
        "*Sticks out tongue*",
        "*Rattles Tail*"
    ]
}else if (animal == "human"){
    animalNoise = [
        "Is this even legal?",
        "Oh boy, I sure love taxes",
        "I need to go to work soon",
        "How do you even buy a human pet",
        "Are you human too?",
        "*Laughs*",
        "*Looks at you expectantly*"
    ]
}
intro = () =>{
    randomGreeting = greeting[Math.floor((Math.random()*greeting.length))]
    randomPunc1 = punctuation1[Math.floor((Math.random()*punctuation1.length))]
    randomPunc2 = punctuation2[Math.floor((Math.random()*punctuation2.length))]
    randomNoise = animalNoise[Math.floor((Math.random()*animalNoise.length))]
    currentTime = new Date ()
    if(randomGreeting.charAt(randomGreeting.length-1)=="?"){
        randomPunc2 = ""
    }     

    finalWelcome = chalk[randomColour()](chalk[randomModifier()]((`${randomWelcome()}${randomPunc1}`)))
    finalGreeting = chalk[randomColour()](chalk[randomModifier()](`${randomGreeting}${randomPunc2}`))
    finalNoise = chalk[randomColour()](chalk[randomModifier()](`${randomNoise}`))

    console.log(`\"${finalWelcome} ${finalGreeting} ${finalNoise}\"`)
}
intro()
}


function greetingClean(animal) {

    const greeting = [
        "All Clean",
        "Scrubbed Clean",
        "No more dirt",
        "Squeaky Clean",
        "Dirt be gone",
    ]
    animalNoise = []
    if(animal == "cat"){
        greeting.push(
            "I hate water",
            "I will never trust you again",
            "My fur is all damp",
            "*Glares angrily at you",
            "Surprisingly not that bad",
            "I expect many treats"
        )
        animalNoise = [
            "*Meows*",
            "Purr",
            "*Purrs*",
            "*Purrrr*",
            "*Cleans Self*",
            "*Hiss*",
            "*Growls*",
        ]
    }else if (animal == "dog"){
        greeting.push(
            "I hate water",
            "Yay water",
            "My fur is all damp",
            "Smells like wet dog",
            "*Shakes water everywhere"
        )
        animalNoise = [
            "*Woof*",
            "*Bark*",
            "*Grrr*",
            "*Bow wow*",
            "*Howl*",
            "*Scratches*",
            "*Rolls Over*"
        ]
    }else if (animal == "bear"){
        greeting.push(
            "That was one big bath",
            "Smells like wet dog... err bear",
            "*Gives a sloppy, wet bear hug",
            "Clean bear is happy bear",
            "A salmon would go perfect with this"
        )
        animalNoise =[
            "*Growl*",
            "*Roar*",
            "*Eats Honey*",
            "Oh bother",
            "*Grumbles*",
            "*Grrr*",
            "*Bark* I mean *Growl*",
            "*Generic Bear Noises*",
        ]
    }else if (animal == "snake"){
        greeting.push(
            "*Hisses contentedly*",
            "Slippery, slithery snake",
            "Soapy snake",
            "Its kinda cold",
            "That was nice and warm"
        )
        animalNoise = [
            "*Hiss*",
            "*Ssss*",
            "*SsssSss*",
            "*Slithers*",
            "*Sticks out tongue*",
            "*Rattles Tail*"
        ]
    }else if (animal == "human"){
        greeting.push(
            "Can I get some privacy?",
            "This is a little weird",
            "Rub a dub dub",
            "I can clean myself you know",
            "I can clean myself y'know",
            "That was embarrassing",
            "All cleaned up",
            "Looking fresh"
        )
        animalNoise = [
            "Is this even legal?",
            "Oh boy, I sure love taxes",
            "I need to go to work soon",
            "How do you even buy a human pet",
            "Are you human too?",
            "*Laughs*",
            "*Looks at you expectantly*"
        ]
    }
    intro = () =>{
        randomGreeting = greeting[Math.floor((Math.random()*greeting.length))]
        randomPunc1 = punctuation1[Math.floor((Math.random()*punctuation1.length))]
        randomPunc2 = punctuation2[Math.floor((Math.random()*punctuation2.length))]
        randomNoise = animalNoise[Math.floor((Math.random()*animalNoise.length))]
        currentTime = new Date ()
        if(randomGreeting.charAt(randomGreeting.length-1)=="?"){
            randomPunc2 = ""
        }     
    
        finalGreeting = chalk[randomColour()](chalk[randomModifier()](`${randomGreeting}${randomPunc2}`))
        finalNoise = chalk[randomColour()](chalk[randomModifier()](`${randomNoise}`))
    
        console.log(`\"${finalGreeting} ${finalNoise}\"`)
    }
    intro()
}

function greetingFeed(animal){
    const greeting = [
        "Yum-Yum",
        "Yay, food",
        "Tasty"
    ]
    animalNoise = []
    if(animal == "cat"){
        greeting.push(
            "Perfect for a cat",
            "Perfect for someone like me",
            "Fit for a king",
            "Can I get more",
            "Give me more",
            "I'm still hungry"
        )
        animalNoise = [
            "*Meows*",
            "Purr",
            "*Purrs*",
            "*Purrrr*",
            "*Cleans Self*",
            "*Hiss*",
            "*Growls*",
        ]
    }else if (animal == "dog"){
        greeting.push(
            "*Gulps down food*",
            "All gone",
            "Food?",
            "More Food?",
            "*Rolls over for more food*"

        )
        animalNoise = [
            "*Woof*",
            "*Bark*",
            "*Grrr*",
            "*Bow wow*",
            "*Howl*",
            "*Scratches*",
        ]
    }else if (animal == "bear"){
        greeting.push(
            "Fresh and tasty",
            "Perfect for a bear",
            "*Yawn* I kinda wanna hibernate after that",
            "*Rubs belly*",
            "*Lazes around, feeling more full*",
            "~Today's the day the teddy bears have a picnic~"
        )
        animalNoise =[
            "*Growl*",
            "*Roar*",
            "*Eats Honey*",
            "Oh bother",
            "*Grumbles*",
            "*Grrr*",
            "*Bark* I mean *Growl*",
            "*Generic Bear Noises*",
        ]
    }else if (animal == "snake"){
        greeting.push(
            "*Hisses contentedly*",
            "This will do for a while*",
            "Back to sleep"
        )
        animalNoise = [
            "*Hiss*",
            "*Ssss*",
            "*SsssSss*",
            "*Slithers*",
            "*Sticks out tongue*",
            "*Rattles Tail*"
        ]
    }else if (animal == "human"){
        greeting.push(
            "That was good",
            "A varied diet is good",
            "This again?",
            "Seconds please",
            "Please sir, can I have some more?",
            "Thanks"
        )
        animalNoise = [
            "Is this even legal?",
            "Oh boy, I sure love taxes",
            "I need to go to work soon",
            "How do you even buy a human pet",
            "Are you human too?",
            "*Laughs*",
            "*Looks at you expectantly*"
        ]
    }
    intro = () =>{
        randomGreeting = greeting[Math.floor((Math.random()*greeting.length))]
        randomPunc1 = punctuation1[Math.floor((Math.random()*punctuation1.length))]
        randomPunc2 = punctuation2[Math.floor((Math.random()*punctuation2.length))]
        randomNoise = animalNoise[Math.floor((Math.random()*animalNoise.length))]
        currentTime = new Date ()
        if(randomGreeting.charAt(randomGreeting.length-1)=="?"){
            randomPunc2 = ""
        }     
    
        finalGreeting = chalk[randomColour()](chalk[randomModifier()](`${randomGreeting}${randomPunc2}`))
        finalNoise = chalk[randomColour()](chalk[randomModifier()](`${randomNoise}`))
    
        console.log(`\"${finalGreeting} ${finalNoise}\"`)
    }
    intro()
}

function greetingHydrate(animal){
    const greeting = [
        "Glug"
    ]
    animalNoise = []
    if(animal == "cat"){
        greeting.push(
            "Perfect for a cat",
            "Perfect for someone like me",
            "Fit for a king",
            "Good to drink",
            "Nice and hydrated",
            "*Slaps it*"
        )
        animalNoise = [
            "*Meows*",
            "Purr",
            "*Purrs*",
            "*Purrrr*",
            "*Cleans Self*",
            "*Hiss*",
            "*Growls*",
        ]
    }else if (animal == "dog"){
        greeting.push(
            "*Laps it up*",
            "*Mostly just digs in it",
            "*Barks*",
            "Nice and hydrated"
        )
        animalNoise = [
            "*Woof*",
            "*Bark*",
            "*Grrr*",
            "*Bow wow*",
            "*Howl*",
            "*Scratches*",
        ]
    }else if (animal == "bear"){
        greeting.push(
            "I wish there was honey",
            "Surprisingly sweet",
            "Beats dehydration",
        )
        animalNoise =[
            "*Growl*",
            "*Roar*",
            "*Eats Honey*",
            "Oh bother",
            "*Grumbles*",
            "*Grrr*",
            "*Bark* I mean *Growl*",
            "*Generic Bear Noises*",
        ]
    }else if (animal == "snake"){
        greeting.push(
            "*Hisses contentedly*",
            "This will do for a while*",
            "Back to sleep",
            "Big drink",
            "Sssslurp"
        )
        animalNoise = [
            "*Hiss*",
            "*Ssss*",
            "*SsssSss*",
            "*Slithers*",
            "*Sticks out tongue*",
            "*Rattles Tail*"
        ]
    }else if (animal == "human"){
        greeting.push(
            "That was good",
            "This again?",
            "Another glass barman",
            "Aren't people supposed to drink like, 8 litres of water a day?",
            "Big sip"
        )
        animalNoise = [
            "Is this even legal?",
            "Oh boy, I sure love taxes",
            "I need to go to work soon",
            "How do you even buy a human pet",
            "Are you human too?",
            "*Laughs*",
            "*Looks at you expectantly*"
        ]
    }
    intro = () =>{
        randomGreeting = greeting[Math.floor((Math.random()*greeting.length))]
        randomPunc1 = punctuation1[Math.floor((Math.random()*punctuation1.length))]
        randomPunc2 = punctuation2[Math.floor((Math.random()*punctuation2.length))]
        randomNoise = animalNoise[Math.floor((Math.random()*animalNoise.length))]
        currentTime = new Date ()
        if(randomGreeting.charAt(randomGreeting.length-1)=="?"){
            randomPunc2 = ""
        }     
    
        finalGreeting = chalk[randomColour()](chalk[randomModifier()](`${randomGreeting}${randomPunc2}`))
        finalNoise = chalk[randomColour()](chalk[randomModifier()](`${randomNoise}`))
    
        console.log(`\"${finalGreeting} ${finalNoise}\"`)
    }
    intro() 
}

function greetingPlay(animal){
    const greeting = [
        "*Seems tired out*",
        "*That was fun*",
        "*How do they have so much energy?*"
    ]
    animalNoise = []
    if(animal == "cat"){
        greeting.push(
            "The most fun thing would be for you to leave me alone",
            "I am God, you are beneath me",
            "I win, the enemy is defeated",
            "*Flops over*",
            "Seems our \"Lord\" is all tuckered out."
        )
        animalNoise = [
            "*Meows*",
            "Purr",
            "*Purrs*",
            "*Purrrr*",
            "*Cleans Self*",
            "*Hiss*",
            "*Growls*",
        ]
    }else if (animal == "dog"){
        greeting.push(
            "*Runs around excitedly*",
            "More",
            "More more",
            "*Chases tail*",
            "*Sits down, panting*",
            "Simple things please simple minds"
        )
        animalNoise = [
            "*Woof*",
            "*Bark*",
            "*Grrr*",
            "*Bow wow*",
            "*Howl*",
            "*Scratches*",
            "*Pants*",
            "*Heavy Panting*",
            "*Tongue flops out*"
        ]
    }else if (animal == "bear"){
        greeting.push(
            "Look at em go",
            "That was fun",
            "You deserve a \"BEAR\" hug",
            "Romping, stomping, so much fun",
            "As fun as that teddy bear's picnic",
            "~If you go down to the woods today~",
            "~Be sure of a big surprise~"
        )
        animalNoise =[
            "*Growl*",
            "*Roar*",
            "*Eats Honey*",
            "Oh bother",
            "*Grumbles*",
            "*Grrr*",
            "*Bark* I mean *Growl*",
            "*Generic Bear Noises*",
        ]
    }else if (animal == "snake"){
        greeting.push(
            "*Hisses contentedly*",
            "This will do for a while*",
            "Back to sleep",
            "Climbs around, happily",
            "Ssssatisssfying"
        )
        animalNoise = [
            "*Hiss*",
            "*Ssss*",
            "*SsssSss*",
            "*Slithers*",
            "*Sticks out tongue*",
            "*Rattles Tail*"
        ]
    }else if (animal == "human"){
        greeting.push(
            "That was good",
            "I will beat you",
            "I win",
            "I lost?",
            "Welp, that was fun, back to work now",
            "New game?"
        )
        animalNoise = [
            "Is this even legal?",
            "Oh boy, I sure love taxes",
            "I need to go to work soon",
            "How do you even buy a human pet",
            "Are you human too?",
            "*Laughs*",
            "*Looks at you expectantly*"
        ]
    }
    intro = () =>{
        randomGreeting = greeting[Math.floor((Math.random()*greeting.length))]
        randomPunc1 = punctuation1[Math.floor((Math.random()*punctuation1.length))]
        randomPunc2 = punctuation2[Math.floor((Math.random()*punctuation2.length))]
        randomNoise = animalNoise[Math.floor((Math.random()*animalNoise.length))]
        currentTime = new Date ()
        if(randomGreeting.charAt(randomGreeting.length-1)=="?"){
            randomPunc2 = ""
        }     
    
        finalGreeting = chalk[randomColour()](chalk[randomModifier()](`${randomGreeting}${randomPunc2}`))
        finalNoise = chalk[randomColour()](chalk[randomModifier()](`${randomNoise}`))
    
        console.log(`\"${finalGreeting} ${finalNoise}\"`)
    } 
    intro() 
}
function greetingSleep(animal){
    const greeting = [
        "Zzzzz",
        "*Snores*",
        "Seems content",
        "So calm when they sleep",
        "Its quiet"
    ]
    animalNoise = []
    if(animal == "cat"){
        greeting.push(
            "A nice catnap",
            "Snuggled in a warm place",
            "After a long day of being a cat, I must now nap",
            "*Flops over*",
            "Seems our \"Lord\" is all tuckered out."
        )
        animalNoise = [
            "*Meows*",
            "Purr",
            "*Purrs*",
            "*Purrrr*",
            "*Cleans Self*",
            "*Hiss*",
            "*Growls*",
        ]
    }else if (animal == "dog"){
        greeting.push(
            "*Flops onto the ground*",
            "Tomorrow will be a new day",
            "Fun over, rest now",
            "During their sleep, they kick their legs",
            "Aww they are dreaming of running"
        )
        animalNoise = [
            "*Woof*",
            "*Bark*",
            "*Grrr*",
            "*Bow wow*",
            "*Howl*",
            "*Scratches*",
            "*Pants*",
            "*Heavy Panting*",
            "*Tongue flops out*"
        ]
    }else if (animal == "bear"){
        greeting.push(
            "Bears can hibernate for months at a time",
            "*Dreams of catching that Goldilocks*",
            "*Dreams of honey*",
            "*Dreams of their marmite loving friend*",
            "*Dreams of piglet*",
            "*Dreams of catching salmon*"
        )
        animalNoise =[
            "*Growl*",
            "*Roar*",
            "*Eats Honey*",
            "Oh bother",
            "*Grumbles*",
            "*Grrr*",
            "*Bark* I mean *Growl*",
            "*Generic Bear Noises*",
        ]
    }else if (animal == "snake"){
        greeting.push(
            "*Quietly hisses in their sleep*",
            "Curls up into a spiral",
            "Another lazy day over",
            "Snakes actually sleep a lot"
        )
        animalNoise = [
            "*Hiss*",
            "*Ssss*",
            "*SsssSss*",
            "*Slithers*",
            "*Sticks out tongue*",
            "*Rattles Tail*"
        ]
    }else if (animal == "human"){
        greeting.push(
            "I'm tuckered out",
            "*Dreams of humanly things*",
            "*Dreams of the next big game*",
            "This is comfy",
            "Not very comfy",
            "A new dawn, a new day, still the same life"
        )
        animalNoise = [
            "Is this even legal?",
            "Oh boy, I sure love taxes",
            "I need to go to work soon",
            "How do you even buy a human pet",
            "Are you human too?",
            "*Laughs*",
            "*Looks at you expectantly*"
        ]
    }
    intro = () =>{
        randomGreeting = greeting[Math.floor((Math.random()*greeting.length))]
        randomPunc1 = punctuation1[Math.floor((Math.random()*punctuation1.length))]
        randomPunc2 = punctuation2[Math.floor((Math.random()*punctuation2.length))]
        randomNoise = animalNoise[Math.floor((Math.random()*animalNoise.length))]
        currentTime = new Date ()
        if(randomGreeting.charAt(randomGreeting.length-1)=="?"){
            randomPunc2 = ""
        }     
    
        finalGreeting = chalk[randomColour()](chalk[randomModifier()](`${randomGreeting}${randomPunc2}`))
        finalNoise = chalk[randomColour()](chalk[randomModifier()](`${randomNoise}`))
    
        console.log(`\"${finalGreeting} ${finalNoise}\"`)
    } 
    intro() 
}
module.exports = {greetingMain, greetingClean, greetingFeed, greetingHydrate, greetingPlay, greetingSleep}