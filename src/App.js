import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegister: false,
    name: '',
    topic: 'Arts and Culture',
    registerError: false,
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateError = response => {
    this.setState({registerError: response})
  }

  render() {
    const {isRegister, name, topic, registerError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegister,
          name,
          topic,
          registerError,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateName: this.updateName,
          updateTopic: this.updateTopic,

          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
