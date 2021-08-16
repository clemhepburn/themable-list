import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchChannels } from '../services/ArenaApi.js';

const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [selectedApi, setSelectedApi] = useState('arena');

  const apiMap = {
    arena: fetchChannels
  };

  useEffect(() => {
    apiMap[selectedApi]().then(setChannels);
  }, [selectedApi]);


  return (
    <ChannelContext.Provider value={{ channels, setSelectedApi, apiMap }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannels = () => {
  const { channels } = useContext(ChannelContext);
  return channels;
};

export const useSetApi = () => {
  const { setSelectedApi } = useContext(ChannelContext);
  return setSelectedApi;
};

export const useAvailableApis = () => {
  const { apiMap } = useContext(ChannelContext);
  return Object.keys(apiMap);
};
