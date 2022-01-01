import Head from 'next/head';
export const  getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString()},
    }
  })

	return {
		paths,
    fallback: false
	}
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
		props: { ninja: data }
	}
}

const Details = ({ ninja }) => {

  return ( 
    <>
      <Head>
        <title> {`${ninja.name} | Ninja List`}  </title>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:type" content="website" />
		    <meta property="og:title" content="Ninja List" />
        <meta name="description" content={`Full details of Ninja List Advocate ${ninja.name}`} />
        <meta property="og:url" content={`https://ninja-list-app-gamma.vercel.app/ninjas/ ${ninja.id}`}/>
        <meta property="og:description" content={`Full details of ${ninja.title}`} />
      </Head>
      <div>
        <h1>{ninja.name} </h1>
        <p> {ninja.email} </p>
        <p> {ninja.website} </p>
        <p> {ninja.address.city} </p>
      </div>
    </>
  );
}
 
export default Details;