function StudentRow(props){
    console.log(props);
    const {sNo,name,mark,percentage} = props
    console.log(sNo,name,mark,percentage);
    
    return(
        <>
        <tr>
            <td>{sNo}</td>
            <td>{name}</td>
            <td>{mark}</td>
            <td>{percentage}</td>
        </tr>
        
        </>
    )
}
export default StudentRow;