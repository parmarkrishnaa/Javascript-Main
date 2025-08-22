class Shipping {
    calc(order) {
        return 0;
    }
}

class FedEx extends Shipping {
    calc(order) {
        return order.weight * 10;
    }
}

class BlueDart extends Shipping {
    calc(order) {
        return order.distance * 5;
    }
}

class Delhivery extends Shipping {
    calc(order) {
        return order.weight * 8 + order.distance * 2;
    }
}

function getCost(order, shipProvider) {
    return shipProvider.calc(order);
}

let order = { weight: 3, distance: 50 };

console.log(`FedEx:`, getCost(order, new FedEx()));
console.log(`BlueDart:`, getCost(order, new BlueDart()));
console.log(`Delhivery:`, getCost(order, new Delhivery()));