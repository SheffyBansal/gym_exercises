import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      // console.log(exerciseDetail);
      // console.log(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
      // console.log(exerciseVideosData.contents);
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      // console.log(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
      //  console.log(equipmentExercisesData);
    };

    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}></Detail>
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
