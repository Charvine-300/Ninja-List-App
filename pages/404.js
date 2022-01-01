import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [router])

  return (  
    <div className="not-found">
      <h1> Oops...</h1>
      <h2> Page Not Found </h2>
      <p> Back to <Link href="/"><a>Homepage </a></Link></p>
    </div>
  );
}
 
export default NotFound;