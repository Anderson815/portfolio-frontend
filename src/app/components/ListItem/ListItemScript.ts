import styles from "@/app/components/ListItem/ListemItemStyle.module.css"
import { TypeRequestEnum } from "@/app/enum/TypeRequestEnum";

export function getColorType(type: TypeRequestEnum){
  
  let colorType = "green";

  switch(type){
    case TypeRequestEnum.GET:
      colorType = styles.green;
      break;

    case TypeRequestEnum.POST:
      colorType = styles.yellow;
      break;
  }

  return colorType;
}

export function getStyleItem(colorType: string = "", active: boolean = false, hover: boolean){
  if(colorType !== "")
    return `${colorType} ${active ? styles.activeOption : ""} ${hover ? styles.hoverOptions : ""}`
  
  return `${active ? styles.activeOption : ""} ${hover ? styles.hoverOptions : ""}`
}