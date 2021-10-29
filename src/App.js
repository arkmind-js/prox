
import './App.css';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import dashboard from './pages/dashboard'
import homepage from './pages/homepage'
import newapplication from './pages/newapplication'
import pdfdownload from './pages/pdfdownload'
import openapplication from './pages/openapplication'
import Openapp2 from './pages/Openapp2'
import Openapp3 from './pages/Openapp3'
import Productlisting from './pages/Productlisting';
import Product_new from './pages/Product_new';
import Productlisting2 from './pages/Productlisting2';
import Productupdate from './pages/Productupdate'


function App() {
  return (
  <Router>
  <Sidebar/>
  <Switch>
    <Route path="/dashboard" exact component= {dashboard}/>
    <Route path="/pdfdownload" exact component= {pdfdownload}/>
    <Route path="/newapplication" exact component= {newapplication}/>
    <Route path="/openapplication" exact component= {openapplication}/>
    <Route path="/Productlisting" exact component= {Productlisting}/>
    <Route path="/Productlisting2" exact component= {Productlisting2}/>
    <Route path="/Productupdate" exact component= {Productupdate}/>
    <Route path="/Openapp2" exact component= {Openapp2}/>
    <Route path="/Openapp3" exact component= {Openapp3}/>
    <Route path="/homepage" exact component= {homepage}/>
    <Route path="/Product_new" exact component= {Product_new}/>

  </Switch>
  </Router>

  );
}

export default App;
