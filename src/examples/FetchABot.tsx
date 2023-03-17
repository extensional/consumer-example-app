import { ChatDevClient, IBotApiInput, IBotDataInput, IInteractionConsumerResponse } from "@-anarchy-/chat";
import { IInteractionConsumerPrompt } from "@-anarchy-/config";
import { useEffect, useMemo, useState } from "react";
import { Chat } from "../chat/Chat";
import { CONSUMER_CONFIG } from "../config";

export const FetchABot = (): JSX.Element => {
    const [messages, setMessages] = useState<IInteractionConsumerPrompt[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const consumer = useMemo(() => new ChatDevClient(
        CONSUMER_CONFIG.chatDevConsumerApiKey,
        CONSUMER_CONFIG.debug
    ), []);

    useEffect(() => {
        consumer.fetchBot(CONSUMER_CONFIG.myBotSecret)
            .then(() => {
                console.log("BOT IS SET: ", consumer.getBot());
                setLoading(false);
            })
            .catch((e) => {
                alert("There was an error: " + e)
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