import React,{useContext} from 'react'

import { Box, Typography,Button } from '@mui/material'

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({data,bodyPart,setBodyPart,isBodyPart}) => {
  return (
    <div style={{overflowX:'scroll', display:'flex'}}>
        {data.length && data.map((item)=>{
            return <Box style={{}} key={item.id || item} itemID = {item.id || item} title ={item.id || item} m = "0 40px">
               {isBodyPart? <BodyPart bodyPart={bodyPart} setBodyPart={setBodyPart} item={item}/>:<ExerciseCard exercise={item}/>}
            </Box>
        })}
    </div>
  )
}

export default HorizontalScrollbar