const automoviles = [
    { marca: "Toyota", modelo: "Corolla", año: 2020, color: "Rojo" },
    { marca: "Ford", modelo: "Fiesta", año: 2019, color: "Azul" },
    { marca: "Chevrolet", modelo: "Onix", año: 2021, color: "Negro" },
    { marca: "Honda", modelo: "Civic", año: 2018, color: "Blanco" },
    { marca: "Nissan", modelo: "Versa", año: 2022, color: "Gris" },
    { marca: "Hyundai", modelo: "Elantra", año: 2023, color: "Rojo" },
    { marca: "Kia", modelo: "Rio", año: 2017, color: "Verde" },
    { marca: "Volkswagen", modelo: "Polo", año: 2019, color: "Azul" },
    { marca: "Mazda", modelo: "3", año: 2021, color: "Negro" },
    { marca: "Subaru", modelo: "Impreza", año: 2020, color: "Blanco" }
];

automoviles
    .filter(auto => auto.año > 2018)
    .forEach(auto => {
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`);
    });