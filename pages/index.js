import im from '../styles/demo.module.css'
import Head from 'next/head'
export default function Home() {
  return (
   <>
   <Head>
    <title>
      Sequelize
    </title>
   </Head>
    <div className={im.links} id={im.box}>
      <h1>
       <i>Sequelize</i> is used for database queries<br/><hr/>
       We can do <i>CRUD</i> using this sequelize object<br/><hr/>
      </h1>
  
    </div>
    </>
  )
}
