export default function getSongAndRelatedDataBySlug(data) {
  const [song] = data;
  const formattedData = {
    ...song
  };
  return formattedData;
}
