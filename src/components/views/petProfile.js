import ArticleCardsSection from "../elements/articleCardsSection";
import RecentlyViewed from "../elements/recentlyViewed";
import ProfileSliderSection from "../elements/profileSliderSection";
import PetInfo from "../elements/petInfo";
const PetProfile = () => {
  return (
    <div>
      <ProfileSliderSection />
      <PetInfo />
      <RecentlyViewed />
      <ArticleCardsSection />
    </div>
  );
};
export default PetProfile;
