import React, { useState } from 'react';
import './style.css';

function App() {
  const [result, setResult] = useState('0')
  const [previousValue, setPreviousValue] = useState(0)
  const [operator, setOperator] = useState(null)

//display
  const displayValue = (value) => {
    if (value === '.' && result.includes('.')) {
      return;
    }

    if(result === '0' && value !== '0') {
      setResult(value)
    } else {
      setResult((prevValue) => {
        const newValue = prevValue + value
        return newValue
      })
    }
  }

//function for btn AC or C (clear result)
  const clearResult = () => {
    setResult('0')
  }

//function for btn C (delete last characters of result)
          const deleteLastCharacters = () => {
              let newResult
              if(result === '0') {
                return
              }
              newResult = result.slice(0, -1)
              if(newResult === '') {
                 setResult('0')
              } else {
                setResult(newResult)
              }
              return newResult;
            }

//function for btn +/- (change result for example 1 => -1 and vice versa)
const changeValue = () => {
  setResult((prevResult) => {
    const parsedResult = parseFloat(prevResult)
    if(isNaN(parsedResult)) {
      return '0'
    } else {
      return String(-parsedResult)
    }
  })
}

//function for btn % (calculates the percentage)
const numPercent = () => {
  setResult((prevResult) => {
    const newResult = prevResult / 100
    return String(newResult)
  })
}

//addition function
const addFunction = () => {
  setPreviousValue(parseFloat(result))
  setResult('0')
  setOperator('+')
}

//subtraction function
const subFunction = () => {
  setPreviousValue(parseFloat(result))
  setResult('0')
  setOperator('-')
}

//multiplication function
const multiFunction = () => {
  setPreviousValue(parseFloat(result))
  setResult('0')
  setOperator('*')
}

//division function
const divisionFunction = () => {
  setPreviousValue(parseFloat(result))
  setResult('0')
  setOperator('/')
}

//function result
const resultHandler = () => {
  let currentValue = parseFloat(result)
  let newResult

  switch(operator) {
    case '+':
      newResult = previousValue + currentValue
      break;
    case '-':
      newResult = previousValue - currentValue
      break;
    case '*':
      newResult = previousValue * currentValue
      break;
    case '/':
      newResult = previousValue / currentValue
      break;
      default:
        newResult = currentValue;
  }

  setResult(newResult.toString())
  setPreviousValue(0)
  setOperator(null)
}


  return (
    <div className="App">
       <div className='calc-block'>
            <h1 onClick={deleteLastCharacters}>{result}</h1>
            <div className='calc-block__btn'> 
              {(result == '0')
                ?
                <button onClick={clearResult} className='btnGrey'>AC</button>
                :
                <button onClick={clearResult} className='btnGrey'>C</button>
              }
              <button onClick={changeValue} className='btnGrey'>+/-</button>
              <button onClick={numPercent} className='btnGrey'>%</button>
              <button onClick={divisionFunction} className='btnOrange'>/</button>
              <button onClick={() => displayValue('7')} className='btn'>7</button>
              <button onClick={() => displayValue('8')} className='btn'>8</button>
              <button onClick={() => displayValue('9')} className='btn'>9</button>
              <button onClick={multiFunction} className='btnOrange'>X</button>
              <button onClick={() => displayValue('4')} className='btn'>4</button>
              <button onClick={() => displayValue('5')} className='btn'>5</button>
              <button onClick={() => displayValue('6')} className='btn'>6</button>
              <button onClick={subFunction} className='btnOrange'>-</button>
              <button onClick={() => displayValue('1')} className='btn'>1</button>
              <button onClick={() => displayValue('2')} className='btn'>2</button>
              <button onClick={() => displayValue('3')} className='btn'>3</button>
              <button onClick={addFunction} className='btnOrange'>+</button>
              <button onClick={() => displayValue('0')} className='btn'>0</button>
              <button onClick={() => displayValue('.')} className='btn'>,</button>
              <button onClick={resultHandler} className='btnOrange'>=</button>
            </div>
       </div>
    </div>
  );
}

export default App;