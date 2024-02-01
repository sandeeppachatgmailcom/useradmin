
import './App.css';
import AdminDashBoard from './pages/Admin';
import { Provider } from 'react-redux';
import appStore from './utils/reduxStore';
import MycontextProvider from './components/ContextProvider';

function App() {

  return (
    <Provider store={appStore}>
      <MycontextProvider>
        <div className="App">
          <AdminDashBoard />
        </div>
      </MycontextProvider>
    </Provider>
  );
}


export default App;
