// 1. Strategy interface
interface TravelStrategy {
    travel(destination:string):void;
}
// 2. Concrete strategies
class CarTravel implements TravelStrategy{
    travel(destination:string):void {}
}
class TrainTravel implements TravelStrategy{
    travel(destination:string):void {}
}

class PlaneTravel implements TravelStrategy{
    travel(destination:string):void {}
}
// 3. Context
class TravelContext{
    private strategy:TravelStrategy;

    constructor(strategy:TravelStrategy){
        this.strategy = strategy;
    }
    setStrategy(strategy:TravelStrategy):void{
        this.strategy = strategy;
    }
    goTo(destination:string):void{
        this.strategy.travel(destination);
    }
}