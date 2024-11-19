import './App.css';
import React, {useState} from 'react';
 
const kursy = [
  {nr: 1, nazwa: "PHP dla początkujących", czas: "16 godzin"},
  {nr: 2, nazwa: "React dla zaawansowanych", czas: "20 godzin"},
  {nr: 3, nazwa: "JavaScript dla orłów", czas: "20 godzin"},
]
function App() {
  return (
    <React.StrictMode>
      <h1 className='cent'>Oferta kursów</h1>
      <p className='cent'>
        <select id='selK'>
          {kursy.map((k) => <option key={k.nr} value={k.nazwa}>{k.nr}. {k.nazwa}; {k.czas}</option>)}
        </select>
      </p>
      <p className='cent'>imię: <input type='text' id='inpIm2'></input></p>
      <p className='cent'><button onClick={Zapisz}>Zapisz</button></p>
    </React.StrictMode>
  );
 
}
function Zapisz()
{
  let im = document.getElementById('inpIm2').value
  let k = document.getElementById('selK').value
  if(im.length === 0)
    return;
  else
    console.log("imię: "+im+"; nazwa kursu: "+k);
 
}
 
export default App;
 