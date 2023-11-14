// import './Main.css' 

import {  Container } from "@chakra-ui/react";
import { Cardmia } from "../Cardmia/Cardmia";


const Main=()=>{

    const producto = {
        id:"A000001",
        SKU:"F3SMT003241A",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsd0d3N1L20cq_DdmLZmiaWuNJlmAbjT1mJmTLDMTUNhmjSPFLKfnk0N1PxsS4ZZ8T64&usqp=CAU",
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
        		
            <Container minH="80vh" maxW="100vw" display="flex" flexDirection="column" alignItems={"center"} 
            justifyContent={"space-around"} bgImg="linear-gradient(rgba(55, 179, 44, 0.7), #0000001c, rgba(55, 179, 44, 0.7)), url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4NTkzNzEzLWltYWdlLWt3dnhvZXB2LmpwZw.jpg')"  > 

                    <Cardmia img={img} imgalt={imgalt} nombre={nombre} cat={cat} descripcion={descripcion} marcayfab={marcayfbr} material={material} dimensiones={dimensiones} precio={precio} />

            </Container>
       
    );   

}

export {Main};