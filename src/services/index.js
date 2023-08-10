export const fetchData = (pages) => {
    return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&limit=10')
    .then((res) => res.json())
    .then((data) => {
        return data;
    }).catch((err) => console.log(err.message));

}