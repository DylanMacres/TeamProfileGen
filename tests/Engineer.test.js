const Engineer = require("../lib/Engineer");


describe ("Engineer", () => {
       it("It should return the inputs from the user", () => {
        const engineer1 = new Engineer ('Dylan', 12342, 'macresdylan@gmail.com');

    expect(engineer1.name).toEqual("Dylan")
    expect(engineer1.id).toEqual(12342)
  
    })})
