class Facade {
  private subsystem1: Subsystem1
  private subsystem2: Subsystem2
  constructor(subSystem1?: Subsystem1, subSystem2?: Subsystem2) {
    this.subsystem1 = subSystem1 || new Subsystem1()
    this.subsystem2 = subSystem2 || new Subsystem2()
  }

  operation() {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationN();

    return result;
  }
}

class Subsystem1 {
  operation1() {
    return "SubSystem1 operation 1\n"
  }
  operationN() {
    return "SubSystem1 operation n\n"
  }
}

class Subsystem2 {
  operation1() {
    return "SubSystem2 operation 1\n"
  }
  operationN() {
    return "SubSystem2 operation n\n"
  }
}

function clientCodeFacade(facade: Facade) {
  console.log(facade.operation())
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade()
clientCodeFacade(facade)


