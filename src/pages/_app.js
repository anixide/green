import Navbar from '../components/navbar'
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
      <div className="bg-gray-200 h-screen">
        <div className="">
            <Navbar></Navbar>
            <Component {...pageProps} />
        </div>
      </div>
    
  )
}