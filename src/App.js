import Home from "./components/views/home";
import CatBreeds from "./components/views/catBreeds";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Switch, Route, Link } from "react-router-dom";
import "./assets/scss/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catBreeds" exact component={CatBreeds} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
