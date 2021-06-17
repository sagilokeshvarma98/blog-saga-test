import { put } from "redux-saga/effects"
import { blogActions } from "../reducers/blogActionTypes"

export function* getBloggerData(){
    let user = sessionStorage.getItem('username')
    console.log(user);
    let bloggerData
   yield fetch('http://localhost:3100/'+user,
    {
        method:"GET"
    })
    .then(
        res=>res.json()
    )
    .then(
        data=> {
            console.log(data)
            bloggerData=data
        }
    )
    yield put({type:blogActions.getBloggerData,data:bloggerData})
}