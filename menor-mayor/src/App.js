import { useState } from 'react';
const App = () => {
  const [numbers, setNumbers] = useState("")
  let array = ([ 12, -5, 7, -23, 36, 0, 12]);
  function sortNumbers(arrayNumbers) {   
    for (let i = 0; i < arrayNumbers.length; i++) {
      for (let j = i + 1; j < arrayNumbers.length; j++){
        if(arrayNumbers[i] > arrayNumbers[j]){
          let temp = arrayNumbers[i];
          arrayNumbers[i] = arrayNumbers[j];
          arrayNumbers[j] = temp
        }
      }
    }
    setNumbers(arrayNumbers)
  }
  const handleClick = () => {
    sortNumbers(array);
  };
  return (
    <div>
      <h2>Numeros son: {array + ""}</h2>
      <button onClick={handleClick}>ordenar Numeros</button>
      <h2>Numero de menor a mayor es: {numbers + ""}</h2>
    </div>
  );
};
export default App;
