const fetcher = async (path: string) => {
  const res = await fetch(new URL(path, process.env.BASE_URL).toString(), {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8'
    }
  });
  const data = res.json();

  return data;
};

export default fetcher;
