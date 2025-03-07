"use client";  // Add this line

import style from "@/app/components/Navigator/Navigator.module.css";
import { TypeRequestEnum } from "@/app/enum/TypeRequestEnum";
import { Box } from "@mui/material";
import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { NavigatorOptionsEnum } from "./NavigatorOptionsEnum";

interface NavigatorProps{
    callDataFromTypeOption: () => void;
  } 

export default function  Navigator({callDataFromTypeOption}: NavigatorProps){
    
    const [indiceActive, setIndiceActive] = useState<number>(0);

    const changeSelectItem = (indice: number) => {
        setIndiceActive(indice);
        callDataFromTypeOption();
      }

    return (
        <Box className="border" sx={{width: "100%"}}>
            <ul className={`${style.noneDecorator} ${style.paddinginline1}`}>
                <ListItem 
                title="Home" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.HOME} 
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.HOME)}
                />
                <ListItem 
                title="Sobre" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.ABOUT}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.ABOUT)}
                />
                <ListItem 
                title="Habilidades" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.KNOWLEDGE}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.KNOWLEDGE)}
                />
                <ListItem 
                title="Projetos" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.PROJECTS}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.PROJECTS)}
                />
                <ListItem 
                title="Experiência" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.WORKS}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.WORKS)}
                />
                <ListItem 
                title="Contato" 
                type={TypeRequestEnum.POST} 
                active={indiceActive === NavigatorOptionsEnum.CONTACT}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.CONTACT)}
                />
            </ul>
        </Box>
    )
}