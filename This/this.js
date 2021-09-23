console.log(this);




const myObject = {
    fName : "shariful",
    lName : "Islam",
    age : 23,
    country : "Bangladesh",
    fullName : function () {
        return this.fName + " " + this.lName;
    }
}

const person = {
    fName : "Rifan",
    lName : "Ahmed",
}

console.log(myObject.fullName.call(person));





function anyPerson(a,b,c) {
    return this.a + " "+ this.b +" " + this.c ;
}

const abc = {
    a : "ami",
    b: "tmi",
    c: function () {
        return ` ${this.a} ${this.b}`
    }
}

console.log(anyPerson.apply(abc));