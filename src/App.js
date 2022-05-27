import { useState } from 'react';
import Items from './Items';
import './App.css';

function App() {
  const [assigned, setAssigned] = useState(['assigned goes here']);
  const onUpdate = (list) => {
    setAssigned(list);
  };
  return (
    <div className="App">
      <Items update={onUpdate} />
      Dragons be here
      <div>
        <textarea value={[assigned]} readOnly></textarea>
      </div>
    </div>
  );
}

export default App;
