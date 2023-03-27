import { Suspense } from 'react';
import PrivatRounting from './routing/PrivatRounting';
import AuthRouting from './routing/AuthRouting';
import '../src/styles/style.scss';
import { useSelector } from 'react-redux';
import { userSelector } from './redux/reselect';


function App() {

  const {user} = useSelector(userSelector);

  return (
    <Suspense fallback={'...loading'}>
        {
          user.login.length ? 
                <AuthRouting/>
                :
                <PrivatRounting/>
        }
      
  
    </Suspense>
  );
}

export default App;
