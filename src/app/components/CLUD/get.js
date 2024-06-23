'use client';
async function getData(param) {
    const postData = {
        method: "GET",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch(`http://localhost:3000/api/${param}`, postData);
    if (!res.ok) {
        throw new Error("cannot fetch");
    }
    return res.json();
}

export default getData;
