import React from 'react';
import { useChannels } from '../../state/ChannelProvider';
import Channel from './Channel';


const ChannelList = () => {
  const channels = useChannels();

  const channelElements = channels.map((title) => (
    <li key={title}>
      <Channel {...channel} />
    </li>
  ));

  return <ul className="channel-list">{channelElements}</ul>;
};

export default ChannelList;
