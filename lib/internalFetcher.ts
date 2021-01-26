const fetcher = async (path: string) => {
  const res = await fetch(new URL(path, process.env.BASE_URL).toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });
  const data = res.json();

  return data;
};

export default fetcher;
