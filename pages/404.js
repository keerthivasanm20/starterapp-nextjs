import { useRouter } from "next/router";
import { useEffect } from "react";
const notFound = () => {
    const router=useRouter()
    useEffect(()=>{
        setTimeout(()=>{router.push("/")},3000)
    })
    return ( <div><h1>Oops....Page Not Found</h1>
          </div> );
}
 
export default notFound;