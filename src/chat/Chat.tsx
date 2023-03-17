import { IInteractionConsumerPrompt } from "@-anarchy-/config";
import { useEffect, useState } from "react";
import { ChatInteraction } from "./ChatInteraction";
import "./Chat.scss";

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
        if (promptQuery) {
            onSubmit(promptQuery);
        } else {
            console.error("please enter a message")
        }
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

            <form onSubmit={handleTextSubmit} className="form">
                <input
                    type="text"
                    autoFocus
                    className="input"
                    value={promptQuery}
                    onChange={e => setPromptQuery(e.target.value)}
                />
                <button type="submit" className="send-message" disabled={!promptQuery}>send</button>
            </form>
        </>
    )
}