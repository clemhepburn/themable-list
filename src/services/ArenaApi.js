export const fetchChannels = async () => {
  const res = await fetch(
    'http://api.are.na/v2/channels/?per=100'
  );
  const json = await res.json();

  console.log(json.channels);

  return json.channels.map(({ title }) => ({
    title: title
  }));
};

