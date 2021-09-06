import { CREATE_INVENTORY_ITEM } from "../../constants/routeNames";
import { GET_INVENTORY_ITEM } from "./actionTypes";



export const getInventoryItems = () => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const token = getState().auth.token;


    
    console.log('state', userId)
    
    try {
      const response = await fetch(
        `http://localhost:3000/api/inventory/users/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('err')
      }
  
      const resData = await response.json();
  
      // console.log(resData);
      dispatch({ type: GET_INVENTORY_ITEM, payload: resData.inventory });

    } catch (err) {
      throw err
    }
    
};



export const createInventoryItem = ({ imageUrl, phoneType, price, quantity, onSuccess = () => {} }) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const token = getState().auth.token;

    
      const response = await fetch(
        "http://localhost:3000/api/inventory/", 
        {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + token
         },
         body: JSON.stringify({
           imageUrl: imageUrl,
           phoneType: phoneType.label,
           price: price,
           quantity: quantity,
           creator: userId
         })
       }
     );
     const resData = await response.json();
     console.log(resData);
     
     if (!response.ok) {
       throw new Error('err')
     }

    dispatch({ type: CREATE_INVENTORY_ITEM, inventoryData: { imageUrl, phoneType, price, quantity, creator: userId } });
    onSuccess();
};