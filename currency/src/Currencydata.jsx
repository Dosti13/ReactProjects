import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('PKR');
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [options,setoptions]= useState([])
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        setRates(data.rates);
        setoptions(Object.keys(data.rates))
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRates();
  }, [baseCurrency]);


  useEffect(() => {
    if (baseCurrency in rates && targetCurrency in rates) {
      const baseRate = rates[baseCurrency] || 1;
      const targetRate = rates[targetCurrency];
      const convertedValue = (amount * targetRate) / baseRate;
      setConvertedAmount(convertedValue);
    }
  }, [amount, baseCurrency, targetCurrency, rates]);
const swap= ()=>{
  setBaseCurrency(targetCurrency)
  setTargetCurrency(baseCurrency)
}
  return (
    <div className=' bg-zinc-200 shadow-xl p-5 rounded-md font-bold '>
      <h2 className=' text-3xl p-4'>Currency Converter</h2>
      <div>
        <input
          className=' w-100 p-2 rounded-l-lg'
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select className='p-2 rounded-r-lg' value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
   
          {    options.map((name)=>(
              <option key={name} value={name}>{name}</option>
          ))}
          
        </select>
      </div>
      <div>
        <input
          type="number"
          className=' p-2 rounded-l-lg'  
          value={convertedAmount}
          readOnly
        />
        <select className='p-2 mt-2 rounded-r-lg' value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
       
          {    options.map((name)=>(
            <option key={name} value={name}>{name}</option>
          ))}
        
        
        </select>
      </div>
          <button className=' p-2   m-4 ' onClick={swap}>Swap</button>
    </div>
  );
};

export default CurrencyConverter;