"use strict";
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing cricket`);
    }
}

class Perforomance extends Person{
    constructor(name,age,status,country){
        super(name,age);
        this.status = status;
        this.country = country;
    }
}

const sakib = new Perforomance("sakib",35,"All-Rounder","Bangladesh")

console.log(sakib);
sakib.play()
