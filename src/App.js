import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import appStore from './components/utils/appStore';
import { Provider } from "react-redux"
function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
