export async function GET(request: Request) {
    const response = await fetch("https://aleph-image-generator.azurewebsites.net/api/getsuggestion", {
        cache: 'no-store'
    })

    const textData = await response.text()

    return new Response(JSON.stringify(textData.trim()), {
        status: 200
    })
}