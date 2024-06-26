import React, { useEffect, useState } from 'react';
import Style from './Notfound.module.css';


export default function Notfound() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>
  <h1 className='text-center'>not_found</h1>
  <h2 className='text-center text-8xl mt-3'>404_page</h2>
  </>
}
