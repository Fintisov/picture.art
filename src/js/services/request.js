const postData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        body: data,
    });

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status : ${response.status}`);
    }

    return await response.text();
};

const getResurs = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status : ${response.status}`);
    }

    return response.json();
};

export {postData, getResurs};