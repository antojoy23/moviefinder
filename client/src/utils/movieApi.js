export const searchTitle = ({ searchTerm, year, searchType }) => {
    // let controller = new AbortController();
    // let signal = controller.signal;
    const body = {
        searchTerm,
        year,
        searchType
    }

    return new Promise(async (resolve, reject) => {
        try {
            const result = await fetch('http://localhost:9000/api/search', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
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
}