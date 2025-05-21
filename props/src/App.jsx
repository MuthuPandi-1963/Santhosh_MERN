import Add from './components/Add'
import StudentRow from './components/StudentRow'
export default function App() {
  return (
    <>
    <Add a={50} b={50} c={10}/>
    <Add a={10} b={50} c={10}/>
    
   <StudentRow  sNo={1} name={"Ram"} mark={450} percentage={"90%"}/>
   <StudentRow  sNo={2} name={"Sam"} mark={400} percentage={"80%"}/>
   <StudentRow  sNo={3} name={"Raj"} mark={500} percentage={"100%"}/>
   
    </>
  )
}
