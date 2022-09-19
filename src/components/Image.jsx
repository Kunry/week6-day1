
/**
 * Destructuramos las props para seleccionarlo directamente.
 */

const ImageComponent = ({logo}) => {

  return(
    <img src={logo} className="App-logo" alt="logo" />
  )
  
}

export default ImageComponent;