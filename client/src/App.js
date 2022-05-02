import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Nav from './components/Nav/Nav.jsx'
import CountryDetail from './components/CountryDetail/CountryDetail';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <div className="App">
        <Route exact path='/'  component={LandingPage}/>
        <Route path='/home' component={Nav}/>
        <Route path='/home' component={Home}/>
        <Route path='/countries' component={Nav}/>
        <Route exact path='/countries/detail/:id' component={CountryDetail}/>
        <Route path='/countries/create' component={CreateActivity}/>    
    </div>
  );
}

export default App;
