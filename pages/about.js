import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {

  return (  
    <>
      <Head>
        <title> Ninja List | About </title>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:type" content="website" />
		    <meta property="og:title" content="Ninja List" />
        <meta name="description" content="Listing of Ninjas all around the world" />
        <meta property="og:url" content="https://ninja-list-app-gamma.vercel.app/about" />
        <meta property="og:description" content="Listing of Ninjas all around the world" />
      </Head>
      <div>
        <h1> About </h1>
        <p>
          Loren ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis enim at ducimus
          molestiae a magni natus perspiciatis. Fugi
          non laboriosam quisnobis voluptatum tempora,
          veritatis, officia rerum fugiat asperiores illium?
        </p>
        <p>
          Loren ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis enim at ducimus
          molestiae a magni natus perspiciatis. Fugi
          non laboriosam quisnobis voluptatum tempora,
          veritatis, officia rerum fugiat asperiores illium?
        </p>
      </div>
    </>
  );
}
 
export default About;