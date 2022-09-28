import {CHANGE_SERVICE_FIELD} from '../actions/actionTypes'


const initialState = { name: '', price: '' };


export default function serviceAddReducer(item = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...item, [name]: value};

        default:
            return item;
    }
}