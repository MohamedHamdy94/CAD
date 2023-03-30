import './App.css';
import Footer from './Footer/Footer';
import OurClintes from './OurClintes/OurClintes';
import OurPortfoio from './OurPortfoio/OurPortfoio';
import OurServices from './OurServices/OurServices';
import Screen from './Screen/Screen';
import WhyWE from './WhyWE/WhyWE';

function App() {

  return (
    <div className="App">
<Screen/>
<WhyWE/>
 <OurServices/>
<OurPortfoio/>
<OurClintes/> 
<Footer/>
    </div>

  );
}

export default App;
