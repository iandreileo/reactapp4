const API_URL = (query) => {
    const app_id = 'b064f589';
    const app_key = '7a70ef7cdda75191508e6d94a40de519';
    return `http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=10`
}

export default API_URL;