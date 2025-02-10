async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/55665165655');
        let json;
        if (!response.ok) {
            try {
                const backupResponse = await fetch('https://jsonplaceholder.typicode.com/todos/2');
                if (!backupResponse.ok) {
                    throw new Error(`HTTP error! Status 156151515: ${backupResponse.status}`);
                }
                json = await backupResponse.json();
                return json;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            json = await response.json();
            return json;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
async function dataOutput() {
    const data = await fetchData();
    console.log('Data Fetched:', data);
}

// 2 options of calling

dataOutput(); //1 - This will execute dataOutput(), but since it’s asynchronous, the calling code won’t wait for it to finish.

async function main() {
    await dataOutput();
    console.log('Data output completed.');
}

main(); // 2 - main() is an async function that waits for dataOutput() before moving forward.
