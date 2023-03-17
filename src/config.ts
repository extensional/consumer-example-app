interface IConsumerConfig {
    openAIApiKey: string;
    chatDevConsumerApiKey: string;
    debug?: {
        debugUrl: string;
    }
}

export const CONSUMER_CONFIG: IConsumerConfig & Record<string, any> = {
    openAIApiKey: "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",
    chatDevConsumerApiKey: "cd-sk-pjwnBUMkiq8ESHdZXn6q",
    myBotSecret: "1IkmxFNppmCuuqWLamVb",
    debug: { debugUrl: "http://localhost:3050/api" }
};
