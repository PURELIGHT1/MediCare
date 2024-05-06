import { View, TextInput, Text } from "react-native";
import React from "react";

export default function InputText({
  error = "",
  placeholder= "Text Input",
  textColor= "#A6A6A6",
  titleColor= "#A6A6A6",
  borderColor= "#E2E2E2",
  backgroundColor= "#E2E2E2",
  vertical=15,
  horizontal=10,
  right= 20,
  left= 20,
  title= "",
  fontSize= 20,
  leftIcon = null,
  rightIcon = null,
  border = false,
  ...props
}) {
  return (
    <View style={{paddingBottom: 20}}>
      {title === "" ? null : (
        <Text style={{ 
          paddingBottom: 10, 
          color: titleColor, 
          fontSize: 16
        }}>
          {title}
        </Text>
      )}
      <View style={[{
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        paddingVertical: vertical, //8 6
        paddingHorizontal: horizontal, //10 6
        alignItems: "center",
        flexDirection: "row",
      },
        border && {borderRadius: 10},
      ]}>
        
        {leftIcon && <View style={{ marginRight: right }}>{leftIcon}</View>}
        <TextInput
          style={{
            color: textColor,
            fontSize: fontSize,
            flex: 1,
          }}
          placeholder={placeholder}
          {...props}
        />
        
        {rightIcon && <View style={{ marginLeft: left }}>{rightIcon}</View>}
      </View>
    </View>
  );
}
