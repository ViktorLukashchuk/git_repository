async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dataOutput(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function dataOutput(data) {
    console.log('Data Fetched:', data);
}

fetchData();
