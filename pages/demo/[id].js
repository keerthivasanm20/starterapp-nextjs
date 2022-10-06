import im from '../../styles/demo.module.css'

export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users/")
    const data=await res.json();

    const paths= data.map(user=>{
        return {
            params:{id:user.id.toString()}
        }
    })
    return {
        paths,
      fallback:false
    }
    
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data=await res.json();
    return {
        props:{
        users:data
    }
    }
}
const Details = ({users}) => {
    return ( <div className={im.conte} id={im.box}><h2>Details of {users.username}</h2><br/><hr/><h3>Real Name: {users.name}<br/>Email: {users.email}<br/>Website: {users.website}</h3></div> );
}
 
export default Details ;