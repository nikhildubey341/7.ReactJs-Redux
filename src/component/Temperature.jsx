import React, { useState } from 'react'


const Temperature = () => {
    const[Celcius, SetCelcius] = useState("");
    const [Fahrenheit, SetFahrenheit]=useState("");

    const HandleFahrenheit = (e) =>{
        const value = e.target.value;
        SetFahrenheit(value)
        SetCelcius(ftoc(value));
    };

    
    const HandleCelcius = (e)=>{
      const value = e.target.value;
      SetCelcius(value)
      SetFahrenheit(ctof(value));

    };
    const ftoc=(Fahrenheit)=>{
      return((Fahrenheit - 32)*5)/9;
    }

    const ctof=(Celcius)=>{
      return((Celcius*9)/5)+32;
    }
  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
      <label>Celcius: </label>
      <input type="text" value={Celcius}  onChange={HandleCelcius} />
      </div>
  
      <div>
      <label>Fahrenheit: </label>
      <input type="text" value={Fahrenheit} onClick={HandleFahrenheit} />
      </div>
    </div>
  )
}

export default Temperature
