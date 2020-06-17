import React from 'react';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state/state-drills/HelloWorld'
import Bomb from './state/state-drills/Bomb'


function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter />
      <HelloWorld />
      <Bomb />
    </main>
  );
}

export default App;