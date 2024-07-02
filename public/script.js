async function convertToColumns() {
    const inputText = document.getElementById('inputText').value;
    const outputBody = document.getElementById('outputBody');
    
    // Clear previous output
    outputBody.innerHTML = '';
    
    // Split the input text into lines
    const lines = inputText.split('\n');
    
    // Process each line
    for (const line of lines) {
        const columns = line.split(' ').filter(word => word.trim() !== '');
        const row = document.createElement('tr');
        
        const entryData = {
            name: columns[0] || '',
            address: columns[1] || '',
            color: columns[2] || '',
            place: columns[3] || '',
            class: columns[4] || '',
            price: columns[5] || '',
        };
        
        // Append data to the table
        for (let i = 0; i < 6; i++) {
            const cell = document.createElement('td');
            cell.textContent = columns[i] || '';
            row.appendChild(cell);
        }
        
        outputBody.appendChild(row);
        
        // Send data to the server
        await fetch('/api/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entryData),
        });
    }
    
    // Clear the textarea
    document.getElementById('inputText').value = '';
}
