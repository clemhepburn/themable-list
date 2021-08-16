export const fetchChannels = async () => {
  const res = await fetch(
    'http://api.are.na/v2/channels/'
  );
  const json = await res.json();

  return json.channels.map(({ title }) => ({
    title: title
  }));

};

console.log(fetchChannels());
