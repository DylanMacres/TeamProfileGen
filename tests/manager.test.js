const Manager = require("../lib/Manager")

describe ("Manager", () => {
       it("It should return the inputs from the user", () => {
        const manager1 = new Manager ('Dylan', 12342, 'macresdylan@gmail.com');

    expect(manager1.name).toEqual("Dylan")
    expect(manager1.id).toEqual(12342)
    expect(manager1.email).toEqual("macresdylan@gmail.com")
    })})
