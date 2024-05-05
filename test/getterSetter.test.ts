import { info } from "console";

describe("Getter and Setter", () => {
  class Crew {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "Empty";
      }
    }
    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }


  it('should can use getter setter', function(){
    const crew = new Crew()
    info(crew.name)
  })
});
