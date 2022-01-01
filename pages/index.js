import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <link rel="icon" href="/favicon.ico"/>
        <meta prperty="og:image" content="ninja-list.jpeg" />
        <meta property="og:type" content="website" />
		    <meta property="og:title" content="Ninja List" />
        <meta name="description" content="Listing of Ninjas all around the world, provided with a total breakdown of each member's information" />
        <meta property="og:url" content="https://ninja-list-app-gamma.vercel.app/" />
        <meta property="og:description" content="Listing of Ninjas all around the world" />
      </Head>
      
      <main>
        <h1 className={styles.title}> Homepage </h1>
        <p className={styles.text}>
          Loren ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis enim at ducimus
          molestiae a magni natus perspiciatis. Fugi
          non laboriosam quisnobis voluptatum tempora,
          veritatis, officia rerum fugiat asperiores illium?
        </p>
        <p className={styles.text}>
          Loren ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis enim at ducimus
          molestiae a magni natus perspiciatis. Fugi
          non laboriosam quisnobis voluptatum tempora,
          veritatis, officia rerum fugiat asperiores illium?
        </p>
      </main>
      <Link href="/ninjas/"><a className={styles.btn}> View Ninja Listing </a></Link>
    </>
  )
}
