import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Loader from './Loader'

import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  // console.log(targetMuscleExercises);
  // console.log(equipmentExercises);
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography variant = "h3" sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
    {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography variant = "h3" sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
    {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
    </Box>
  )
}

export default SimilarExercises