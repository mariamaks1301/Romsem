import { Suspense } from 'react';
import PrivatRounting from './routing/PrivatRounting';
import AuthRouting from './routing/AuthRouting';
import '../src/styles/style.scss';



function App() {



  return (
    <Suspense fallback={'...loading'}>
                <AuthRouting/>
                <PrivatRounting/>
    </Suspense>
  );
}

export default App;
