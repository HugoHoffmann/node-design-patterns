interface RouteStrategy {
  buildRoute(a: string, b: string): string
}

class BikeStrategy implements RouteStrategy {
  buildRoute(a: string, b: string): string {
    return a + b
  }
}

class CarStrategy implements RouteStrategy {
  buildRoute(a: string, b: string): string {
    return a + b
  }
}

class WalkStrategy implements RouteStrategy {
  buildRoute(a: string, b: string): string {
    return a + b
  }
}

class CalcRoute implements RouteStrategy {
  private algorithm!: RouteStrategy
  setStrategy(algorithm: RouteStrategy) {
    this.algorithm = algorithm
  }
  buildRoute(a: string, b: string): string {
    return this.algorithm.buildRoute(a, b)
  }
}

const bikeAlgo = new BikeStrategy()
const carAlgo = new CarStrategy()
const walkAlgo = new WalkStrategy()

const app = new CalcRoute()
app.setStrategy(bikeAlgo)
app.buildRoute('1000', '123')