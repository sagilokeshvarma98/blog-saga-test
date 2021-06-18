import {blogSagaTypes} from '../reducers/blogActionTypes'

export const getBlogData = (data)=>{
    console.log(data);
    return {
        type : blogSagaTypes.postBloggerData,
        payload : data
    }
}