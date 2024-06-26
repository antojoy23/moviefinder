const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || "";

export const searchTitle = ({ searchTerm, searchType, page }) => {
    let controller = new AbortController();
    let signal = controller.signal;
    const body = {
        searchTerm,
        searchType,
        page
    }

    let requestPromise = new Promise(async (resolve, reject) => {
        try {
            const result = await fetch(`${apiEndpoint}/api/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                signal: signal,
                body: JSON.stringify(body)
            });
            const responseBody = await result.json();
            const response = responseBody["response"];
            if (response["Response"] === "False") {
                reject(response);
            } else {
                resolve(response)
            }
        } catch (ex) {
            if (ex.name === "AbortError") {
                console.warn("Request aborted");
            } else {
                reject(ex);
            }
        }
    });

    return [requestPromise, controller];
}

export const searchById = ({ id }) => {
    let controller = new AbortController();
    let signal = controller.signal;

    let requestPromise = new Promise(async (resolve, reject) => {
        try {
            const result = await fetch(`${apiEndpoint}/api/search/${id}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                signal: signal
            });
            const responseBody = await result.json();
            if (responseBody["Error"]) {
                reject(responseBody);
            } else {
                resolve(responseBody["response"])
            }
        } catch (ex) {
            if (ex.name === "AbortError") {
                console.warn("Request aborted");
            } else {
                reject(ex);
            }
        }
    });

    return [requestPromise, controller];
}