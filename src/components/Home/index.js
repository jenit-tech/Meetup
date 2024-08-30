import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const Home = () => {
  const renderRegisterView = () => (
    <div className="view-container">
      <h1 className="view-heading">Welcome to Meetup</h1>
      <p className="view-paragraph">Please register for the topic</p>
      <Link to="/register">
        <button className="view-button">Register</button>
      </Link>
      <img
        className="view-image"
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </div>
  )

  const renderAfterRegisterView = (name, topic) => (
    <div>
      <h1 className="home-name">{`Hello ${name}`}</h1>
      <p className="home-topic">{`Welcome to ${topic}`}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
        className="home-image"
      />
    </div>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value

        return (
          <>
            <Navbar />
            <div className="home-container">
              {isRegister
                ? renderAfterRegisterView(name, topic)
                : renderRegisterView()}
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
