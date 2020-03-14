// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

//es5 constructor
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee



// var dogs={
//     name: "wolfy",
//     age:11
// }

// var cats={
//     name: "fluffy",
//     age:4
// }



// ffunction Animal(name, age){
//       this.name = name
//       this.age = age

//       getName =() => {
//           return this.name;
//       }

//       getAge =()=>{
//           return this.age
//       }
// }

// let dogs=new Animal("wolfy",11)
// let cats=new Animal("fluffy",4)