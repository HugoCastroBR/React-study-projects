import { Provider } from 'react-redux';
import '../assets/css/App.css';
import Router from '../router/router';
import store from './../store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
