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
        return <Redirect to="/posts-display" />
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
        return  <div key={index} className='col-sm-3 m-3'>
                <div  className='blog_titles'  onClick={()=>{
                    history.push(`${match.url}${x.Title}`,{
                        x
                    })
                    }}>
                <h5 className='text text-primary'>
                    {x.Title}
                </h5>
                <p>
                   Topics : {x.Blog_Content.main_title}
                </p>
                </div>
            </div>
        })
    return(
        <div className='container'>
             <div className='row'>
             <button className='btn btn-info m-5' style={{float:'left',width:'200px'}} onClick={()=>setAuth(true)}>Post A Blog</button>
             </div>
             <div className='row'>
                 <p className='text text-info me-5'>
                     Below are your blogs
                 </p>
             {title_Link}
             </div>
        </div>
    )
    }
}

export default (withRouter(Blog))