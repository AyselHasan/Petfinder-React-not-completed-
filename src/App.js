import logo from "./logo.svg";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import PetMatch from "./components/elements/petmatch";
import FindPet from "./components/elements/findpetmenu";
import "./assets/scss/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PetMatch />
      <FindPet />
      <Footer />
    </div>
  );
}

export default App;
