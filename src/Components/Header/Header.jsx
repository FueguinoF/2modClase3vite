// import './Header.css' 
import { Box, ChakraProvider, Icon, Link, Heading, textDecoration } from "@chakra-ui/react";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faCartFlatbed, faEnvelope, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'


const Header=()=>{

    return(
        <ChakraProvider>				
            <Box as='header' h="14vh" w="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'linear-gradient(rgba(55, 179, 44, 0.5), rgb(21, 180, 7))'}
            alignItems={'center'}>
                <Box display="flex" flexDirection="row" alignItems={'center'} justifyContent={"space-around"}
                ><Heading as='h1' fontSize={'36'} textColor={'white'}><Link _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}><FontAwesomeIcon icon={faScrewdriverWrench} spin fontSize={'32'}/> MaderaStore.com </Link></Heading></Box>
                <Box as='nav' display="flex" flexDirection="column" alignItems={'end'} textColor={'white'}>
                    <Link py='0.8' _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}><FontAwesomeIcon icon={faHouse} fontSize={'18'}/> Inicio </Link> 
                    <Link py='0.8' _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}><FontAwesomeIcon icon={faCartFlatbed} fontSize={'18'}/> Productos </Link>
                    <Link py='0.8' _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}><FontAwesomeIcon icon={faEnvelope} fontSize={'18'}/> Contacto </Link></Box>
            </Box>
        </ChakraProvider>
    );   

}



export {Header};