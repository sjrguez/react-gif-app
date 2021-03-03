export const getGifs = async (name) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(name)}&limit=10&api_key=OluWZCL4VojkRrPG7yYLg6REXq5Ne8kR`

    const res =  await fetch(url)
    const info = await res.json()
    
    const gifs = info.data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}