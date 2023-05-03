// export async function GET(request: Request) {
//     const response = await fetch(`${process.env.GET_SUGGESTION}`, {
//       cache: "no-store",
//     });
  
//     const textData = await response.text();
  
//     return new Response(textData.trim(), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
  
export async function GET(request: Request) {
    const response = await fetch(`${process.env.GET_SUGGESTION}`, {
        cache: 'no-store'
    })

    const textData = await response.text()

    return new Response(JSON.stringify(textData.trim()), {
        status: 200
    })
}