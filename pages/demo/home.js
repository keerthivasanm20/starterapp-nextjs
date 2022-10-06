import im from '../../styles/demo.module.css'
import Head from 'next/head'
import Child from './child'
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/")
    const data=await res.json();
    return {
        props:{
        users:data
    }
    }
}
 
const test = ({users}) => {
    return ( 
        <>
        <Head>
    <title>
      Users
    </title>
   </Head>
        <div className={im.links} id={im.box}>
        <h1>
        Sequelize Supporters:<br/><hr/>
          {users.map(user=>(<div key={user.id}><Child data={user}/></div>))}
        
        </h1>
    
      </div> 
      </>);
}
 
export default test;