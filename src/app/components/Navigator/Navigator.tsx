"use client";  // Add this line

import style from "@/app/components/Navigator/Navigator.module.css";
import { TypeRequestEnum } from "@/app/enum/TypeRequestEnum";
import { Box } from "@mui/material";
import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { NavigatorOptionsEnum } from "./NavigatorOptionsEnum";

interface LitItemProps{
    title: string;
    active?: boolean;
    type: TypeRequestEnum;
    changeActive: () => void;
} 

export default function  Navigator(){
    
    const [indiceActive, setIndiceActive] = useState<number>(0);

    const changeSelectItem = (indice: number) => {
        setIndiceActive(indice);
    }

    return (
        <Box className="border" sx={{width: "100%"}}>
            <ul className={`${style.noneDecorator} ${style.paddinginline1}`}>
                <ListItem 
                title="Hasd" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.HOME} 
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.HOME)}
                />
                <ListItem 
                title="Sasdasd" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.ABOUT}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.ABOUT)}
                />
                <ListItem 
                title="Casdasd" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.WORKS}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.WORKS)}
                />
                <ListItem 
                title="Pasdsad" 
                type={TypeRequestEnum.GET} 
                active={indiceActive === NavigatorOptionsEnum.PROJECTS}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.PROJECTS)}
                />
                <ListItem 
                title="COaaaaa" 
                type={TypeRequestEnum.POST} 
                active={indiceActive === NavigatorOptionsEnum.KNOWLEDGE}
                changeActive={() => changeSelectItem(NavigatorOptionsEnum.KNOWLEDGE)}
                />
            </ul>
        </Box>
    )
}