import * as React from "react";

export interface HelloWorldProps {
  firstName: string;
  lang: string;
}

export const HelloWorld = (props: HelloWorldProps) => (
         <h1>
           Hi {props.firstName} from React! Welcome to {props.lang}!
         </h1>
       );
