import Link  from "next/link"
import Image from "next/image";
import im from '../styles/demo.module.css'

const Navbar = () => {
    return (  <div><div className={im.Image}><Image src="/sequelize-256.png" width={80} height={70}/><h1>Sequelize</h1>  </div><div className={im.links} ><Link href='/'><a>back to home</a></Link> <Link href='/demo/home'><a>Users</a></Link></div></div>);
}
 
export default Navbar;