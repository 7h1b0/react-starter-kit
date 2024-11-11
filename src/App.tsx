import { useState } from 'react';

const App: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <p>{counter}</p>
      <button type="button" onClick={() => setCounter((state) => state + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default App;
