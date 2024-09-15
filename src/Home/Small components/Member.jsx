import React from 'react'
import './Member.css'
import Insta from './Icons/insta.jsx'
import LinkedIn from './Icons/LinkedIn.jsx'

function App({source, name, position, insta, In}){
  return (
    <div className='member'>
        <div className="photo">
            <img src={source} alt="Photo" />
        </div>

        <div className="details">
            <h2 className='name'>{name}</h2>
            <h3>{position}</h3>

            <div className="logos">
                <Insta />
                <LinkedIn />
            </div>
        </div>
    </div>
  )
}

export default App