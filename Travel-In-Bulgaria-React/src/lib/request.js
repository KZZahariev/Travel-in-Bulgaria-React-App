const buildOptions = (data) => {

    const options = {};

    if (data) {
        options.body = JSON.stringify(data)
        options.headers = {
            'Content-Type': 'application/json'
        }
    }

    const token = localStorage.getItem('accessToken')

    if(token){
        options.header = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    return options;
}

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result; 
    }

    return result;
}    


// const request = async (method, url, data) => {
//     const options = {};
    
//     if (method !== "GET") {
//         options.method = method;
//         if (data) {
//             options.headers = {
//                 'Content-Type': 'application/json'
//             };
//             options.body = JSON.stringify(data);
//         }
//     }
//     console.log(url);
//     const response = await fetch(url, options);
    
//     try {
//         const result = await response.json();
//         return result;

//     } catch (error) {
//         console.log(error);
//     }   
// }

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');