
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Index from './page/Index';
import Equipe from './page/Equipe';
import Contact from './page/Contact';
import Covid from './page/Covid';
import Prediction from './page/Prediction';
import Signin from './page/Signin';
import Aboutus from './page/Aboutus';
import Login from './page/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route path="/" exact component={Index}/>
          <Route path="/equipe" exact component={Equipe}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/covid" exact component={Covid}/>
          <Route path="/prediction" exact component={Prediction}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/aboutus" exact component={Aboutus}/>
          <Route path="/login" exact component={Login}/>
        <Footer/>              
      </Router>
    </div>
  );
}

export default App;
