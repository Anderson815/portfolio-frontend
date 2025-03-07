"use client"

import { Grid2 } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Navigator from "./components/Navigator/Navigator";
import { NavigatorOptionsEnum } from "./components/Navigator/NavigatorOptionsEnum";
import TextArea from "./components/TextArea/TextArea";

interface ResponseValues{
  endpoint: string;
  status: number;
  body: string;
} 

export default function Home() {

  const [response, setResponse] = useState<ResponseValues>({
    status: 200,
    endpoint: "",
    body: ""
  });

  let statusText = `${response.status} `;

  switch(response.status){
    case 200:
      statusText +=  "OK";
      break;

    case 400:
      statusText = "BAD REQUEST";
      break;

    case 500:
      statusText = `BAD REQUEST`;
      break;
  }

  useEffect(() => {
    callDataFromTypeOption(NavigatorOptionsEnum.ABOUT);
  }, [])

  const callDataFromTypeOption = async (navigatorOption: NavigatorOptionsEnum) => {
    const result = await axios.get(`http://localhost:8080/user/teste`);
    const {data} = result;

    setResponse({
      body: JSON.stringify(data),
      endpoint: result.config.url!,
      status: result.status
    })
  }
  
  return (
      <Grid2 container spacing={2}>
        <Grid2 size={2}>
          <Navigator  callDataFromTypeOption={() => callDataFromTypeOption(NavigatorOptionsEnum.ABOUT)}/>
        </Grid2>
        <Grid2 size={10}>

          <Grid2 container spacing={2}>

            <Grid2 size={10}>
              <TextArea text={response.endpoint}>
              </TextArea>
            </Grid2>

            <Grid2 size={2}>
              <TextArea text={statusText}>
              </TextArea>
            </Grid2>

            <Grid2 size={12}>
              <TextArea text={response.body} isJson={true}>
              </TextArea>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
  );
}