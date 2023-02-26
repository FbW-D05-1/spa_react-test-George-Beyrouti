import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

const Result = () => {
  const user = useContext(UserContext)  
  return (
    <div className='Output'>
    <h1>{user.name} {user.location}</h1>
    </div>
  )
}

export default Result