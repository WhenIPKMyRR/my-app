import './App.css';
import { Box, Container, Image, Select, Button } from '@chakra-ui/react'
import CryptoJS from 'crypto-js';
import { RepeatIcon } from '@chakra-ui/icons'




import React, { useRef, useState } from 'react';
import InputComponent from './components/input/input';

const App = () => {
  const [dataToConvert, setDataToConvert] = useState([
    {
      dataToConvert: dataToConvert,
    },
    {
      dataConverted: dataConverted,
    }
  ])
  const [isCriptoAction, setICriptoAction] = useState(false);
  const [dropdownValue, setDropDownValue] = useState()
  const animalSelected = useRef(
    [
      {
        animal: 'Crododilo',
        image: 'https://images.pexels.com/photos/13287659/pexels-photo-13287659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        animal: 'Cachorro',
        image: 'https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
    ]
  )

  const dropDownAnimals = () => {
    return (
      <Select onChange={(e) => setDropDownValue(e.target.value)} w={'100%'} h={'50px'}>
        {
          animalSelected.current.map((animal, index) => {
            return (
              <option value={index}>{animal.animal}</option>
            )
          })
        }
      </Select>
    )
  }


  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(inputText, 'chave_secreta').toString();
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedText, 'chave_secreta').toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      console.error('Erro na descriptografia:', error);
    }
  };


  return (
    <Box w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'#F0F0F0'}>
      <Container w={'60%'} h={'80%'} display={'flex'} bgColor={'#FFFFFF'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius={'8px'} padding={'5em'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}>
        <Box w={'100%'} h={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'50px'}>
          <Image
            src={animalSelected.current[dropdownValue]?.image}
            h={'100%'} w={'100%'} borderRadius={'16px'} objectFit={'cover'} border={0}
          />
        </Box>
        <Box w={'100%'} h={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          {
            dropDownAnimals()
          }
        </Box>
        <Box w={'100%'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <InputComponent height={'100%'} width={"100%"} />
          <Button w={'100px'} h={'100%'} ml={'10px'} colorScheme="teal" variant="solid" onClick={()=> {setICriptoAction(!isCriptoAction)}}>
              <RepeatIcon  boxSize={6} transform={isCriptoAction ? "rotate(300deg)" : "rotate(90deg)"} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
