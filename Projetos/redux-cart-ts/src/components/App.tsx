
import Home from './../views/Home';
import { Provider } from 'react-redux';
import store from './../store/store';


function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;
