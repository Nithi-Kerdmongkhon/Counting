"use client";

async function updateData(endpoint, data) {
    try {
        const response = await fetch(`http://localhost:3000/api/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Network response was not ok: ${response.statusText}, Details: ${JSON.stringify(errorDetails)}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error.message);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
}

export default updateData;
