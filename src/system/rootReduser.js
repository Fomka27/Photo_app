import {combineReducers} from 'redux'

import galery from '../components/pages/Galery/reducer'
import photo from '../components/pages/Photo/reducer'

export default combineReducers({
    galery,
    photo,
})