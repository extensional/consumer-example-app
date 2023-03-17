import { IInteractionConsumerPrompt } from "@-anarchy-/config"
import { useEffect, useMemo, useState } from "react"
import { Chat } from "../chat/Chat";
import { ChatDevClient, IInteractionConsumerResponse } from "@-anarchy-/chat";
import { CONSUMER_CONFIG } from "../config";

export const WithValidation = (): JSX.Element => {
    const [messages, setMessages] = useState<IInteractionConsumerPrompt[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const consumer = useMemo(() => new ChatDevClient(
        CONSUMER_CONFIG.chatDevConsumerApiKey,
        CONSUMER_CONFIG.debug
    ), []);

    useEffect(() => {
        consumer.setBot({
            name: "MyRandomuserBot",
            openAIKey: CONSUMER_CONFIG.openAIApiKey,
            apis: [
                {
                    description: "useful to get names of random people",
                    endpoint: "https://randomuser.me/api",
                    params: [{
                        name: "gender",
                        value: "the gender of the person, 'male' or 'female'. Leave empty otherwise",
                        valueType: "description"
                    }]
                }
            ],
        });
    }, [consumer]);

    const handleChatSubmission = (promptQuery: string): void => {
        console.log("message sent:", promptQuery)

        setLoading(true);
        consumer.sendInteraction(promptQuery)
            .then((response: IInteractionConsumerResponse) => {
                setMessages(response.history)
            })
            .catch((e: any) => {
                alert("there was an error: " + e);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <Chat messages={messages} onSubmit={handleChatSubmission} loading={loading} />
        </>
    )
}