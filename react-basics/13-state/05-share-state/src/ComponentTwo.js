const ComponentTwo = ({ count, onClickHandler }) => {
  const handleClick = () => {
    onClickHandler();
  };

  return (
    <div>
      <p><button onClick={handleClick}>increment</button> : {count}</p>
    </div>
  );
};

export default ComponentTwo;
