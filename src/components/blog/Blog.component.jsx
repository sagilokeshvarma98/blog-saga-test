import { useState } from "react";
import { useEffect } from "react";
import { withRouter,Redirect} from 'react-router-dom'
import './Blog.component.css'
const Blog = ({history,match})=>{
    let [username,setUser] = useState('')
    let [blog_content,setBlogContent] = useState()
    const [auth,setAuth] = useState(false)
    useEffect(() => {
        setUser(sessionStorage.getItem('username'))
        fetch(
          `http://localhost:3100/${username}`,
          {
            method: "GET"
          }
        )
          .then(res => res.json())
          .then(response => {
            setBlogContent(response)
          }
          )
          .catch(error => console.log(error));
      },[username]);
     
    if(auth){
        return <Redirect to="/postblog" />
    }
    if(!blog_content){
        return(
            <div>
                loading...
            </div>
        )
    }
    else {
       let title_Link = blog_content.map((x,index)=>{
        return    <div  className='blog_titles' key={index} onClick={()=>{
                history.push(`${match.url}${x.Title}`,{
                    x
                })
            }}>
                 <h3>
                {x.Title}
            </h3>
             </div>
        })
    return(
        <div>
             <button onClick={()=>setAuth(true)}>Post</button>
             {title_Link}
        </div>
    )
    }
}

export default (withRouter(Blog))