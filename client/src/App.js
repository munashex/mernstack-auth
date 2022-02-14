import react from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './login';
import Signup from './signup';
import Home from './Home';
import Private from './Private'



const App = () => {

  return (
   <Router>
     <Route path="/" exact><Home/></Route>
     <Route path="/signup">
       <Signup/>
       </Route>
       <Route path="/login">
<Login/>
       </Route>
     <Route path="/private">
      <Private/>
     </Route>
   </Router>

  )
}


export default App

