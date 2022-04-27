// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email,role){
        this.name=name;
        this.id=id;
        this.email=email;
        this.role=role||'Employee';
    }
    // Creating getName() method
    getName() {
        return this.name;
    }
    // Creating getId() method
    getId() {
        return this.id;
    }
    // Creating getEmail() method
    getEmail() {
        return this.email;
    }
    // Creating getRole() method
    getRole() {
        return this.role;
    }
};

module.exports=Employee;