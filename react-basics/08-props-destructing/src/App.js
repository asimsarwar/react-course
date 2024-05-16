const App = () => {
  return (
    <User
      img="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
      name="Asim WebDev"
      age={30}
      isMarried={false}
      hobbies={["Coding", "Reading", "Tourism"]}
    />
  );
};

const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies} </h4>
    </section>
  );
};

export default App;
