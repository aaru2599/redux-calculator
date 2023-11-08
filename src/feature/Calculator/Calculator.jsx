import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, clear, division, multiply, substract } from './Calculator.Slice'

const Calculator = () => {
    const [inputVal, setInputVal] = useState("")
    const result = useSelector((state) => state.myCalculator.value)
    console.log(inputVal);
    const dispatch = useDispatch();

    const getNumInput = (num) => {
        setInputVal(inputVal + num)
    }
    const onClickAdd = () => {
        if (inputVal !== "") {
            dispatch(add(inputVal))
            setInputVal("")
        }
    }
    const onClickSub = () => {
        if (inputVal !== "") {
            dispatch(substract(inputVal))
            setInputVal("")
        }
    }
    const OnClickMul = () => {
        if (inputVal !== "") {
            dispatch(multiply(inputVal))
            setInputVal("")
        }
    }
    const onClickDiv = () => {
        if (inputVal !== "") {
            dispatch(division(inputVal))
            setInputVal("")
        }
    }

    const onClickMod = () => {
        if (inputVal !== "") {
            dispatch(module(inputVal))
            setInputVal("")
        }
    }
    const OnClickClear = () => {
        dispatch(clear())
        setInputVal("")
    }
    const OnClickBack = () => {
        if (inputVal.length > 0) {
            const newInputVal = inputVal.slice(0, -1);
            setInputVal(newInputVal);
        }
    }
    const OnClickEqual = () => {
        if (inputVal !== "") {
            dispatch(add(inputVal));
            setInputVal("");
        }
    };
    // console.log("result", result);
    return (
        <div>
            <h2>Calculator</h2>
            <div className='d-flex gap-4'>
                <input type="text"
                    className='form-control w-25'
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
                <h3>Result:{result}</h3>



            </div>
            <div >
                <div className='p-2 d-flex gap-3'>
                    <button className='btn btn-primary' onClick={() => getNumInput("1")}>1</button>
                    <button className='btn btn-primary' onClick={() => getNumInput("2")}>2</button>
                    <button className='btn btn-primary' onClick={() => getNumInput("3")}>3</button>
                </div>
                <div className='p-2 d-flex gap-3'>
                    <button className='btn btn-secondary' onClick={() => getNumInput("4")}>4</button>
                    <button className='btn btn-secondary' onClick={() => getNumInput("5")}>5</button>
                    <button className='btn btn-secondary' onClick={() => getNumInput("6")}>6</button>
                </div>
                <div className='p-2 d-flex gap-3'>
                    <button className='btn btn-success' onClick={() => getNumInput("7")}>7</button>
                    <button className='btn btn-success' onClick={() => getNumInput("8")}>8</button>
                    <button className='btn btn-success' onClick={() => getNumInput("9")}>9</button>
                </div >
                <div className='p-2 d-flex gap-3'>
                    <button className='btn btn-danger' onClick={() => getNumInput("0")}>0</button>
                </div>
            </div>
            <div className='d-flex gap-3 mt-2'>
                <button className='btn btn-primary' onClick={onClickAdd}>+</button>
                <button className='btn btn-danger' onClick={onClickSub}>-</button>
                <button className='btn btn-success' onClick={OnClickMul}>*</button>
                <button className='btn btn-secondary' onClick={onClickDiv}>/</button>
                <button className='btn btn-secondary' onClick={onClickMod}>%</button>
                <button className='btn btn' onClick={OnClickClear}>Clear</button>
                <button className='btn btn' onClick={OnClickBack}>Back</button>
                <button className="btn btn-success" onClick={OnClickEqual}>
                    =
                </button>
            </div>


        </div>)
}

export default Calculator