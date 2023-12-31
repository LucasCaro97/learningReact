import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// const Display = ({counter}) =>{
//     return(
//         <div>{counter}</div>
//     )
// }

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>






const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter+1)
    const decreaseByOne = () => setCounter(counter-1)
    const setToZero = () => setCounter(0)

  return (
    <div>
        <Display counter={counter}/>
        <Button handleClick={increaseByOne} text="Plus"  />
        <Button handleClick={decreaseByOne} text="Minus" />
        <Button handleClick={setToZero} text="Zero" />
    </div>

  )
}

export default App
