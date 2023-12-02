interface Subject {
  request(): void
}

class RealSubject implements Subject {
  request(): void {
    console.log('RealSubject: handling request')
  }
}

class ProxyClass implements Subject {
  private realSubject: RealSubject

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject
  }

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.logAccess()
    }
  }

  private checkAccess(): boolean {
    // Some real checks should go here.
    console.log('Proxy: Checking access prior to firing a real request.');
    if (!this.realSubject) {
      return false;
    }
    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

function clientCode(subject: Subject) {
  subject.request()
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new ProxyClass(realSubject);
clientCode(proxy);
