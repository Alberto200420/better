import './App.css';
// Importar la biblioteca de audio: En el componente de React donde deseas reproducir el sonido, 
// importa la biblioteca de audio howler.js
import { Howl } from 'howler';


function App() {

  const sound = new Howl({
    src: ['assets/sonido.mp3'],
    ///home/sparrow/SIMEI/better/public/assets/sonido.mp3
  });

   // Función que reproduce el sonido
   const playSound = () => {
    // // Verifica si el contexto de audio está suspendido y lo reanuda si es necesario
    // if (Howler.ctx && Howler.ctx.state === 'suspended') {
    //   Howler.ctx.resume().then(() => {
    //     sound.play();
    //   });
    // } else {
      sound.play();
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <input type='text' name='BarraDeProducto' placeholder='Producto escaneado'/>
        <button onClick={playSound}>Reproducir Sonido</button>
      </header>
    </div>
  );
}

export default App;
