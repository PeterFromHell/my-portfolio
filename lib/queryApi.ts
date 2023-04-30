import openai from "./chatgpt";
type Props = {
    prompt: string
}

const query = async ({prompt}: Props) => {
    const res = await openai
        .createCompletion({
            model: 'text-davinci-300',
            prompt,
            temperature: 0.9,
            top_p: 1,
            max_tokens: 1000,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((res) => res.data.choices[0].text)
        .catch((err) => {
            `ChatGPT was unable to find the answer (Error: ${err.message})`
        })
        return res
}

export default query