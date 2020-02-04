import { FETCHCARTSUCCESS } from '../components/constant';
import OfferComponent from '../components/OfferComponent';
import { connect } from 'react-redux';

export const DEFAULT_STATE_CART = {
    totalCost: '',
    ProductItemRecord: [],
}

export const CART_FETCHNOW = (ProductItemRecord) => {
    console.log("awww")
    console.log(ProductItemRecord)
    return {
        type: FETCHCARTSUCCESS,
         ProductItemRecord
    }

}

export const CARTSUBTOTAL = () => {
    var requestURL = 'http://demo.zgroo.in/api/cart';
    return dispatch => {
        return fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f0f650dd-0ddc-4021-bdf8-b82e99991afa',
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVkYzI1OTEzMGNkNTAxMDA1Zjg4YTEiLCJFbWFpbCI6ImhhcmkuaGsxOTk0QGdtYWlsLmNvbSIsIk1vYmlsZSI6ODI4ODg3MTEwNSwiUHJvZmlsZSI6eyJEaXNwbGF5UGljdHVyZSI6Imh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9qaGVhcHMtbGl2ZS9maWxlcy91c2VyLWF2YXRhci1hY2NvdW50XzE1NTU3NTI3NDZfMTU2MDMyMTMwMS5qcGcifSwiUm9sZXMiOlsiT3RoZXIiXSwiVXNlclR5cGUiOjAsImlhdCI6MTU3ODk3NTQyOCwiZXhwIjoxNTc4OTk5NDI4fQ.E8eLnY7TTVMl5H36f70lnDI5ok3oJQGvfJ1Uw_9Tk6U',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': 0
            }
        }).then(response => response.json())
            .then(responseJson => {
                let ProductItemRecord = responseJson
                console.log(ProductItemRecord)
              return  dispatch(CART_FETCHNOW(ProductItemRecord))

            })
            .catch(error => console.log(error))
    }
}

const mapStateToProps = (state) => {
    return {
        MyOfferTotal: state.OfferPrice.totalCost,
        MyOfferRecords:state.OfferPrice.ProductItemRecord
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRenderOfferData: () => dispatch(CARTSUBTOTAL())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OfferComponent);