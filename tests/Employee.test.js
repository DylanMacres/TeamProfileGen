const Employee = require("../lib/employee")

describe ("Employee", () => {
       it("It should return the inputs from the user", () => {
        const employee1= new Employee ('Dylan', 12342, 'macresdylan@gmail.com');

    expect(employee1.name).toEqual("Dylan")
    expect(employee1.id).toEqual(12342)
    expect(employee1.email).toEqual("macresdylan@gmail.com")
    })
    it("should return the role of Employee", () => {
        const employee2 = new Employee ('dylan', 42, 'macresdylan@gmail.com')
        expect(employee2.getRole().toEqual('Employee'))
    })
})



