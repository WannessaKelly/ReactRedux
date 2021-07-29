import { IProductInitialState, IProductAction } from "./types"
import { AnyAction } from "redux"

const INITIAL_STATE : IProductInitialState = {
    products: [ 
    ]
}
function product (state = INITIAL_STATE, action: IProductAction){
    if(action.type === 'TOGGLE_PRODUCT'){
        return {
            ...state, 
            product: action.product
        }
    }
    return state
}
export default product