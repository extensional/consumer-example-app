interface IConsumerConfig {
    openAIApiKey: string;
    chatDevConsumerApiKey: string;
    debug?: {
        debugUrl: string;
    }
}

export const CONSUMER_CONFIG: IConsumerConfig & Record<string, any> = {
    openAIApiKey: "OPENAI_API",
    chatDevConsumerApiKey: "CHAT.DEV/SETTINGS API KEY",
    myBotSecret: "4OYZy1ZzsYDyzOJezroz",
    debug: { debugUrl: "http://localhost:3000/api" }
};
