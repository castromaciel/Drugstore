import { Route, Switch } from "react-router";
import CartPage from './pages/CartPage'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <ProtectedRoute exact path="/favourites" component={FavouritesPage} />
        <ProtectedRoute exact path="/profile" component={ProfilePage} /> 
      </Switch>
    </div>
  );
}

export default App;
