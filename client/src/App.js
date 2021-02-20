import './App.css';
import { Switch, Link, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import OrderCad from './components/OrderCad';
import PannelProd from './components/PannelProd';
import ProductsCad from './components/ProductsCad';
import UserLogin from './user/UserLogin';

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.authenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.authenticated = false
    setTimeout(cb, 100)
  }
}

function PrivateRoute({ children, ...rest }) {
  <Route {...rest} render={() => {
    return fakeAuth.authenticated === true ? children : <Redirect to='/auth' />
  }} />
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/orders">CRIAR PEDIDO</Link></li>
              <li><Link to="/products">PRODUTOS</Link></li>
              <li><Link to="/insert/products">CADASTRAR PRODUTO</Link></li>
              <li><Link to="/">LOGIN</Link></li>
            </ul>
          </nav>
        </div>
          <Switch>
            <Route exact path="/" component={UserLogin} />
            <Route path="/insert/products" component={ProductsCad} />
            <Route Redirect to path="/products" component={PannelProd} />
            <Route path="/orders" component={OrderCad} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;