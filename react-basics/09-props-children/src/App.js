// 1. Children lets you manipulate and transform the JSX you received as the children prop.
// 2. "Children" name is a special name for the nested JSX in a component.

const App = () => {
  return (
    <User
      img="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
      name="Asim WebDev"
      age={30}
      isMarried={false}
      hobbies={["Coding", "Reading", "Tourism"]}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
        molestias numquam, ratione adipisci atque quia et. Voluptas, soluta?
        Quibusdam accusantium quis saepe. Aliquam facilis quia obcaecati odio
        quo quos.
      </p>
    </User>
  );
};

const User = (props) => {
  const { img, name, age, isMarried, hobbies, children } = props;

  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies} </h4>
      <div>{children}</div>
    </section>
  );
};

export default App;
