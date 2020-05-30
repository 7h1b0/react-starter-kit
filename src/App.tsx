import * as React from 'react';

const App: React.FunctionComponent<unknown> = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter((state) => state + 1)}>Click Me</button>
    </div>
  );
};

export default App;
