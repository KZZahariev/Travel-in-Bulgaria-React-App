const buildOptions = (data, userId, announcementId, commentId) => {

    const options = {};

    if (data) {
        options.body = JSON.stringify(data)
        options.headers = {
            'Content-Type': 'application/json',
        },
        options.credentials = 'include'
    }

    if (userId) {
        options.headers = {
            ...options.headers,
            'userId' : userId
        }
    }

    if (announcementId) {
        options.headers = {
            ...options.headers,
            'announcementId' : announcementId
        }
    }

    if (commentId) {
        options.headers = {
            ...options.headers,
            'commentId' : commentId
        }
    }

    const token = localStorage.getItem('accessToken')
    if(token){
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        },
        options.credentials = 'include'
    }
    return options;
}

const request = async (method, url, data, userId, announcementId, commentId) => {
    const response = await fetch(url, {
        ...buildOptions(data, userId, announcementId, commentId),
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