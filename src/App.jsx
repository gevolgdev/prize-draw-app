import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './style/global.css';

function App() {
  const [getName, setGetName ] = useState('');
  const [names, setNames ] = useState([]);
  const [result, setResult] = useState(null);

  const saveNames = () => {
    const getNamesToPrize = [...names, getName];
    setGetName('');

    return setNames(getNamesToPrize);
  };
  
  function sortName() {
    let result;
    const random = Math.floor(
      Math.random() * names.length
    );
    result = `${names[random]}`;

    return setResult(result);
  };

  return (
    <>
      { result !== null &&
        <div className='fixed flex flex-col w-full h-screen py-14 px-8 bg-slate-900 '>
          <h1 className='text-white text-2xl text-center'>Parábens, o sorteado foi o {result}.</h1>
          <span className='text-white text-5xl text-center mt-20'>🥳🎉</span>
          <span className='text-white text-6xl text-center mt-5'>{result}!</span>
          <button 
            onClick={() => setResult(null)}
            className='flex justify-center mt-auto py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900'>
              Ok, obrigado!
            </button>
        </div>
      }
      <div className="flex flex-col justify-between items-center py-14 px-8 w-full h-screen bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500">
        <div className='flex flex-col w-full'>
          <h1 className='text-7xl text-white font-bold'>Faça seu sorteio!</h1>
          <div className='flex flex-col gap-4 mt-10 w-full h-[250px]  overflow-auto'>
            {names.map((item, index) => 
              <span className='w-full text-xl text-gray-100'>
                • {item}
              </span>
            )}
          </div>
        </div>

        <div className='flex flex-col mt-auto w-full'>
          <span className='text-sm text-gray-600 mb-2'>Coloque os nomes:</span>
          <input
            value={getName}
            onChange={(e) => setGetName(e.target.value)}
            placeholder='Digite aqui...'
            className='border-2 border-gray-800 rounded-lg outline-0 p-4 text-gray-800'
          />
          <div className='flex flex-row gap-3 mt-3'>
            <button onClick={() => saveNames()} className='flex flex-1 justify-center border border-gray-900 bg-gray-900 py-2 transition hover:bg-gray-600 text-white'>
              Salvar nome
            </button>
            <button onClick={() => sortName()} className='flex flex-1 justify-center border border-gray-900 text-gray-900 py-2 transition hover:bg-green-500 hover:border-transparent hover:text-white'>
              Sortear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;



// const users = [
//   {name: 'Mark', gift: 'Ipad Pro'},
//   {name: 'Danny', gift: 'Weeding weekend'}, 
//   {name: 'John', gift: 'Macbook Air M2'}, 
//   {name: 'Robson', gift: 'Apartamet in Campinas'},
// ];