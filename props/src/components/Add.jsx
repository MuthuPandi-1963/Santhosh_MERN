// function Add(){
//     return(
//         <>
//         <h1>{10+30}</h1>
//         </>
//     )
// }
// export default Add


// function Add(props){
//     const x = props.a
//     const y = props.b
//     const z = props.c
//     return(
//         <>
//         <h1>{x+y+z}</h1>
//         </>
//     )
// }
// export default Add;

function Add(props){
    const {a,b,c} = props
    return(
        <>
        <h1>{a+b+c}</h1>
        </>
    )
}
export default Add;