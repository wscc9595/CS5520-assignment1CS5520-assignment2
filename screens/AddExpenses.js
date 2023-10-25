import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, { useState } from 'react'
import { styleObj } from '../style'
import DropDownPicker from 'react-native-dropdown-picker';
import PressableButton from '../components/PressableButton';

export default function AddExpenses() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
      ]);
  return (
    <View style={styleObj.formcontainer}>
         <View style={styleObj.inputWrapper}>
        <Text style={styleObj.label}>Item*</Text>
        <TextInput
          style={styleObj.amountInput}
        />
      </View>
      <View style={styleObj.inputWrapper}>
        <Text style={styleObj.label}>Unit Price*</Text>
        <TextInput
          style={styleObj.amountInput}
        />
      </View>
      <View style={styleObj.inputWrapper}>
        <Text style={styleObj.label}>Quantity*</Text>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={styleObj.dropdownInputContainer}
      style={styleObj.dropdownInput}
   
      
     
    />
   
      </View>
      <View style={styleObj.pressableWrapper}>
        <PressableButton defaultStyle={styleObj.formPressableDefault} pressedStyle={styleObj.formPressablePressed}>
            <Text>Cancel</Text>
        </PressableButton>
        <PressableButton defaultStyle={styleObj.formPressableDefault} pressedStyle={styleObj.formPressablePressed}>
            <Text>Save</Text>
        </PressableButton>

      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({})