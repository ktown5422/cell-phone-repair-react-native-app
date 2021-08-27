import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import CustomButton from './CustomButton';

// function EditModal(props) {
//     const [modalVisable, setModalVisable] = useState(false);
//     return (
//         <>
//             <CustomButton onPress={() => setModalVisable(true)}>
//                 <View style={styles.container}>
//                     {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.darkgrey} style={styles.icon} />}
//                     {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
//                     <MaterialCommunityIcons name="chevron-down" size={20} color={colors.darkgrey} />
//                 </View>
//             </CustomButton>
//             <Modal visible={modalVisable} animationType="slide">
//                 <Screen>
//                     <Button title="Close" onPress={() => setModalVisable(false)} />
//                     <FlatList
//                         data={items}
//                         keyExtractor={item => item.value.toString()}
//                         numColumns={numberOfColumns}
//                         renderItem={({ item }) => (
//                             <PickerItemComponent
//                                 item={item}
//                                 label={item.label}
//                                 onPress={() => {
//                                     setModalVisable(false);
//                                     onSelectItem(item);
//                                 }}
//                             />
//                         )}
//                     />
//                 </Screen>
//             </Modal>
//         </>
//     );
// }

export default EditModal;