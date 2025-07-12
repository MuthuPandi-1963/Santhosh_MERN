import { useState } from "react";
import Employee from "./components/Employee";
import EmployeeForm from "./components/EmployeeForm";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import EmployeeUpdateForm from "./components/EmployeeUpdate";
const form = {
    name : "",
    age : "",
    position : "",
    salary : ""
}
export default function App() {
  const [load,setLoad] = useState(false)
  return(
    <>
    
    
    <Routes>
      <Route index element={<Employee load={load} setLoad={setLoad}/>}/>
      <Route path="/form" element={<EmployeeForm setLoad={setLoad} form={form}/>}/>
      {/* <Route path="/update_form" element={<EmployeeUpdateForm setLoad={setLoad} form={form} />}/> */}
      <Route path="/profile/:id" element={<Profile/>}/>
    </Routes>
    </>
  )
}