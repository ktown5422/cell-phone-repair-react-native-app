import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { ActivityIndicator } from "react-native";
import { Button } from "react-native";
import { ScrollView, View } from "react-native";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../assets/theme/colors";
import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";
import { getInventoryItems } from "../../redux/actions/inventoryAction";

// const phoneInventory = [
//   {
//     id: 1,
//     title: "First Item",
//     subTitle: "hey to all",
//     image: require("../../assets/images/HatPic.jpg"),
//   },
//   {
//     id: 2,
//     title: "Second Item",
//     subTitle: "hey to all",
//     image: require("../../assets/images/HatPic.jpg"),
//   },
//   {
//     id: 3,
//     title: "Third Item",
//     subTitle: "hey to all",
//     image: require("../../assets/images/HatPic.jpg"),
//   },
// ];

// const Item = ({ title, subTitle, uri: imageUrl, onPress, renderRightActions }) => (
//   <ListItem
//     title={title}
//     subTitle={subTitle}
//     uri={}
//     onPress={onPress}
//     renderRightActions={renderRightActions}
//   />
// );

const InventoryScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();



  const inventory = useSelector(state => state.inventory.inventory);
  




  const loadInventory = useCallback( () => {
    
    setIsLoading(true);
    try {
       dispatch(getInventoryItems())
    } catch {
      setError('error');
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocus = navigation.addListener('focus',() => {
      loadInventory();
    });
      return () => { 
        willFocus;
      };
  }, [loadInventory, navigation]);

  useEffect(() => {
    loadInventory();
  }, [dispatch, loadInventory]); 


  if(isLoading || error){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={colors.primary} />
      <Button title="Try Again" onPress={loadInventory} color={colors.primary} />
    </View>
    );
  }

  if(!isLoading && inventory.length === 0){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText>No inventory items found</AppText>
    </View>
    );
  }
  



  const handleDelete = (inventory) => {
    inventory.filter((i) => i.id !== inventory.id);

  };

  return (
    <ScrollView>
      <Screen>
        <FlatList
          data={inventory}
          keyExtractor={(inventorys) => inventorys.id}
          renderItem={({ item }) => 
            <ListItem
              title={item.phoneType}
              subTitle={'$' + item.price}
              quantity={'quantity:' + item.quantity}
              uri={item.imageUrl}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          }
          ItemSeparatorComponent={ListItemSeparator}
          // refreshing={refreshing}
          // onRefresh={() => {
          //   setInventory(phoneInventory);
          // }}
        />
      </Screen>
    </ScrollView>
  );
};

export default InventoryScreen;