const Employee = require("./Employee")

//es6 constructor
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}


module.exports = Manager
// officeNumber


// getRole() // Overridden to return 'Manager'




// // function Animal(name,age){
//     this.name = name
//     this.age = age
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
// }