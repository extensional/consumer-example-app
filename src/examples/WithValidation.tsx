import { IInteractionConsumerPrompt } from "@-anarchy-/config"
import { useEffect, useMemo, useState } from "react"
import { Chat } from "../chat/Chat";
import { ChatDevClient, IInteractionConsumerResponse } from "@-anarchy-/chat";
import { CONSUMER_CONFIG } from "../config";
import { CodeButton } from "../code-button/CodeButton";
import { ChatDebugDialog } from "../chat/ChatDebugDialog";

export const WithValidation = (): JSX.Element => {
    const [messages, setMessages] = useState<IInteractionConsumerPrompt[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [debugInfo, setDebugInfo] = useState<any[]>([]);

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
                setMessages(response.history);
                setDebugInfo(response.prompt.privateDebugInfo ?? response.prompt.debugInfo);
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
            <Chat
                messages={messages}
                onSubmit={handleChatSubmission}
                loading={loading}
            />

            <ChatDebugDialog debugInfo={debugInfo} />

            <CodeButton url="src/examples/WithValidation.tsx" />
        </>
    )
}