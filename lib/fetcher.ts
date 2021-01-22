const fetcher = async (path: string) => {
  const res = await fetch(new URL(path, process.env.BASE_URL).toString());
  const data = res.json();

  return data;
};

export default fetcher;
