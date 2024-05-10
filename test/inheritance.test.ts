import { info } from "console";

describe("Inheritance", function () {
  class Crew {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    addCrew():void{
      info(`Hello ${this.name}, Are you sure join to my crew`)
    }
  }

  class Captain extends Crew {
    helloCaptain(): void {
      info(`Hello ${this.name}`);
    }
  }

  class Vice extends Captain {}

  it("Should support inheritance", function () {
    const crew = new Crew("Sanji");
    info(crew);
    const captain = new Captain("Luffy");
    // info(captain.addCrew());
    captain.helloCaptain();
    const vice = new Vice("Zoro");
    info(vice);
  });
});
