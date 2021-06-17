import {useHistory} from 'react-router-dom'
import './Signin.component.css'
const SignIn = ()=>{
    let history1 = useHistory();
    return(
        <div className='SignInPage'>
            <button onClick={()=>{
                sessionStorage.setItem('username','lokesh')
                history1.push("/blog")
            }} >Submit</button>
        </div>
    )
}

export default SignIn