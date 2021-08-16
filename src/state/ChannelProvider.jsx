import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchChannels } from '../services/ArenaApi.js';

const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [selectedApi, setSelectedApi] = useState('arena');

  const apiMap = {
    arena: fetchChannels,
  };
}