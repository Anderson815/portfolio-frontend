import { Box } from "@mui/material";
import { useState } from "react";
import { getColorType, getStyleItem } from "./ListItemScript";
import { TypeRequestEnum } from "@/app/enum/TypeRequestEnum";

interface LitItemProps{
title: string;
active?: boolean;
type: TypeRequestEnum;
changeActive: () => void;
} 

export default function ListItem ({title, type, active, changeActive} : LitItemProps) {

    const [hover, setHover] = useState<boolean>(false);

    const changeHover = () => {
        setHover(!hover);
    }

    let colorType = getColorType(type);

    return (
        <li>
        <button className="width100 noborder pointer options" onClick={changeActive}>
            <Box 
            component="div" 
            className={`primaryColor textSize1 weight1 ${getStyleItem(undefined, active, hover)}`} 
            sx={{textAlign: "left"}} 
            onMouseEnter={changeHover}
            onMouseLeave={changeHover}
            >
            <span className={`${getStyleItem(colorType, active, hover)}`}>{type}</span> {title}
            </Box>    
        </button>
        </li>

    );
}