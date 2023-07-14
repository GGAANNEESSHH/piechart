import React, { useState } from 'react'
// import classes from './pie.module.css'
import { PieChart } from 'react-minimal-pie-chart';


function Chart() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const[validation, setValidation]=useState('')
  const [chartData, setData] = useState([])




  const handle1Change = (e) => {
    const value = e.target.value;
    if (value <= 100) {     
        setInput1(value);
        setInput2(100 - value);
    } else if (value > 100){
     setValidation('Incorrect Value');
     setTimeout(()=>{setValidation('')},3000)     
    }
    
  }

  const [value]=useState(0)

  console.log(value)

  const handle2Change = (e) => {
    const value = e.target.value;

    if (value <= 100) {
      setInput2(value)
      setInput1(100 - value);
      setValidation('')
    } else if (value > 100) {   
     setValidation('Incorrect Value')
     setTimeout(()=>{setValidation('')},3000)
    }

   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([
      {  value: parseInt(input1), color: 'lime', label: 'A' },
      {  value: parseInt(input2), color: 'orange', label: 'B' }
    ])

  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}  style={{margin:'0, auto'}}>
          <input type='number' name='input1' value={input1} placeholder='value 1' onChange={handle1Change} style={{margin:'50px'}} 
          />
          <input type='number' name='input2' value={input2} placeholder='value 2' onChange={handle2Change}  style={{margin:'50px'}}   
          />
          
          <button type="submit" class="btn btn-success" style={{marginLeft:'10px'}}>Create Chart</button>
          <div><h5>{validation}</h5></div>
        </form>
      </div>

      <div>
        <PieChart data={chartData} style={{ width: '400px',marginLeft:'100px' }}/>         
          
      </div>
    </div>

  )

}
export default Chart;