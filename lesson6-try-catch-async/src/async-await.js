async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
async function dataOutput() {
    const data = await fetchData();
    console.log('Data Fetched:', data);
}

dataOutput();
