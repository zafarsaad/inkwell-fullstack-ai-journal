const createURL = path => {
    return window.location.origin + path
}

export const updateEntry = async (id, content) => {
    const res = await fetch(new Request(createURL(`/api/journal/${id}`), {
        method: 'PATCH',
        body: JSON.stringify({ content })
    }))

    if (res.ok) {
        const data = await res.json();
        return data.data
    } else {
        console.log(`updateEntry in api.ts broke.`)
    }
}

export const createNewEntry = async () => {
    const res = await fetch(new Request(createURL('/api/journal'), {
        method: 'POST',
        // body: JSON.stringify({})
    }))

    if (res.ok) {
        const data = await res.json()
        return data;
    }
}

export const askQuestion = async (question) => {
    const res = await fetch(new Request(createURL('/api/question'), {
        method: 'POST',
        body: JSON.stringify({ question })
    }))

    if (res.ok) {
        const data = await res.json()
        return data.data;
    }
}
