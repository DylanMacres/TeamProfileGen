const Employee = require ('./employee');

class Engineer extends Employee {
    constructor (name, id, github, email){
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }

}

module.exports = Engineer;