import React, { useState } from 'react';
import './GainsForm.css';

function GainsForm({ onAdd }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState(0);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    const handleDateChange = (e) => {
      setDate(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleWeightChange = (e) => {
      setWeight(e.target.value);
    };

    const handleSetsChange = (e) => {
      setSets(e.target.value);
    };

    const handleRepsChange = (e) => {
      setReps(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ date, description, weight, sets, reps} );
        setDate('');
        setDescription('');
        setWeight(0);
        setSets(0);
        setReps(0);
    }

    return (
        <form className="gains-from" onSubmit={handleSubmit}>
          <h2 className="gains-form__title">Log Gains</h2>
          <div className="gains-form__group">
            <label className="gains-form__label" htmlFor="date">Date:</label>
            <input className="gains-form__input" type="date" id="date" value={date} onChange={handleDateChange} />
          </div>
          <div className="gains-form__group">
            <label className="gains-form__label" htmlFor="description">Description:</label>
            <input className="gains-form__input" type="text" id="description" value={description} onChange={handleDescriptionChange} />
          </div>
          <div className="gains-form__group">
            <label className="gains-form__label" htmlFor="weight">Weight (kg):</label>
            <input className="gains-form__input" type="number" id="weight" value={weight} onChange={handleWeightChange} />
          </div>
          <div className="gains-form__group">
            <label className="gains-form__label" htmlFor="sets">Sets:</label>
            <input className="gains-form__input" type="number" id="sets" value={sets} onChange={handleSetsChange} />
          </div>
          <div className="gains-form__group">
            <label className="gains-form__label" htmlFor="sets">Reps:</label>
            <input className="gains-form__input" type="number" id="reps" value={reps} onChange={handleRepsChange} />
          </div>
          <button className="gains-form__submit" type="submit">ADD GAINS</button>
        </form>
    )
}

export default GainsForm;
