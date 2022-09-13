const Engineer = require("../lib/Engineer");


describe ("Engineer", () => {
       it("It should return the inputs from the user", () => {
        const engineer1 = new Engineer ('Dylan', 12342, 'macresdylan@gmail.com');

    expect(engineer1.name).toEqual("Dylan")
    expect(engineer1.id).toEqual(12342)
    expect(engineer1.email).toEqual("macresdylan@gmail.com")
    })
    it("should return the role of Engineer", () => {
        const engineer2 = new Engineer ('dylan', 42, 'macresdylan@gmail.com')
        expect(engineer2.getRole().toEqual('Engineer'))
    })
})