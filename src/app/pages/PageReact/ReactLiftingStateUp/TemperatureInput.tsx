import React, { FC, useCallback } from 'react';
import { scaleNames, ScaleType } from '.';

export interface ITemperatureInputProps {
  temperature: string;
  scale: ScaleType;
  onTemperatureChange: (temperature: string) => void;
}

const TemperatureInput: FC<ITemperatureInputProps> = ({ temperature, scale, onTemperatureChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      onTemperatureChange(e.target.value);
    },
    [onTemperatureChange]
  );

  return (
    <fieldset
      style={{
        padding: 15,
        border: '2px solid gray',
      }}
    >
      <legend style={{ padding: 6, width: 'unset' }}>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
