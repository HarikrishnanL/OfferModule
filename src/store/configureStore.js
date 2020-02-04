import { createStore, combineReducers,applyMiddleware } from 'redux';
import OfferReducer from '../reducer/OfferReducer';
import thunk from 'redux-thunk'


const AppReducers = combineReducers({
    OfferPrice :OfferReducer
});



const configureStore = () => {
    return createStore(AppReducers,applyMiddleware(thunk))
}

export default configureStore;