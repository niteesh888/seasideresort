import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Room from '../Rooms/Room'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import Comments from '../Comments/Comments'


function MainPage() {

    return (
      <>
        <div>
          {/* <Header /> */}
          <Banner />
          <About />
          <Room />
          <Gallery />
          <Comments />
          {/* <Footer /> */}
          
          
        </div>
        
      </>
    )
  }
  
  export default MainPage;
  