import { info } from "console";
import sayHello from "../src/sayHello";

describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest"; // default value
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it("Should can have properties", function () {
    const customer = new Customer(1, "Luffy");
    customer.age = 19;

    info(customer);
  });

  it("Should can have Methods", function () {
    const newCrew = new Customer(1, "Luffy");

    newCrew.sayHello('Zoro')
  });
});
