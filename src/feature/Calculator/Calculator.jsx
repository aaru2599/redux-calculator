import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, clear, division, multiply, substract } from './Calculator.Slice'

const Calculator = () => {
    const [inputVal, setInputVal] = useState("")
    const result = useSelector((state) => state.myCalculator.value)
    const dispatch = useDispatch();
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
    console.log("result", result);
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
            <div className='d-flex gap-3 mt-2'>
                <button className='btn btn-primary' onClick={onClickAdd}>+</button>
                <button className='btn btn-danger' onClick={onClickSub}>-</button>
                <button className='btn btn-success' onClick={OnClickMul}>*</button>
                <button className='btn btn-secondary' onClick={onClickDiv}>/</button>
                <button className='btn btn-secondary' onClick={onClickMod}>%</button>
                <button className='btn btn' onClick={OnClickClear}>Clear</button>
            </div>


        </div>)
}

export default Calculator