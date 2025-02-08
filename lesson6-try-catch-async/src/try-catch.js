async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/51155621626');
        let data;
        if (!response.ok) {
            try {
                const backupResponse = await fetch('https://jsonplaceholder.typicod5e.com/todos/git');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                data = await backupResponse.json();
                dataOutput(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            data = await response.json();
            dataOutput(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function dataOutput(data) {
    console.log('Data Fetched:', data);
}

fetchData();
