import './AddBlog.component.css'
const AddBlog = ({location})=>{
    console.log(location.state.x);
    let main_title =  location.state.x.Blog_Content.main_title
    let id = location.state.x.id
    let title = location.state.x.Title
    let main_content = location.state.x.Blog_Content.content.map((x,index)=>{
       return <p key={index} className='text text-success'>{x}</p>
    })
    let sub_content = location.state.x.Blog_Content.content_explanation.map(x=>{
        return <div className='text text-primary' key={x.title}>
                        <h6>{x.title}</h6>
                        {
                            x.this_content.map((x,index)=><li key={index} style={{left:'0%',listStyle:'none'}}>{x}</li>)
                        }
                </div>
    })
    return(
        <div className='container' style={{textAlign:'left'}}>
            <h3 className='text text-success'>{main_title}</h3>
            {main_content}
            {sub_content}
        </div>
    )
}

export default AddBlog