import im from '../../styles/demo.module.css'
import Link from 'next/link';
const Child = ({data}) => {
    return (  <div className={im.block}><Link href={`/demo/`+data.id}><a>{data.username}</a></Link></div>);
}
 
export default Child;