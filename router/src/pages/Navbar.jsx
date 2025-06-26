
// export default function Navbar() {
//   return (
//     <div>
//         <a href="/">Home</a>
//         <a href="about">About</a>
//         <a href="login">Login</a>
//     </div>
//   )
// }


import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>

    </div>
  )
}
