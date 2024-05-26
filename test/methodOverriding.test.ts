import { info, log } from "console";
import sayHello from "../src/sayHello";

describe("Method Overriding", () => {
  class Crew {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Captain extends Crew {
    sayHello(name: string): void {
      log(`Hello ${name}, my name is ${this.name}, i am your captain`);
    }
  }

it('Should support overriding', ()=>{
  const crew = new Crew('Luffy');
  crew.sayHello('Robin')
  const captain = new Captain('Luffy')
  captain.sayHello('Robin')
})

});
