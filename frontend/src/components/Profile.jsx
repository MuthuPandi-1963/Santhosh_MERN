import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(id);
  const [employeeRecord, setEmployeeRecord] = useState({});
  async function employeeData() {
    const res = await axios.get(`http://localhost:3000/employee/get/${id}`);
    console.log(res.data.data);
    setEmployeeRecord(res.data.data);
  }
  useEffect(() => {
    employeeData();
  }, []);

  return (
    <div className="" key={id}>
      <p>
        {employeeRecord.name} {employeeRecord.age} {employeeRecord.position}{" "}
        {employeeRecord.salary}{" "}
      </p>
      <Link to={`/`}>Back</Link>
    </div>
  );
}
