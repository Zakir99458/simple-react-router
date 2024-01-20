import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Error from './components/Error/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom/cjs/react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FrinedDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
