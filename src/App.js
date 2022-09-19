// const logo = require('./logo.svg');
import logo from './logo.svg';
import imgCat from './descarga.jpeg';
import ImageComponent from './components/Image.jsx';
import ButtonAndText from './components/ButtonAndText.jsx';
import List from './components/List';
import './App.css';
import Children from './components/Children';
import Person from './components/Person';

function App() {
  const img = 'logo';

/**
 * Condicional vs ternario
 */
  // let var2;
  // if (img) {
  //   vae2 = x
  // } else {
  //   var2 = y
  // }

  // const var2 = img ? x : y;
  // const imgs = [logo, logo, logo];

  const people = [
    {
      name: 'pepe',
      age: 128,
      address: 'Calle Falsa 123',
    },
    {
      name: 'lolo',
      age: 12,
      address: 'Calle Falsa 123, nº2',
    },
  ];

  return (
    /**
     * Uso de map para renderizar varios componentes
     */
    //   {
    //       imgs.map((img, index) => <ImageComponent key={index} logo={img}/>)
    //    }
    /**
     * Condicional para mostrar un componente 
     */
    //     {
    //       img === 'logo' ? <ImageComponent logo={logo}/> : <ImageComponent logo={ImageComponent}/>
    //     }
    <>
      <List list={people} img={logo} />
      <Children>
        <Person name={'Mimo'} age={'123'} address={'Calle lilo'} />
      </Children>
    </>
  );
}

export default App;

/**
 * Ejemplo para exportar varias funciones en un solo archivo.
 */
// export const Example = () => {
//   return(
//     <div>
//       Hola pepe :D
//     </div>
//   )
// };
// export const Example2 = () => {
//   return(
//     <div>
//       Hola pepe :D
//     </div>
//   )
// };

// import App from '...'
// import { Example, Example2 } from '...'
