import { IInteractionConsumerPrompt } from "@-anarchy-/config";
import { useEffect, useState } from "react";
import { ChatInteraction } from "./ChatInteraction";

interface ChatAttrs {
    messages: IInteractionConsumerPrompt[];
    onSubmit: (promptQuery: string) => any;
    loading?: boolean;
}

export const Chat = ({ messages, onSubmit, loading }: ChatAttrs): JSX.Element => {

    const [promptQuery, setPromptQuery] = useState<string>("");

    useEffect(() => {
        setPromptQuery("");
    }, [messages]);

    const handleTextSubmit = (e: any): void => {
        e.preventDefault();
        onSubmit(promptQuery);
    }
    return (
        <>
            <div className="chat">
                {
                    loading
                        ? <ChatInteraction interaction={{ question: promptQuery, answer: "LOADING..." }} />
                        : null
                }
                {
                    messages.map(m => <ChatInteraction interaction={m} />)
                }
            </div>

            <form onSubmit={handleTextSubmit}>
                <input
                    type="text"
                    autoFocus
                    value={promptQuery}
                    onChange={e => setPromptQuery(e.target.value)}
                />
                <button type="submit">send</button>
            </form>
        </>
    )
}