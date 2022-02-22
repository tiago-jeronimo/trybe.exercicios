import './App.css';
import Image from './Image';
import cat from './cat_image.jpeg';

function App() {
  return (
    <main>
      <Image source={cat} alternativeText='Cute cat staring' />
    </main>
    );
}

export default App;
