import {useHistory} from 'react-router-dom'
import './Signin.component.css'
const SignIn = ()=>{
    let history1 = useHistory();
    return(
        <div className='SignInPage'>
            <button className='btn btn-success m-5' onClick={()=>{
                sessionStorage.setItem('username','lokesh')
                history1.push("/")
            }} >SignIn</button>
        </div>
    )
}

export default SignIn