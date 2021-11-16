import './App.css';
import {BrowserRouter as Router,
  // Link,
  Switch,
  Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Review from './components/Review';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Favourites from './components/Favourites';
import Error from './components/Error';
import NowPlaying from './components/NowPlaying';


function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <div className="App">
    <Router>
        <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/now-playing" component={NowPlaying} />
        <Route exact path="/review" component={Review} />
        <Route component={Error} />
      </Switch>
    </Router>
       
        {/* <Footer /> */}
    </div>
    {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
