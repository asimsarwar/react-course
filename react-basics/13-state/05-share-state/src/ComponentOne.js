const ComponentOne = ({ count, onClickHandler }) => {
  const handleClick = () => {
    onClickHandler();
  };

  return (
    <section>
      <p><button onClick={handleClick}>increment</button> : {count}</p>
    </section>
  );
};

export default ComponentOne;
