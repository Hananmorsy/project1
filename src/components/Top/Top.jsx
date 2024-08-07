import './Top.css'
import avatar from '../../assets/avatar.jpeg'

function Top() {
 

  return (
   <div id='top'>
    <img id='photo' src={avatar} />
    <h1 id='title'> Jessica Randall </h1>
    <h4 id='london'>London, Untited Kingdom </h4>
    <label id='lab'>'Front-end developer and avid reader.'</label>
   </div>

  )
}

export default Top
