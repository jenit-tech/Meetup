import Navbar from '../Navbar'

import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
        registerError,
      } = value

      const submitForm = event => {
        event.preventDefault()
        changeRegistrationStatus()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updateError(true)
        }
      }

      const onChangeName = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }

      return (
        <>
          <Navbar />
          <div className="register-container">
            <div className="register-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-image"
              />
              <form className="register-form" onSubmit={submitForm}>
                <h1 className="register-heading">Let us Join</h1>
                <label className="register-label" htmlFor="name">
                  NAME
                </label>
                <input
                  className="register-input"
                  type="text"
                  value={name}
                  onChange={onChangeName}
                  placeholder="Your name"
                  id="name"
                />
                <label className="register-label" htmlFor="topic">
                  TOPICS
                </label>
                <select
                  className="register-select"
                  value={topic}
                  id="topic"
                  onChange={onChangeTopic}
                >
                  {topicsList.map(eachItem => (
                    <option
                      className="register-option"
                      key={eachItem.id}
                      value={eachItem.id}
                    >
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button className="register-button" type="submit">
                  Register Now{' '}
                </button>
                {registerError ? (
                  <p className="error-message">please enter your name?</p>
                ) : null}
              </form>
            </div>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
