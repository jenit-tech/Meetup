import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="">
    <Navbar />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
        className="notfound-image"
      />
      <h1 className="notfound-heading">Page Not Found</h1>
      <p className="notfound-paragraph">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
