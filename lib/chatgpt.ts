import { Configuration, OpenAIApi} from 'openai'

const configuration = new Configuration({
    apiKey:import.meta.env.OPEN_API_KEY
})

const openai = new OpenAIApi(configuration)

export default openai