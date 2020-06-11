import React, { Suspense } from 'react';
import './App.css';

function App() {

  const Info = React.lazy(()=> import('./components/Info'))

  return (
    <div className="App">
      <Suspense fallback='loading...'>
        <Info info="every one" />
      </Suspense>
    </div>
  );
}

export default App;
