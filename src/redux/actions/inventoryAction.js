import { CREATE_INVENTORY_ITEM } from "../../constants/routeNames";




export const createInventoryItem = ({ imageUrl, name, price, quantity, onSuccess = () => {} }) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    
      const response = await fetch(
        "http://localhost:3000/api/inventory/", 
        {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           imageUrl: imageUrl,
           name: name,
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

    dispatch({ type: CREATE_INVENTORY_ITEM, inventoryData: { imageUrl, name, price, quantity, creator: userId } });
    onSuccess();
};