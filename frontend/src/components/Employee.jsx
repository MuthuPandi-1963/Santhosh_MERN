import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

export default function Employee({load,setLoad}) {
    const [employeeRecord, setEmployeeRecord] = useState([])
    const [update,setUpdate] = useState(false)
    const [data,setData] = useState({})
    async function employeeData() {
        const res = await axios.get("http://localhost:3000/employee/get")
        console.log(res.data.data);
        setEmployeeRecord(res.data.data)
        
    }
    useEffect(()=>{
        employeeData()
    },[load])
    const handleDelete = async(id)=>{
        const res = (await axios.delete(`http://localhost:3000/employee/${id}`)).data
        console.log(res);
        setLoad(prev=>!prev) 
    }
    const handleUpdate = (val)=>{
        console.log(val);
        
        setData(val)
        setUpdate(prev=>!prev)
    }
  return (
    <>
    <div>
        {employeeRecord.map((val,id)=>(
            <div className="" key={id}>
                <p>{val.name} {val.age} {val.position} {val.salary} </p>
                <button onClick={()=>handleUpdate(val)}>Update</button>
                <button onClick={()=>handleDelete(val._id)}>Delete</button>
                <Link to={`/profile/${val._id}`}>view More</Link>
            </div>
        ))}
    </div>
    <button><Link to={"/form"}>Add EMployee</Link></button>

    {update && (
        <EmployeeForm setLoad={setLoad} form={data} update={update} setUpdate={setUpdate}/>
    )}
    </>
  )
}
