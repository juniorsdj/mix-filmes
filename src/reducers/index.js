import { combineReducers } from 'redux'
import layoutReducers from './LayoutReducers'
export default combineReducers({
    layout: layoutReducers
})