export default async function getPeople() {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    let allResults = data.results;
    let nextPage = data.next;

    console.log(data);

    while (nextPage) {
        const nextRes = await fetch(nextPage);
        const nextData = await nextRes.json();
        allResults = [...allResults, ...nextData.results];
        nextPage = nextData.next;
    }

    data.results = allResults;

    return data;
}

export async function getPeopleById(id: string) {
    const res = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await res.json();
    return data;
}