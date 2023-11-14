// import './Card.css' 
import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button, Box  } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Cardmia=({img, imgalt, nombre, cat, descripcion, marcayfab, material, dimensiones, precio, stock})=>{
   
    return(				
        <Card 
            direction={{ base: 'column', md: 'row' }}
            maxW={{ base: '90%', sm: '60%' }}
            overflow='hidden'
            variant='elevated'
        
           
        >
            <Image 
                objectFit='cover'
                maxW={{ base: '100%', md: '300px' }}
                src= {img}
                alt={imgalt}
            />

            <Stack>
                <CardBody>
                  <Heading fontFamily={'Trebuchet MS'} size='xl' as='h2' py='2' >{nombre}</Heading>
                  <Box display={"flex"} fontFamily={'Trebuchet MS'} >
                    <Text py='1' fontSize='sm'  as='b' align={'left'}> {cat} </Text></Box>
                  <Divider/>
                  <Box fontFamily={'Trebuchet MS'}
                    display={"flex"} flexDir={'column'} justifyContent={'space-around'} py='3'>
                    <Text py='1' fontSize='md' align={'left'}> Material: {material}</Text>
                    <Text py='2' fontSize='xl' align={'left'}> {descripcion}</Text></Box>
                  <Divider/>
                  <Box display={"flex"} flexDir={'column'} fontFamily={'Trebuchet MS'}> 
                    <Text py='1' fontSize='lg' align={'left'}> Marca: {marcayfab}</Text>
                    <Text py='2' fontSize='lg' as='b' align={'left'}>Dimensiones: {dimensiones}</Text></Box>  
                </CardBody>
                <CardFooter>
                    <Box display={"flex"} flexDir={{lg:'row' , md:'column' }} alignItems={'center'} 
                        justifyContent={'space-around'} fontFamily={'Trebuchet MS'} w={{ base: '100%', sm: '100%' }} py='2'>
                        <Text py='2' fontSize='xl' as='b' >Precio: {precio}</Text>
                        <Box display={"flex"} flexDir={'row'} gap={'3'} 
                        >
                        <Button variant='solid' colorScheme='green'>
                        Comprar
                        </Button >
                        <Text _hover={{color:'blue'}}><FontAwesomeIcon icon={faThumbsUp} fontSize={'32'} /></Text>
                        
                        </Box>
                    </Box>
                </CardFooter>
            </Stack>
            
        </Card> 
    );   

}

export {Cardmia};