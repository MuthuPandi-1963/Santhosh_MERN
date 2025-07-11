import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Employee({load}) {
    const [employeeRecord, setEmployeeRecord] = useState([])
    async function employeeData() {
        const res = await axios.get("http://localhost:3000/employee/get")
        console.log(res.data.data);
        setEmployeeRecord(res.data.data)
        
    }
    useEffect(()=>{
        employeeData()
    },[load])
  return (
    <>
    <div>
        {employeeRecord.map((val,id)=>(
            <div className="" key={id}>
                <p>{val.name} {val.age} {val.position} {val.salary} </p>
                <Link to={`/profile/${val._id}`}>view More</Link>
            </div>
        ))}
    </div>
    <button><Link to={"/form"}>Add EMployee</Link></button>
    </>
  )
}
