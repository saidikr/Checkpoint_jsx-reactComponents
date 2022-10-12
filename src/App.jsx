import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Adress } from './components/profile/Adress'
import { FullName } from './components/profile/fullName'
import { ProfilePhoto } from './components/profile/profilePhoto'

function App() {

  return (

    <div className="App bg-dark text-white p-5 text-center" >
      <FullName/>
      <br />
      <Adress/>
      <br />
      <ProfilePhoto/>
    </div>

  )
}

export default App
