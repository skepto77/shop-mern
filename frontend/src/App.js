import React from 'react';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { Container} from 'react-bootstrap';
import Header from './componets/Header';
import Footer from './componets/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import UserListPage from './pages/UserListPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3' style={{ minHeight: 'calc(100vh - 170px)'}}>
        <Container>
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/product/:id"><ProductPage /></Route>
            <Route path="/cart"><CartPage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/register"><RegisterPage /></Route>
            <Route path="/profile"><ProfilePage /></Route>
            <Route path="/admin/users"><UserListPage /></Route>
            <Route><PageNotFound /></Route>
           </Switch>
        </Container>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;
