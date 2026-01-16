import './App.css';
import Home from './components/Home';
import About from './components/About';
import Photo from './components/Photo';
import Location from './components/Location';
import Account from './components/Account';

const App = () => {
  return (
    <>
      <main className='main'>
        <Home />
        <About />
        <Photo />
        <Location />
        <Account />
      </main>
    </>
  );
};

export default App;
