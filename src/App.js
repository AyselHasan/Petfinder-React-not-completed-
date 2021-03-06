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
import CatCare from "./components/views/catCare";
import FilterPage from "./components/views/filterPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catbreeds" exact component={CatBreeds} />
        <Route path="/dogbreeds" exact component={DogBreeds} />
        <Route path="/petprofile" exact component={PetProfile} />
        <Route path="/catcare" exact component={CatCare} />
        <Route path="/favorites" exact component={FavoritePets} />
        <Route path="/nofavorite" exact component={NoFavorites} />
        <Route path="/filterpage" exact component={FilterPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
