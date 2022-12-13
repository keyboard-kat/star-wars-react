export const fetchApi = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

export const fetchPeople = async () => {
  const data = await fetchApi(`https://swapi.dev/api/people`);

  const people = data.results.map(async (i, idx) => {
    let homeworld = await fetchApi(i.homeworld);

    return {
      name: i.name,
      gender: i.gender,
      birth_year: i.birth_year,
      url: i.url,
      id: i.name.replaceAll(" ", ""),
      homeworld: homeworld.name,
    };
  });
  return Promise.all(people);
};
