// import './Footer.css' 
import { Box, ChakraProvider, Icon, Link , Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer=()=>{

    return(				
        <ChakraProvider>
            <Box as='footer' h="6vh" w="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'linear-gradient(rgb(55, 179, 44, 1), rgb(21, 180, 7, 0.5))'}
            alignItems={'center'}>
                <Box>{<strong> Copyright - <Link _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}>AF desarrollos</Link> - 2023 </strong>}</Box>
                <Box display="flex" flexDirection="row" justifyContent={'space-around'} 
                alignItems={'center'}>
                    <Link p='2' _hover={{color: 'whitesmoke'}}><FontAwesomeIcon icon={faFacebook} beat fontSize={'20'} /></Link> 
                    <Link p='2' _hover={{color: 'whitesmoke'}}><FontAwesomeIcon icon={faInstagram} beat fontSize={'20'}/></Link>
                    <Text p='2' ><FontAwesomeIcon icon={faPhone} />{<strong> (011) 4855-4584 </strong>}</Text></Box>  
            </Box> 
        </ChakraProvider>    
    );   

}

export {Footer};