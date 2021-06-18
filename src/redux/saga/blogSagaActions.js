import axios from 'axios';
import {call} from 'redux-saga/effects'

function getCaller(url,data){
    return axios.post(url,data);
}

export function* getBloggerData(data){
    let user = sessionStorage.getItem('username')
    try{
        let   response = yield call(getCaller,"http://localhost:3100/"+user,data.payload)
    }
    catch(err){
        yield console.log(err.message);
    }
}