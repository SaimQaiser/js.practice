let myHeroes = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy PWer is ${this.spiderman}`);
    }

}

Object.prototype.saim= function(){
    console.log('hi my name is saim');
}

heroPower.saim()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()