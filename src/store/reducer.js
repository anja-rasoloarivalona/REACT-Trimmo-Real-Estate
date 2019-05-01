import * as actionTypes from './actions';
import {products} from '../data';

const initialState = {
    products: products,
    requestedProduct: ''
}


const reducer = (state = initialState, action) => {

    
    switch(action.type) {

        case actionTypes.GET_ITEM :  
            let product = ''
            state.products.map(item => {
                if(item.id === action.payload) {
                    console.log(item)
                 return  product = item
                }
            })
            return {
                ...state,
                requestedProduct: product

            }
                    
            
            

        default : return state;
    }
   

}

export default reducer;

/*  case actionTypes.GET_ITEM :

            return Object.assign({}, state, {
                propriety: (id) => state.products.find(item => item.id === id )
            })

          

        case actionTypes.HANDLE_DETAIL :
                return  Object.assign({}, state, {
                requestedPropriety : (id) => actionTypes.GET_ITEM(id)
            })   */



