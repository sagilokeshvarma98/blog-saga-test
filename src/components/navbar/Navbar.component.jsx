import {Link,Route,Switch,BrowserRouter,Redirect} from 'react-router-dom'
import Blog from '../blog/Blog.component'
import About from '../../pages/aboutpage/AboutPage.component'
import Contact from '../../pages/contactpage/ContactPage.component'
import AddBlog from '../addBlog/AddBlog.component'
import SignIn from '../../pages/signinpage/SigninPage.component'
import PostBlog from '../postBlog/PostBlog.component'

const NavBar = ()=>{
    return(
        <BrowserRouter>
        <div className='navBarDiv'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to='/blog'>My Blogs</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
            </nav>
        </div>
        <Switch>
            <Route exact path='/' component={()=>{
                if(sessionStorage.getItem('username')){
                    return <Redirect to='/blog' />
                }
                else{
                   return <Redirect to='/signin' />
                }
            }} />
            <Route exact path='/blog' component={Blog}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/postblog' component={PostBlog}/>
            <Route path='/:title' component={AddBlog}/>
        </Switch>
        </BrowserRouter>
    )
}


export default NavBar