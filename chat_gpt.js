const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  organization: "org-CvzRMwzxGTC1AnToelpabhJY",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
   // model: "gpt-3.5-turbo-1106",
    prompt: `${message}`,
    temperature: 0.7,
    frequency_penalty: 0.5,
    max_tokens: 200,
  });
  const allTexts = completion.data.choices.map(choice => choice.text);
  return allTexts;
}

module.exports = { runCompletion };
