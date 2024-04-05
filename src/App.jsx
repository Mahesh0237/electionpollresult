import React from 'react'
import Approuter from './Approuter'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Approuter />
      </Provider>
    </>
  )
}

export default App