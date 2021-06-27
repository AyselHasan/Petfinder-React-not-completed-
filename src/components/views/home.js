import PetMatch from "./../elements/petMatch";
import FindPet from "./../elements/findPetMenu";
import RecentlyViewed from "./../elements/recentlyViewed";
import Planning from "./../elements/planningSection";
import ArticleCardsSection from "./../elements/articleCardsSection";
import "../../assets/scss/style.css";

const Home = () => {
  return (
    <div>
      <PetMatch />
      <FindPet />
      <RecentlyViewed />
      <Planning />
      <RecentlyViewed />
      <ArticleCardsSection />
    </div>
  );
};

export default Home;
