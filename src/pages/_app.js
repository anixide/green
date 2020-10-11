import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
      <div>
        <div className="">
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
        </div>
      </div>
    
  )
}