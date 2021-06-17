import {blogActions} from './blogActionTypes'
export const getBloggerData = (state={blogs:[]},action)=>{
    if(action.type === blogActions.getBloggerData)
    {
        return {blogs : action.data}
    }
    else
    {
        return state
    }

}