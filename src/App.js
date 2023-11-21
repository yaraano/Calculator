import React, {useState} from "react";
function App() {

        let [state, setState] = useState('0');

        const handleNum = (e) => {
            const numValue = (e.target.innerText);
            if (state === '0') {
                setState(numValue)
            } else {
                setState((prev) => prev + numValue)
            }
        }
    const handleNull = (e) => {
        const numValue = (e.target.innerText);
        if (state !== '0') {
            setState((prev) => prev + numValue);
        }
    }

        const handleClear = () => {
            setState(state = '0')
        }
        const handleDelete = () => {
            if (state !== '0') {
                setState(state.slice(0, -1))
            }
        }
        const handlePlus = (e) => {
            const numValue = (e.target.innerText)
            if (!state.includes("+")) {
                setState((prev) => prev + numValue);
            }
        }
    const handleMinus = (e) => {
        const numValue = (e.target.innerText)
        if (!state.includes("-")) {
            setState((prev) => prev + numValue);
        }
    }
        const handleSum = (e) => {
            setState(state = eval(state))
        }

    return (
        <div className={"container"}>
            <h3>{state}</h3>
            <div className="box">
                <h4 onClick={handleNum}>1</h4>
                <h4 onClick={handleNum}>2</h4>
                <h4 onClick={handleNum}>3</h4>
                <h4 onClick={handleNum}>4</h4>
                <h4 onClick={handleNum}>5</h4>
                <h4 onClick={handleNum}>6</h4>
                <h4 onClick={handleNum}>7</h4>
                <h4 onClick={handleNum}>8</h4>
                <h4 onClick={handleNum}>9</h4>
                <h4 onClick={handleMinus}>-</h4>
                <h4 onClick={handleNull}>0</h4>
                <h4 onClick={handlePlus}>+</h4>
                <h6 onClick={handleClear} >Clear</h6>
                <h6 onClick={handleDelete} >Delete</h6>
                <h4 onClick={handleSum}>=</h4>
            </div>
        </div>
    );
}


export default App;
