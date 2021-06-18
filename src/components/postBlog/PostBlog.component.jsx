import { useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getBlogData } from "../../redux/actions/getBloggeDataAction"

const PostBlog = ({state,postBlog})=>{
    let [title,setTitle] = useState('')
    let [main_title,setMainTitle] = useState('')
    let [main_content,setMainContent] = useState("")
    let [content_title,setContentTitle] = useState('')
    let [content,seContent] = useState()
    function sendPost(){
        let obj = {
            Title : title,
            Blog_Content : {
                main_title : main_title,
                content :[main_content],
                content_explanation : [{
                    title : content_title,
                    this_content : [content]
                }
                ]
            }
        }
        postBlog(obj)
        return alert('Your blog is submitted')
    }
    return(
        <div>
            <h4 className='text text-primary m-4'>Enter your content below and post the blog</h4>
        <form>
        <div className='form-group postBlogForm'>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder='Enter your blog title'/>
            <input type='text' onChange={(e)=>setMainTitle(e.target.value)} className="form-control" placeholder='Enter your content title'/>
            <input type='text' onChange={(e)=>setMainContent(e.target.value)} className="form-control" placeholder='Enter your content main description'/>
            <input type='text' onChange={(e)=>setContentTitle(e.target.value)} className="form-control" placeholder='Enter your content sub titles'/>
            <input type='text' onChange={(e)=>seContent(e.target.value)} className="form-control" placeholder='Enter your sub title content'/>
        </div>
        </form>
        <button type='submit' className='btn btn-success' onClick={sendPost}>Submit</button>
        </div>
    )
}

const postBlogData = (dispatch) =>{
    return bindActionCreators({postBlog:getBlogData},dispatch)
}

export default connect(null,postBlogData)(PostBlog)