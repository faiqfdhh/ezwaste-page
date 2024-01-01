import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import Steps from './Components/Steps';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer  from './Components/Footer';
import Faq from './Components/FAQ';

function App() {
  return (
  <div className="App">
    <Home />
    <About />
    <Steps />
    <Reviews />
    <Contact></Contact>
    <Faq></Faq>
    <Footer></Footer>

    </div>

  );
}

export default App;
