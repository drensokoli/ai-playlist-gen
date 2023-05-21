
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const names = {
    role: "system",
    content: "I am going to give you a description for a playlist I want to create. Based on the description that I'll give you, I need you to give me a list of 10 names for the playlist."
};

const songs = {
    role: "system",
    content: "I am going to give you a description for a playlist I want to create. Based on the description that I'll give you, I need you to give me a list of 10 songs for the playlist."
};

export async function getNames(question: string) {
    const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            names,
            {
                role: "user",
                content: question
            }
        ]
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
    });

    const data = await response.json();

    console.log('API Response Status:', response.status);
    console.log('API Response Status Text:', response.statusText);
    console.log('API data:', data);

    if (!response.ok || !data.choices || data.choices.length === 0) {
        throw new Error(`${data}`);
    }

    return data.choices[0].message.content;
}

export async function getSongs(question: string) {
    const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            songs,
            {
                role: "user",
                content: question
            }
        ]
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
    });

    const data = await response.json();

    console.log('API Response Status:', response.status);
    console.log('API Response Status Text:', response.statusText);
    console.log('API data:', data);

    if (!response.ok || !data.choices || data.choices.length === 0) {
        throw new Error(`${data}`);
    }

    return data.choices[0].message.content;
}