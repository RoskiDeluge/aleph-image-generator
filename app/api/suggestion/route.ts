export async function GET(request: Request) {
    // Connec to our Azure function endpoint
    const response = await fetch('...', {
        cache: 'no-store'
    })

    const textData = await response.text()

    // Parse the JSON data
    return new Response(JSON.stringify(textData.trim()), {
        status: 200
    })
}