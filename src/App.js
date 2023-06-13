import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Route exact path="/login" component={LoginForm} />
  </BrowserRouter>
)

export default App
