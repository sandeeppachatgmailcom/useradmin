
import './App.css';
import AdminDashBoard from './pages/Admin';
import { Provider } from 'react-redux';
import appStore from './utils/reduxStore';

function App() {

  return (
    <Provider store={appStore}>
    <div className="App">
      <AdminDashBoard/>
    </div>
    </Provider>
  );
}


export default App;
