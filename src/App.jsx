
import './App.css'
import GoogleAuth from './GoogleAuth'

function App() {


  return (
    <>
      <form>
        <div className="multi-feilds">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='last name' />
        </div>
        <input className='adjust' type="email" placeholder='Email address' /> <br />
        <input className='adjust' type="email" placeholder='Re-type Email address' /> <br />
        <input className='adjust' type="text" placeholder='address' />
        <div className="multi-feilds">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Pin code' />
          <input type="text" placeholder='country' />
        </div>
        <input className='adjust' type="text" placeholder='Phone' /><br />
    </form >
    <div className='button-box'>
    <button className='button'>Sign In</button>
    <GoogleAuth/>
    {/* <button className='button'>Continue with your google account</button> */}
    </div>
    </>
  )
}

export default App
