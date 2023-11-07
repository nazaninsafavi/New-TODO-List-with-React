import './App.css'
import welcome from './welcome.jpeg'
const Title = ()=>{
    return(
        <div className='d-flex justify-content-center'>
          <img src={welcome} alt='welcome' rounded />
        </div>
    )

}

export default Title