// import './Footer.css' 
import { Box, ChakraProvider, Container, Icon, Link , Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer=()=>{

    return(				
        <ChakraProvider>
            <Container as='footer' h="6vh" maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'linear-gradient(rgba(55, 179, 44, 0.9), rgba(55, 179, 44, 0.4))'}
            alignItems={'center'} fontSize={{base:'9',sm:'12',md:'18'}}>
                <Box fontFamily={'Trebuchet MS'}>{<strong> Copyright - <Link _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}>AF desarrollos</Link> - 2023 </strong>}</Box>
                <Box display="flex" flexDirection="row" justifyContent={'space-around'} 
                alignItems={'center'}>
                    <Link p='2' fontFamily={'Trebuchet MS'} _hover={{color: 'whitesmoke'}}><FontAwesomeIcon icon={faFacebook} beat fontSize={'20'} /></Link> 
                    <Link p='2' fontFamily={'Trebuchet MS'} _hover={{color: 'whitesmoke'}}><FontAwesomeIcon icon={faInstagram} beat fontSize={'20'}/></Link>
                    <Text p='2' fontFamily={'Trebuchet MS'} ><FontAwesomeIcon icon={faPhone} />{<strong> (011) 4855-4584 </strong>}</Text></Box>  
            </Container> 
        </ChakraProvider>    
    );   

}

export {Footer};