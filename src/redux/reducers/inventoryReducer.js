import Inventory from '../../models/inventory';
import { CREATE_INVENTORY_ITEM, DELETE_INVENTORY_ITEM, GET_INVENTORY_ITEM, SIGN_OUT } from '../actions/actionTypes';

const initialState = {
    inventory: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_INVENTORY_ITEM:
            return {
                ...state,
                inventory: action.payload
            };
        case CREATE_INVENTORY_ITEM:
            const newInventoryItem = new Inventory (
                action.inventoryData.imageUrl,
                action.inventoryData.name,
                action.inventoryData.price,
                action.inventoryData.quantity,
                action.inventoryData.creator,
            );
            return {
                ...state,
                inventory: state.inventory.concat(newInventoryItem)
            }
        case DELETE_INVENTORY_ITEM:
            return {
                ...state,
                inventory: state.inventory.filter(
                    invent => invent.id !== action.aid
                )
            };
        case SIGN_OUT:
            return {
               ...initialState
            }
        default:
            return state;
    }
}
