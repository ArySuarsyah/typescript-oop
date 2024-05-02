import { info, log } from "console";

describe("Class", function () {
  class Customer {
    constructor(name: string) {
      info(`add ${name} to customer`);
    }
  }

  class Order {
    constructor(count: number) {
      info(`Create ${count} orders`);
    }
  }
  it("should can create class", function () {
    new Customer("Luffy");
    new Order(20);
  });
});
