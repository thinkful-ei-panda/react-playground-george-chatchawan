import React from 'react';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state/state-drills/HelloWorld'
import Bomb from './state/state-drills/Bomb'
import RouletteGun from './state/state-drills/RouletteGun'


function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter />
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber = {8}/>
    </main>
  );
}

export default App;