import Header from './header'
import "./App.css";
import Balance from "./balance";
import Cards from "./card";
import Newtran from "./newtran";
import Tranhistory from "./tranhistory";
import store from "./mystore";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';



export default function App() {
  return (
    <Provider store={store}>
      <Router> 
      <div className="app">
      <Header />
      <Balance />
      <Cards/>
      <Newtran />
        <Tranhistory />
      </div>
  </Router>
      </Provider>
  );
}

