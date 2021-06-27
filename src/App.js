import logo from './logo.svg';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import PetMatch from './components/elements/petmatch';
import './assets/scss/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PetMatch/>
      <Footer />
    </div>
  );
}

export default App;
