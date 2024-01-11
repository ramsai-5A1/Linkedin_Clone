import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import AppDataStore from './utils/AppDataStore';

const App = () => {
  return (
    <Provider store={AppDataStore}>
      <div className=''>
          <Header/>
          <Body/>
      </div>
    </Provider>
  )
};

export default App;