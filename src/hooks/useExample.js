import { useEffect, useState } from "react";
import { example } from "../helpers/example";

export default function useExample() {
  [ exampleState, setExampleState ] = useState('');

  useEffect(() => {
    setExampleState( 'Hello world' );
  }, []);

  const getExample = () => example(exampleState);
  
  return { getExample, exampleState, setExampleState };
}