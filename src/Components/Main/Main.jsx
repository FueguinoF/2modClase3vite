// import './Main.css' 

import { Box, Center, ChakraProvider, Grid , GridItem} from "@chakra-ui/react";
import { Cardmia } from "../Cardmia/Cardmia";


const Main=()=>{

    const producto = {
        id:"A000001",
        SKU:"F3SMT003241A",
        img:"./src/img/Tirantes.jpg",
        imgalt:"tirante 4x4' de pino por metro",
        nombre:"Tirante 4x4' de pino X mt.",
        cat:"Vigas - Columnas",
        descripcion:"Una clara y detallada descripción del producto, destacando sus virtudes. Una clara y detallada descripción del producto, destacando sus virtudes. ",
        marcayfbr:"RHM - Ruiz e Hijos, Maderas",
        material:"Pino",
        dimensiones:"100 cm x 9.5 cm x 9.5 cm",
        precio:"AR$ 799.90",
        stock:13
    }

    const {id,SKU,img,imgalt,nombre,cat,descripcion,marcayfbr,material,dimensiones,precio} = producto

    return(	
        <ChakraProvider>			
            <Box h="80vh" w="100vw" display="flex" flexDirection="column" alignItems={"center"} 
            justifyContent={"space-around"} bgImg={"url('src/img/Madera.jpg')"}  > 
               
                    <Cardmia img={img} imgalt={imgalt} nombre={nombre} cat={cat} descripcion={descripcion} marcayfab={marcayfbr} material={material} dimensiones={dimensiones} precio={precio} />
            
            </Box>
        </ChakraProvider>
    );   

}

export {Main};