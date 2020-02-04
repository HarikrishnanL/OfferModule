import { FETCHCARTSUCCESS } from '../components/constant';
import { DEFAULT_STATE_CART } from '../actions/Offeractions';


const MyOfferReducer = (state = DEFAULT_STATE_CART, action) => {
    switch (action.type) {
        case FETCHCARTSUCCESS:
            return {
                ...state,
                totalCost: action.ProductItemRecord.cartCostDetails.totalCost,
                ProductItemRecord: action.ProductItemRecord.Items
            }

        default:
            return state
    }
}

export default MyOfferReducer;