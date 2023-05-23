const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 1,
      messages: [
        {
          role: "system",
          content:
            "You are an artistic prompt generator for Dalle2. You have extensive knowledge of art history and the lives of artists and you like orchids.",
        },
        {
          role: "user",
          content:
            "Generate a prompt that mentions an orchid and that combines the styles of two artists of your choosing, include details such as the genre and what type of image it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes. Make sure to choose diverse artists in terms of gender, race, and nationality.",
        },
      ],
    });

    const command = completion.data.choices[0].message?.content;

    return { body: command };
  },
});
