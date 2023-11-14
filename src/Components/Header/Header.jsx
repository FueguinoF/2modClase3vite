// import './Header.css' 
import { Box, Link, Heading, textDecoration , Container } from "@chakra-ui/react";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faCartFlatbed, faEnvelope, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'


const Header=()=>{

    return(
    				
            <Container as='header' h={{base:'10vh',md:'14vh'}} maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'linear-gradient(rgba(55, 179, 44, 0.4), rgba(55, 179, 44, 0.9))'}
            alignItems={'center'}>
                <Box display="flex"  flexDirection="row" alignItems={'center'} justifyContent={"space-around"} 
                ><Heading as='h1' fontFamily={'Trebuchet MS'} fontSize={{base:'16',sm:'20',md:'36'}} textColor={'white'}><Link  _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}><FontAwesomeIcon icon={faScrewdriverWrench} spin  /> MaderaStore.com </Link></Heading></Box>
                <Box as='nav' display="flex" flexDirection="column" alignItems={'start'} columnGap={{base:'0.5' ,sm:'1'}} textColor={'white'}>
                    <Link py='0.8' fontFamily={'Trebuchet MS'} fontSize={{base:'10',sm:'12',md:'18'}} _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}> Inicio <FontAwesomeIcon icon={faHouse} /></Link> 
                    <Link py='0.8' fontFamily={'Trebuchet MS'} fontSize={{base:'10',sm:'12',md:'18'}} _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}> Productos <FontAwesomeIcon icon={faCartFlatbed} /></Link>
                    <Link py='0.8' fontFamily={'Trebuchet MS'} fontSize={{base:'10',sm:'12',md:'18'}} _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}> Contacto <FontAwesomeIcon icon={faEnvelope} /></Link></Box>
            </Container>
      
    );   

}



export {Header};