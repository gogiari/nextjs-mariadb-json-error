import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h2>Home</h2>
    <Link href={'/'}>홈으로</Link><br></br>
    <Link href={'/user'}>Users</Link>
    </>
    
  )
}
