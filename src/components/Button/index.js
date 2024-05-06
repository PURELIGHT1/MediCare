import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Button({
  borderColor = "#0AB5A5",
  backgroundColor = "#0AB5A5",
  textColor = "#FFFFFF",
  textTitle =  null,
  customStyle = {},
  imageIcon = null,
  borderWidth = 1,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {
        borderWidth: borderWidth,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      }, customStyle]}
      {...props}
    >
      {textTitle && 
        <Text style={[styles.buttonText, { color: textColor }]}>
            {textTitle}
        </Text>}
        
      {imageIcon && <View style={{ alignItems: 'center' }}>{imageIcon}</View>}
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});
