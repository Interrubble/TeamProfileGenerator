// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,role,id,email){
        this.name=name;
        this.role=role;
        this.id=id;
        this.email=email;
    }
    // Creating getName() method
    getName() {
        return this.name;
    }
    // Creating getRole() method
    getRole() {
        return this.role;
    }
    // Creating getId() method
    getId() {
        return this.id;
    }
    // Creating getEmail() method
    getEmail() {
        return this.email;
    }
};

module.exports=Employee;