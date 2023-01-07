import React from 'react';
import resumeData from './data';
import {AiOutlineDoubleRight} from "react-icons/ai"
import styles from "./GetStared.module.css";
import { selectedActions } from '../../../Store/SelectedResume';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
const handleClick = (item) => {
navigate("/form01")
dispatch(selectedActions.resumeChange(item))
}
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>Build Your Resume Now<span>.</span></div>
<div className={styles.previewContainer}>
     {resumeData.map((item) => {
return(
  <div className={styles.card} key={item.id} >
    <div className={styles.overlay}>
<button onClick={() => handleClick(item.id)}><AiOutlineDoubleRight /></button>
    </div>
  <img src={item.image} alt={item.id} />
</div>

)
     })}
       
    </div>
    <div className={styles.Note}>More Resume Templates Will Be Soon Updated<span>.</span></div>
    </div>
  )
}
