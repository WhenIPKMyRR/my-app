import { Input, Text, Box } from '@chakra-ui/react'
import React, { useState } from 'react'



export default function InputComponent({ placeholder, size, type, value, onChange, width, height, margin }) {
    const [valueInput, setValueInput] = useState(value)
  
    return (
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        type={type}
        w={width}
        h={height}
        m={margin}
      />
    )
  }