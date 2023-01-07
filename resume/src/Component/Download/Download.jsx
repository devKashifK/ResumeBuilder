import React, { useRef } from 'react';

import styles from "./Download.module.css"
import { useReactToPrint } from "react-to-print";
import Resume01 from '../Pages/Resume/Resume01';
import { useDispatch, useSelector } from 'react-redux';
import  { colorActions } from '../../Store/chnageColor';
import Resume02 from '../Pages/Resume/Resume02';
import Resume03 from '../Pages/Resume/Resume03/Resume03';




export default function Download() {
  const dispatch = useDispatch()
  const pdfRef = useRef();
  // const ChangeColor = (color) => {
  //   document.documentElement.style.setProperty("--resumeColor", color);
  // };
  const resume = useSelector((state) => state.selected.resume)

  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });
  return (
    <div className={styles.DownloadPage}>
    <div className={styles.colorContainer}>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#5b509b" }}
            onClick={() => dispatch(colorActions.colorChange("#5b509b"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#de8535" }}
            onClick={() => dispatch(colorActions.colorChange("#de8535"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#5e8e66" }}
            onClick={() =>  dispatch(colorActions.colorChange("#5e8e66"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#232323" }}
            onClick={() => dispatch(colorActions.colorChange("#232323"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#b2436f" }}
            onClick={() => dispatch(colorActions.colorChange("#b2436f"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#98c64d" }}
            onClick={() => dispatch(colorActions.colorChange("#98c64d"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#dd3b7a" }}
            onClick={() => dispatch(colorActions.colorChange("#dd3b7a"))}
          ></div>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: "#0d183a" }}
            onClick={() => dispatch(colorActions.colorChange("#0d183a"))}
          ></div>
        </div>
       
    {resume === 1 ? <Resume01  ref={pdfRef}/> : ""}   
    {resume === 0 ? <Resume02  ref={pdfRef}/>  : ""} 
    {resume === 2 ? <Resume03  ref={pdfRef}/>  : ""} 
    
    <div>
        <button className={styles.handlePrint} onClick={handlePrint}>Print this out!</button>
      </div>
    </div>
  )
}
