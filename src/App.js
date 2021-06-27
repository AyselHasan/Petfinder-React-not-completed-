import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import PetMatch from "./components/elements/petMatch";
import FindPet from "./components/elements/findPetMenu";
import RecentlyViewed from "./components/elements/recentlyViewed";
import Planning from "./components/elements/planningSection";
import ArticleCardsSection from "./components/elements/articleCardsSection";
import "./assets/scss/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PetMatch />
      <FindPet />
      <RecentlyViewed />
      <Planning />
      <RecentlyViewed />
      <ArticleCardsSection />
      <Footer />
    </div>
  );
}

export default App;
