import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function EmployeeForm({setLoad,form,update,setUpdate}) {
    const [formData,setFormData] = useState(form)
    const handleChange = (e)=>{
        const {name , value} = e.target
        setFormData(prev=>(
            {...prev,[name]:value}
        ))
    }
    const handleSubmit =async ()=>{
        try {
           const res=  await axios.post("http://localhost:3000/employee/create",formData)
           console.log(res.data);
           setLoad(prev=>!prev)
           setFormData(form)
           
        } catch (error) {
            console.log(error);
            
        }
        console.log(formData);
        
    }
    const handleUpdate= async()=>{
        console.log(formData);
        const {name,age,position,salary} = formData
        const res = (await axios.put(`http://localhost:3000/employee/${formData._id}`,{name,age,position,salary})).data
        console.log(res);
        setLoad(prev=>!prev)
        setUpdate(prev=>!prev)
        
        
    }
  return (
    <>
    <div>
        <label htmlFor="name">Name</label>
        <input type="text"  placeholder='enter a name' id='name' name='name' onChange={handleChange} value={formData.name} />
    </div>
    <div>
        <label htmlFor="age">Age</label>
        <input type="number"  placeholder='enter a age' id='age' name='age' onChange={handleChange} value={formData.age} />
    </div>
    <div>
        <label htmlFor="pos">Position</label>
        <input type="text"  placeholder='enter a position' id='pos' name='position' onChange={handleChange} value={formData.position} />
    </div>
    <div>
        <label htmlFor="salary">Salary</label>
        <input type="number"  placeholder='enter a salary' id='salary' name='salary' onChange={handleChange} value={formData.salary} />
    </div>
    {update ? 
    <>
     <button onClick={handleUpdate}>Update Employee</button> 
     <button onClick={()=>setUpdate(prev=>!prev)}>Cancel</button>
     </>:
    <button onClick={handleSubmit}>Add Employee</button>}
    <button><Link to={"/"}>See EMployee</Link></button>

    </>
  )
}
