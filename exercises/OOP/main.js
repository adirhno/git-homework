/** @format */

//write your code here to make the tests pass

class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  work = function (office) {
    let i = 0;
    while (i < 10) {
      office.documents.push(new Document(this.name));
      i++;
    }
  };
}
class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  hireEmployee(name) {
    this.employees.push(new Employee(name));
  }

  askEmployeesToWork(office) {
    this.employees.forEach((e) => e.work(office));
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }

  hireCleaner(name) {
    this.cleaners.push(new Cleaner(name));
  }

  hireManager(name) {
    this.managers.push(new Manager(name));
  }
  startWorkDay() {
    this.managers.forEach((m) => m.askEmployeesToWork(this));
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }

  clean = () => console.log("Clean");
}
