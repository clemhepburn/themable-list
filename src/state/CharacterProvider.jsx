import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchCharacters } from '../services/HeyArnoldApi.js';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedList, setSelectedList] = useState('arnold');

  const apiMap = {
    arnold: fetchCharacters,
  };
}