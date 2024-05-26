import { info } from "console";

describe("super constructor", () => {
  class Crew {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class NewCrew extends Crew {
    departement: string;

    constructor(name: string, departement: string) {
      super(name);
      this.departement = departement;
    }
  }

  it("should support super constructor", () => {
    const newCrew = new NewCrew("Robin", "Arkeolog");
    info(newCrew.name);
    info(newCrew.departement);
  });
});
