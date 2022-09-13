const Intern = require("../lib/intern")

describe ("Intern", () => {
       it("It should return the inputs from the user", () => {
        const intern1 = new Intern ('Dylan', 12342, 'macresdylan@gmail.com');

    expect(intern1.name).toEqual("Dylan")
    expect(intern1.id).toEqual(12342)
    expect(intern1.email).toEqual("macresdylan@gmail.com")
    })
    it("should return the role of Intern", () => {
        const intern2 = new Intern ('dylan', 42, 'macresdylan@gmail.com')
        expect(intern2.getRole().toEqual('Intern'))
    })
})