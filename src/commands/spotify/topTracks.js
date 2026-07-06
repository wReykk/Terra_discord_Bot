// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDBTO6TJWrrDf9tI4Iw9IFarc7XJgtIqUA1mcJa0ONNPLjPxw4XpbR1wMsmUiD-hkDlmDrzqSEDCxDhM289Brr4M77HqNqq_6Ol-SluF1maN2XJVNqO4nu9l8mShD0s4C1Wg46A7jW7RvbPLfu4VzLyOFTbmkO4qhCKjeujDw6bvmFce5z06fcz5fG9S9s-T_LpyHytbvjVqZfwrY7beuQAn05uR19dRvrE9YeX9vBg_EURKeCIoY6GjhPjOkaWOphwjcnPTjFTycBCkvlj2sZE5sFPtfeKf7YFBIXtN6fvbloDFRyu2viXYcCztIuwIRx9UOQ';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({ name, artists }) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);