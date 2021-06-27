import logo from "./logo.svg";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import PetMatch from "./components/elements/petMatch";
import FindPet from "./components/elements/findPetMenu";
import RecentlyViewed from "./components/elements/recentlyViewed";
import "./assets/scss/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PetMatch />
      <FindPet />
      <RecentlyViewed />
      <Footer />
    </div>
  );
}

export default App;
