import formatJSON from "@/app/utils/formatJSON";
import { Box } from "@mui/material";

interface TextAreaProps{
  text: string;
  isJson?: boolean
} 

export default function TextArea({text, isJson}: TextAreaProps) {
  return (
    <Box component="div" className="border" sx={{width: "100%"}}>

      <p className="primaryColor paddingx2">
        { 
          isJson ? formatJSON(text) : text
        }
      </p>
    </Box>
  )
}