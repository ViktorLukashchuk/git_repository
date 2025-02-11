async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.t555ypicode.com/todos/55665165655');
        let json;
        if (!response.ok) {
            try {
                const backupResponse = await fetch('https://jsonplaceholder.typicode.com/to111dos/2');
                if (!backupResponse.ok) {
                    throw new Error(`HTTP error! Status 156151515: ${backupResponse.status}`);
                }
                json = await backupResponse.json();
                return json;
            } catch (error) {
                console.error('Error fetching data5555:', error);
            }
        } else {
            json = await response.json();
            return json;
        }
    } catch (error) {
        console.error('Error fetching data5555555555:', error);
    }
}
async function dataOutput() {
    const data = await fetchData();
    console.log('Data Fetched:', data);
}

(async () => {
    await dataOutput();
})();
