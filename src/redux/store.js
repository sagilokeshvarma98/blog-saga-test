import { combineReducers } from 'redux'
import {getBloggerData} from './reducers/blogReducer'

export const appState = combineReducers({
    getBloggerData : getBloggerData
})