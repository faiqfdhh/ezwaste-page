import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import Steps from './Components/Steps';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer  from './Components/Footer';

function App() {
  return (
  <div className="App">
    <Home />
    <About />
    <Steps />
    <Reviews />
    <Contact></Contact>
    <Footer></Footer>
    </div>

  );
}

export default App;
