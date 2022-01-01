import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'
export const getStaticProps  = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	
	return {
		props: { ninjas: data}
	}
}

const Index = ({ ninjas }) => {
	console.log(ninjas);
  return ( 
		<>
		  <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title> Ninja List | Ninja Listing </title>
        <meta property="og:type" content="website" />
		    <meta property="og:title" content="Ninja List" />
        <meta name="description" content="Listing of Ninjas all around the world" />
        <meta property="og:url" content="https://ninja-list-app-gamma.vercel.app/ninjas/" />
        <meta property="og:description" content="Listing of Ninjas all around the world" />
      </Head>
      <div>
        <h2 className={styles.header}> Ninja Listing </h2>
				{ninjas.map(ninja => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
						<a className={styles.single}>
							<h3 className={styles.mingle}> {ninja.name} - {ninja.phone} </h3>
						</a>
					</Link>
				))}
      </div>
		</>  
  );
}
 
export default Index;