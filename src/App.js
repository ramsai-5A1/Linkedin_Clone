import { Provider } from 'react-redux';
import './App.css';
import Body, { HeaderDummy, MainContainer } from './components/Body';
import AppDataStore from './utils/AppDataStore';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Jobs from './components/Jobs';
import MyNetwork from './components/MyNetwork';
import Messaging from './components/Messaging';
import Notifications from './components/Notifications';
import Business from './components/Business';
import PostAJob from './components/PostAJob';
import Me from './components/Me';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeaderDummy />,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/jobs",
        element: <Jobs/>
      },
      {
        path: "/mynetwork",
        element: <MyNetwork/>
      },
      {
        path: "/messaging",
        element: <Messaging/>
      },
      {
        path: "/notifications",
        element: <Notifications/>
      },
      {
        path: "/business",
        element: <Business/>
      },
      {
        path: "/postajob",
        element: <PostAJob/>
      },
      {
        path: "/me",
        element: <Me/>
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={AppDataStore}>
        <RouterProvider router={appRouter}/>
    </Provider>
  )
};

export default App;