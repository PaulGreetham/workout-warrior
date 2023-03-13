import React, { useState } from 'react';
import GainsForm from './gainsform/GainsForm'
import './LogGains.css'

function LogGains() {
    const [gainsData, setGainsData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddGains = (data) => {
        setGainsData([...gainsData, data]);
    };

    const handleSaveGains = (data) => {
        const newData = [...gainsData];
        newData[editIndex] = data;
        setGainsData(newData);
        setEditIndex(null);
    };

    const handleDeleteGains = (index) => {
        const newData = [...gainsData];
        newData.splice(index, 1);
        setGainsData(newData);
    };

    return (
      <div className="log-gains">
        <GainsForm
          onAdd={handleAddGains}
          onSave={handleSaveGains}
          editIndex={editIndex}
        />
        <div className="gains-card-container">
          {gainsData.map((data, index) => (
            <div key={index} className="gains-card">
              <p clasName="gains-card__date">{data.date}</p>
              <p className="gains-card__description">{`${data.description}`}</p>
              <p clasName="gains-card__weight">{`Weight: ${data.weight} kg`}</p>
              <p clasName="gains-card__sets">{`Sets: ${data.sets}`}</p>
              <p clasName="gains-card__date">{`Reps: ${data.reps}`}</p>
              <button className="gains-card__delete" onClick={() => handleDeleteGains(index)}>Delete</button>
            </div>
            ))}
        </div>
      </div>
    )
}

export default LogGains