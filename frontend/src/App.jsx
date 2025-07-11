import { useState } from "react";
import Employee from "./components/employee";
import EmployeeForm from "./components/EmployeeForm";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

export default function App() {
  const [load,setLoad] = useState(false)
  return(
    <>
    
    
    <Routes>
      <Route index element={<Employee load={load}/>}/>
      <Route path="/form" element={<EmployeeForm setLoad={setLoad}/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
    </Routes>
    </>
  )
}