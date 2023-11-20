import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './CalculatorV2.Slice'
import BounceLoader from "react-spinners/ClipLoader";


const CalculatorV2Layout = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const dispatch = useDispatch()
  const addV2=useSelector((state)=>state.addV2)
  console.log("addV2",addV2);
  const onAddNumbers = () => {
    dispatch(add({ num1, num2 }))
  }
  return (
    <div>
      <h3>{addV2.isLoading?<BounceLoader color="#36d7b7" />:"Result:"+addV2.value}</h3>
      <p>Number1:</p>
      <input type="text" placeholder='Enter Num 1' value={num1} onChange={(e) => setNum1(e.target.value)} />
      <p>Number2:</p>
      <input type="text" placeholder='Enter Num 2' value={num2} onChange={(e) => setNum2(e.target.value)} />

      <div>
        <button onClick={onAddNumbers}>Add</button>
      </div>

    </div>
  )
}

export default CalculatorV2Layout