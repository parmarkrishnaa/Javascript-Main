let car = new Object();
car.Brand = 'Toyota';
car.Model = 'Camry';
car.Year = '2021';
car.Price = '25000';
car.Fuel = 'Petrol';
car.Automatic = 'true';
car.Manufacturing = {
    Manufacturer : 'Toyota Motor Corporation',
    Country : 'Japan',
    Started : '1937',
    Plant : 'Tsutsumi Plant, Toyota City'
};

for(let key in car){
    console.log(key + " : ", car[key])
}