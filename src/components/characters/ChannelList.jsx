import React from 'react';
import { useChannels } from '../../state/ChannelProvider.jsx';
import Channel from '../characters/Channel';

const ChannelList = () => {
  const channels = useChannels();

  const channelElements = channels.map((channel) => (
    <li key={channels.title}>
      <Channel {...channel} />
    </li>
  ));

  return <ul>{channelElements}</ul>;
};

export default ChannelList;
