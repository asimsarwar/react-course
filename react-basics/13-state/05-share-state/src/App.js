import { useState } from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentOne from "./ComponentOne";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      ComponentOne only add 1: <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} /><br/>
      ComponentTwo only add 2: <ComponentTwo count={count} onClickHandler={() => setCount(count + 2)} />
    </section>
  );
};

export default App;
