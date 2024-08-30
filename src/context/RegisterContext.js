import React from 'react'

const RegisterContext = React.createContext({
  sRegistered: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default RegisterContext
