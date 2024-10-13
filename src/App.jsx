import Features from './components/features';
import Footer from './components/footer';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Howworks from './components/how-works';
import Model from './components/model';
import Navbar from './components/navbar';

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Howworks />
      <Footer />
    </main>
  );
};

export default App;
