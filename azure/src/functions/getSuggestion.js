const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt:
    //     "Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.",
    //   max_tokens: 100,
    //   temperature: 0.8,
    // });

    // context.log(`Http function processed request for url "${request.url}"`);

    // const responseText = response.data.choices[0].text;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a prompt generator for Dalle2." },
        {
          role: "user",
          content:
            "Generate a prompt that mentions an orchid and that combines the styles of two artists of your choosing. Do not wrap the answer in quotes. Here's an example prompt: A surreal image of an orchid floating in outer space in the style of Rene Magritte and Georgia O'Keffe.",
        },
      ],
    });

    const command = completion.data.choices[0].message?.content;

    return { body: command };
  },
});
