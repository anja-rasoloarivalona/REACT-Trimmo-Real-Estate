import * as actionTypes from './actions';
import {products} from '../data';

const initialState = {
    products: products,
    requestedProduct: products[0],

    searchedProduct : {
        location: 'All locations',
        type: 'All types',
        minPrice: 0,
        maxPrice: 999999999999,
        bath: 1,
        bed: 1,

    }
}


const reducer = (state = initialState, action) => {

    
    switch(action.type) {

        case actionTypes.GET_ITEM :  
            let product = ''
            state.products.map(item => {
                if(item.id === action.payload) {
                 return  product = item}})
            return {
                ...state,
                requestedProduct: product}
        
        case actionTypes.GET_ITEM_TYPE :
            return {
                ...state,
                searchedProduct : {
                    ...state.searchedProduct,
                    type: action.payload
                }
        }

        case actionTypes.GET_ITEM_LOCATION : 
            return {
                ...state,
                    searchedProduct : {
                        ...state.searchedProduct,
                        location: action.payload
                    }
        }

        case actionTypes.GET_ITEM_BATH : 
            return {
                ...state,
                    searchedProduct : {
                        ...state.searchedProduct,
                        bath: action.payload
                    }
        }

        case actionTypes.GET_ITEM_BED : 
            return {
                ...state,
                    searchedProduct : {
                        ...state.searchedProduct,
                        bed: action.payload
                    }
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



