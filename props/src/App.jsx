// import Add from './components/Add'
// import StudentRow from './components/StudentRow'
// export default function App() {

//   const fruits = [ "Apple","orange","banana","Grapes"]
//   function handleMap(value,index){
//     return value.toUpperCase()
    
//   }
//   const newFruits = fruits.map(handleMap)
//   console.log(newFruits);
  
//   return (
//     <>
//     <Add a={50} b={50} c={10}/>
//     <Add a={10} b={50} c={10}/>
    
//    <StudentRow  sNo={1} name={"Ram"} mark={450} percentage={"90%"}/>
//    <StudentRow  sNo={2} name={"Sam"} mark={400} percentage={"80%"}/>
//    <StudentRow  sNo={3} name={"Raj"} mark={500} percentage={"100%"}/>
   
//     </>
//   )
// }
import StudentData from './data'

export default function App() {

  const fruits = [ "Apple","orange","banana","Grapes"]

  // function handleMap(value,index){
  //   return value.toUpperCase()
    
  // }
  // const handleMap = (value,index)=>value.toUpperCase()

  const newFruits = fruits.map((value,index)=>value.toUpperCase())
  console.log(newFruits);
  console.log(fruits);
  console.log(StudentData);
  StudentData.map((value,index)=>console.log(value.name))
  
  
  return (
    <>
    
    <ul>
      {/* {fruits.map((value,index)=>{
        return <li>{value}</li>

      })} */}
      {fruits.map((value,index)=><li key={index}>{value}</li>)}
    </ul>
    <table border={1}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {StudentData.map((value,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.mark}</td>
            <td>{value.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
