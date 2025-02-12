function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            dataOutput(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}
function dataOutput(data) {
    console.log('Data Fetched:', data);
}

fetchData();
