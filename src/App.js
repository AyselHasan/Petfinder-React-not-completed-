import Home from "./components/views/home";
import CatBreeds from "./components/views/catBreeds";
import DogBreeds from "./components/views/dogBreeds";
import PetProfile from "./components/views/petProfile";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Switch, Route, Link } from "react-router-dom";
import "./assets/scss/style.css";
import FavoritePets from "./components/views/favorites";
import NoFavorites from "./components/views/noFavorites";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catbreeds" exact component={CatBreeds} />
        <Route path="/dogbreeds" exact component={DogBreeds} />
        <Route path="/petprofile" exact component={PetProfile} />
        <Route path="/favorites" exact component={FavoritePets} />
        <Route path="/nofavorite" exact component={NoFavorites} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
