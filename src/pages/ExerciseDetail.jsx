import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {fetchData, EXERCISE_BASE_URL, 
  YOUTUBE_BASE_URL, exerciseOptions, 
  youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
  

      const exerciseDetailData = await fetchData(`${EXERCISE_BASE_URL}/1004/exercise+by+id?id=${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${YOUTUBE_BASE_URL}/?q=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${EXERCISE_BASE_URL}/exercises/target/${exerciseDetailData.target}`);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${EXERCISE_BASE_URL}/exercises/equipment/${exerciseDetailData.equipment}`);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;