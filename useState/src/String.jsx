
import {useState} from 'react'

export default function String() {
    const [name, setName] = useState("guest")
    let newName = ""
    function handleClick(){
        setName(newName)
        newName = ""
    }
    function hChange(e){
        console.log(e.target.value);
        newName = e.target.value
        
    }
  return (
    <>
    <h1>Hello {name}</h1>
    <input type="text" name="" id="" placeholder='Enter name' onChange={hChange} />
    <button onClick={handleClick}>Update Name</button>

    </>
  )
}
