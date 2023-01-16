import { Box ,Image,Text,Flex,Checkbox, CheckboxGroup ,VStack } from '@chakra-ui/react'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
import {getData} from "../Redux/Products/action"
import React, { useState ,useEffect} from "react";
import { useSearchParams } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    
  } from '@chakra-ui/react'
  import {  AddIcon,MinusIcon} from '@chakra-ui/icons'


import { useDispatch } from "react-redux";
 import  data from "../data.json"
import { FilterMenusmall } from './filtermenu';

export const Filter=()=>{
    
     {/* this code moin*/}
    const [filter,setfilter]= useState(data)
    const [colorfilter,setcolorfilter] = useState(data)
    const [collectionfilter,Setcollectionfilter] = useState(data)

    const dispatch = useDispatch()

    const genderhandler=(values)=>{
    setfilter(data.filter((ele)=>ele.gender == values[values.length-1]))
    }

    const colorhandler=(values)=>{
        setcolorfilter(data.filter((elem)=> elem.color == values[values.length-1]))
    }


    const collectionhandler =(values)=>{
        Setcollectionfilter(data.filter((elem)=> elem.name == values[values.length-1]))

    }

    
 
   useEffect(()=>{
    dispatch({type:"PRODUCT_SUCCESS", payload: filter})
    },[filter])


    useEffect(()=>{
        dispatch({type:"PRODUCT_SUCCESS", payload: colorfilter})
        },[colorfilter])
    


        useEffect(()=>{
            dispatch({type : "PRODUCT_SUCCESS", payload : collectionfilter})
        },[collectionfilter])
  

    {/* this code moin end*/}


    

      





  
    return (
      

       <Box width="250px" >
       <Box  display={{ md:"block" ,base:"none"}} p="1rem 2 rem"  width="280px">

      

       
         
      

        


 <Accordion allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Text fontSize='xl' fontWeight="600" color="grey">Color</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel >
         
        <Box display={{ md:"block"}} p="1rem 2 rem">
        <CheckboxGroup colorScheme='green' defaultValue={colorfilter} onChange={colorhandler} > 
         <VStack alignItems={"baseline"}>
         <Checkbox value='ALL-BLACK'  >All Black</Checkbox>
         <Checkbox value='AQUA BLUE'>Aqua BLUE</Checkbox>
         <Checkbox value='BURGUNDY RED'>BURGUNDY RED</Checkbox>
         <Checkbox value='NATURAL WHITE'>NATURAL WHITE</Checkbox>
         <Checkbox value='BLACK & GREY (BLACK SOLE)'>Black & Grey (black sole)</Checkbox>
         <Checkbox value='BLACK & RED (BLACK SOLE)'>BLACK & RED (BLACK SOLE)</Checkbox>
        
         </VStack>
         </CheckboxGroup> 
         </Box>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>



  
  
  


  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text fontSize='xl' fontWeight="600" color="grey">Collection</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          
       <Box display={{ md:"block"}} p="1rem 2 rem">

       <CheckboxGroup colorScheme='green' defaultValue={collectionfilter} onChange={collectionhandler} >
        <VStack alignItems={"baseline"}>
        <Checkbox value='BANANA KICKS'>BANANA KICKS</Checkbox>
        <Checkbox value='SOFTKNIT LOAFERS'>SOFTKNIT LOAFERS</Checkbox>

        <Checkbox value='LINEN SNEAKERS'>LINEN SNEAKERS</Checkbox>
        
        
        
        </VStack>
        </CheckboxGroup>
        </Box>

       


        </AccordionPanel>
      </>
    )}
  </AccordionItem>





  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text fontSize='xl' fontWeight="600" color="grey">Gender</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>


        <Box display={{ md:"block"}} p="1rem 2 rem">
       

       <CheckboxGroup colorScheme='green' defaultValue={filter} onChange={genderhandler} >
        <VStack alignItems={"baseline"}>
        <Checkbox value='MEN'  >MEN</Checkbox>
        <Checkbox value='WOMEN'>WOMEN</Checkbox>
        
        </VStack>
        </CheckboxGroup>

       </Box>

          
      


        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>



    
            </Box> 

         <FilterMenusmall/>  
        </Box>
    







    )
}