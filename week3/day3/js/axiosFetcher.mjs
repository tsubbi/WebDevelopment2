export function getAllUsers(baseURL, route, callback, catchError) {
    let url = baseURL + route;
    axios.get(url).then(response => {
        if (response.status !== 200) {
            console.log(`Houston, we have a problem: ${error}`);
            catchError(error);
            return;
        }
        callback(response.data);
    }).catch( (error) => {
        console.log(`Houston, we have a problem: ${error}`);
        catchError(error);
    });
}