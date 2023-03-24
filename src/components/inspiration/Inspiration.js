import React, { useState } from 'react';
import './Inspiration.css';

const api_key = process.env.REACT_APP_EXERCISES_API_KEY;
const api_host = process.env.REACT_APP_EXERCISES_API_HOST;

const fetchExerciseByMuscle = async (muscle) => {
  const url = `https://${api_host}/v1/exercises?muscle=${muscle}`;
  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': api_key,
      'X-RapidAPI-Host': api_host
    }
  });
  const data = await response.json();
  return data[0];
}

const muscleOptions = [
  'abdominals',
  'abductors',
  'adductors',
  'biceps',
  'calves',
  'chest',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'lower_back',
  'middle_back',
  'neck',
  'quadriceps',
  'traps',
  'triceps'
];

const Inspiration = () => {
  const [exercise, setExercise] = useState(null);

  const handleClick = async (muscle) => {
    const data = await fetchExerciseByMuscle(muscle);
    setExercise(data);
  }

  return (
    <div className="container">
      {muscleOptions.map((muscle) => (
        <button key={muscle} className="button" onClick={() => handleClick(muscle)}>
          {muscle}
        </button>
      ))}
      {exercise && (
        <div className="exercise-container">
          <h2>{exercise.name}</h2>
          <p className="exercise">Type: {exercise.type}</p>
          <p className="exercise">Muscle: {exercise.muscle}</p>
          <p className="exercise">Equipment: {exercise.equipment}</p>
          <p className="exercise">Difficulty: {exercise.difficulty}</p>
          <p className="exercise">{exercise.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default Inspiration;
