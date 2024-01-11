import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import AppDataStore from './utils/AppDataStore';
import LogoutContext from './utils/LogoutInfo';

const App = () => {
  return (
    <Provider store={AppDataStore}>
      <LogoutContext.Provider value={{value: 2}}>
        <div className=''>
            <Header/>
            <Body/>
        </div>
      </LogoutContext.Provider>
    </Provider>
  )
};

export default App;