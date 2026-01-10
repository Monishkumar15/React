function MyCars() {
  const cars = ["Ford", "BMW", "Audi"];
  const cars1 = [
    { id: 1001, brand: "Ford" },
    { id: 1002, brand: "BMW" },
    { id: 1003, brand: "Audi" },
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => (
          <li>I am a {car}</li>
        ))}
      </ul>
      <h1>My Cars with IDs:</h1>
      <ul>
        {cars1.map((car) => (
          <li key={car.id}>I am a {car.brand}</li>
        ))}
      </ul>
    </>
  );
}

export default MyCars;
