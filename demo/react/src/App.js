import logo from './logo.svg';
import './App.css';
import Slider from './Slider';
import Header from './Header';
import NavButton from './NavButton';

function App() {
  return (
    <main>
      <section id="slider-container">
        <Header />

        <Slider />

        <NavButton style="slide-arrow prev-arrow" content="&#10094;" />
        <NavButton style="slide-arrow next-arrow" content="&#10095;" />
      </section>
    </main>
  );
}

export default App;
