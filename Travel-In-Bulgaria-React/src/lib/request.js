// const buildOptions = (data) => {

//     const options = {};

//     if (data) {
//         options.headers = {
//             'Content-Type': 'application/json'
//         }
//         options.body = JSON.stringify(data);
//     }

//     return options;
// }

// const request = async (method, url, data) => {
//     const response = await fetch(url, {
//         ...buildOptions(data),
//         method
//     });
//     const result = await response.json();
//     console.log(response);

//     return result;
// }


const request = async (method, url, data) => {
    const options = {};

    if (method !== "GET") {
        options.method = method;
        if (data) {
            options.headers = {
                'Content-Type': 'application/json'
            };
            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options);
    console.log(response.json());

    try {
        const result = await response.json();
        console.log(result);
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');