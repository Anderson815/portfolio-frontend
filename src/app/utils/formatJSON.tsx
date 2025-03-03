const SPECIAL_CARACTER_TO_BREAK = '|';

export default function formatJSON(text: string){
  const SPACE_TAB = 4;
  const lines = getLines(text);
  const tabLines = getTabLines(lines);

  const valuePadStart = getValuePadStart(lines.length);

  tabLines.forEach((numberOfTabsOfLine, index) => {    
    const totalSpaces = numberOfTabsOfLine * SPACE_TAB;

    const space = '\u00A0';
    const spacesToTab = space.repeat(totalSpaces);

    lines[index] = `${spacesToTab}${lines[index]}`;
    lines[index] = prepareLineToStyle(lines[index], SPECIAL_CARACTER_TO_BREAK);
  })

  return(
    <>
      { 
        lines.map((line, indice) => (
          <span key={indice}>
            <span className="secondaryColor">    
              {(indice + 1).toString().padStart(valuePadStart, "0") + " "}
            </span>
            
            <span>
              {line.split(SPECIAL_CARACTER_TO_BREAK).map((part, index) => {
                const colorPart = colorPartLine(part, index);

                return (
                  <span className={colorPart} key={index}>
                    {part}
                  </span>
                )
              })}
            </span>

            <br />
          </span>
        ))
      }
    </>
  )
}

function prepareToSplit(textJSON: string, caracterSpecial: string){
  textJSON = textJSON.replaceAll(`[`, `[${caracterSpecial}`);
  textJSON = textJSON.replaceAll(`]`, `${caracterSpecial}]`);

  textJSON = textJSON.replaceAll(`{`, `{${caracterSpecial}`);
  textJSON = textJSON.replaceAll(`}`, `${caracterSpecial}}`);
  
  textJSON = textJSON.replaceAll(`,`, `,${caracterSpecial}`);

  return textJSON;
}

function getLines(text: string){
  let lines: string[] = [];

  text = text.replaceAll("\":", "\": ");
  text = prepareToSplit(text, SPECIAL_CARACTER_TO_BREAK)
  
  lines = text.split(SPECIAL_CARACTER_TO_BREAK);
  if(lines[lines.length - 1] === "")
    lines.pop();

  return lines;
}

function getTabLines(lines: string[]){
  const tabLines: number[] = [];
  let tab = 0;

  lines.forEach(line => {
    const isRemoveTab = verifyCaracterSpecialToRemoveTab(line);
    if(isRemoveTab) tab--;

    tabLines.push(tab);
    
    const isAddTab = verifyCaracterSpecialToAddTab(line);
    if(isAddTab) tab++;

  })

  return tabLines;
}

function verifyCaracterSpecialToAddTab(line: string){
  return (line.includes('[') || line.includes('{'));
}

function verifyCaracterSpecialToRemoveTab(line: string){
  return (line.includes(']') || line.includes('}'));
}

function getValuePadStart(totalLines: number){
  let valuePadStart = 1;

  if(totalLines > 9)
    valuePadStart = 2;

  if(totalLines > 99)
    valuePadStart = 3;

  return valuePadStart;
}

function prepareLineToStyle(line: string, caracterSpecial: string){
  line = line.replaceAll(`\": `, `\"${caracterSpecial}: ${caracterSpecial}`);
  line = line.replaceAll(`,`, `${caracterSpecial},`);
  return line;
}

function colorPartLine(part: string, index: number){
  let color = "primaryColor";

  if(index === 0 && part.includes("\""))
    color = "blueTextArea";

  if(index > 1 && part.includes("\""))
    color = "orangeTextArea";

  if(
    index > 1 && 
    (
      part.trim() === "true" ||
      part.trim() === "false" 
    )
  )
    color = "orangeTextArea";

  if(index > 1 && !isNaN(Number(part)))
    color = "greenTextArea";

  return color;
}