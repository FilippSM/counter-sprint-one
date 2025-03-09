import { Counter } from '../sections/counter/Counter';
import { SetCounter } from '../sections/setCounter/SetCounter';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SetCounter/>
      <Counter/>
    </div>
  );
}

export default App;