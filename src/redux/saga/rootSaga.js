import {takeEvery} from 'redux-saga/effects'
import {getBloggerData} from './blogSagaActions'
import {blogSagaTypes} from '../reducers/blogActionTypes'

export function* RootSaga(){
    yield takeEvery(blogSagaTypes.getBloggerData,getBloggerData)
}