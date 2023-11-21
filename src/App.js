import React, {useState} from "react";

const App = () => {

    let [state, setState] = useState('0');
    let [lastOperation, setLastOperation] = useState(null);

    const handleNum = (e) => {
        const numValue = (e.target.innerText);
        if (state === '0') {
            setState(numValue)
        } else {
            setState((prev) => prev + numValue)
        }
    }
    const handleSign = (e) => {
        const numValue = (e.target.innerText);
            setState((prev) => prev + numValue)
        setLastOperation(numValue);

    }
    const handleNull = (e) => {
        const numValue = (e.target.innerText);
        if (state !== '0') {
            setState((prev) => prev + numValue);
        }
    }

    const handleClear = () => {
        setState(state = '0')
        setLastOperation(null);
    }
    const handleDelete = () => {
        if (state !== '0') {
            setState(state.slice(0, -1))
        }
    }
    const handlePlus = (e) => {
        const numValue = (e.target.innerText)
        setState((prev) => prev + numValue);
        setLastOperation(numValue);
    }
    const handleMinus = (e) => {
        const numValue = (e.target.innerText)
        setState((prev) => prev + numValue);
        setLastOperation(numValue);
    }
    const handleSum = (e) => {
        if (lastOperation) {
            setState((prev) => eval(prev));
        }
    }

    return (
        <div className={"container"}>
            <div className="box">
                <h3>{state}</h3>
                <div className={'inner-box'}>
                    <div onClick={handleNum} ><h4>1</h4></div>
                    <div onClick={handleNum} ><h4>2</h4></div>
                    <div onClick={handleNum} ><h4>3</h4></div>
                    <div onClick={handleNum} ><h4>4</h4></div>
                    <div onClick={handleNum} ><h4>5</h4></div>
                    <div onClick={handleNum} ><h4>6</h4></div>
                    <div onClick={handleNum} ><h4>7</h4></div>
                    <div onClick={handleNum} ><h4>8</h4></div>
                    <div onClick={handleNum} ><h4>9</h4></div>
                    <div onClick={handleMinus}><h4>-</h4></div>
                    <div onClick={handleNull}><h4>0</h4></div>
                    <div onClick={handlePlus}><h4>+</h4></div>
                    <div onClick={handleSign}><h4>/</h4></div>
                    <div onClick={handleSign}><h4>*</h4></div>
                    <div onClick={handleSum}><h4>=</h4></div>
                    <div className={'deleteDiv'}>
                        <div onClick={handleClear}><h5>Acc</h5></div>
                        <div onClick={handleDelete}><h5>Del</h5></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
