import './App.css';
// Importar la biblioteca de audio: En el componente de React donde deseas reproducir el sonido, 
// importa la biblioteca de audio howler.js
import { Howl } from 'howler';
import { useState } from 'react';
import { FaBoxOpen } from "react-icons/fa";
// import TresPuntosCajas from './components/TresPuntosCajas';
import { PiDotsThreeVerticalBold } from "react-icons/pi";

function App() {

  const [inputValue, setInputValue] = useState('');
  const [cajas, setCajas] = useState(0)
  const [botellasEscaneadas, setBotellasEscaneadas] = useState(0)

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
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al presionar Enter.
    
    // Realiza acciones de envío o procesamiento aquí, por ejemplo, enviar datos al servidor.
    console.log('Valor del campo de entrada:', inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">

      <div className='flex'>
        {/* Primer div */}
        <div className='inline-block w-64'>
          <h3 className='text-white text-lg pl-3'> Cajas: <p className='text-red-500 inline-block'>{cajas}</p> </h3>
          <h3 className='text-white text-lg pl-3'> Botellas escaneadas: <p className='text-red-500 inline-block'>{botellasEscaneadas}</p></h3>
          <h3 className='text-white text-lg pl-3'> Botellas totales: <p className='text-red-500 inline-block'>84</p></h3>
        </div>

        {/* Segundo div */}
        <div className='w-40 pb-4 px-4 '>
          <div className='bg-white px-2 h-full flex items-center border border-gray-300 rounded-lg'>
            <FaBoxOpen className='w-20 h-20'/>
          </div>
        </div>
      </div>
      
      <div className='px-2'>
        <form onSubmit={handleSubmit}>
        <input
          className='w-full rounded py-2 sm:text-sm'
          type="text"
          placeholder="Producto escaneado"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" style={{ display: 'none' }} />
        <button onClick={playSound}>Reproducir Sonido</button>
      </form>
      </div>

      <div className="flex px-2">
        {/* Lista izquierda */}
        <div className="w-full border border-gray-800 bg-white rounded-l p-2">
          <h2 className="text-lg font-semibold">Producto</h2>
          <ul className="list-inside">
          <li className="mb-2 border-b border-gray-600 relative">
            Tequila Don julio bco 700
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
          <li className="mb-2 border-b border-gray-600 relative">
            Vodka Smirnoff 1000
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
          <li className="mb-2 border-b border-gray-600 relative">
            Ron Carta blanca 700
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
          <li className="mb-2 border-b border-gray-600 relative">
            Red bull shugar free 200
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
          <li className="mb-2 border-b border-gray-600 relative">
            VT chauvenet 3000
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
          <li className="mb-2 border-b border-gray-600 relative">
            Vodka Titos 1000
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
          <li className="mb-2 border-b border-gray-600 relative">
            Champaña 750
            <div className="relative left-0 bottom-0 text-xs text-gray-500">
              41489465468
            </div>
          </li>
            {/* Agrega más elementos según sea necesario PiDotsThreeVerticalBold*/}
          </ul>
        </div>

        {/* Lista derecha */}
        <div className="w-1/3 border border-gray-800 bg-white rounded-r p-2 text-center">
          <h2 className="text-lg font-semibold">Cantidad</h2>
          <ul className="list-inside">
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">48</span>
              <div className='pl-10'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">2</span>
              <div className='pl-12'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">1</span>
              <div className='pl-12'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">24</span>
              <div className='pl-10'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">1</span>
              <div className='pl-12'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">6</span>
              <div className='pl-12'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            <li className="mb-2 border-b border-gray-600 flex items-center pt-4">
              <span className="">2</span>
              <div className='pl-12'>
                <button type="button" className="border border-gray-300 rounded">
                  {<PiDotsThreeVerticalBold/>}
                </button>
              </div>
            </li>
            {/* Agrega más elementos según sea necesario PiDotsThreeVerticalBold*/}
          </ul>
        </div>
      </div>


      </header>
    </div>
  );
}

export default App;
