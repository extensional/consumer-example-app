import { IInteractionConsumerPrompt } from "@-anarchy-/config";
import { Send } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./Chat.scss";
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
        if (promptQuery) {
            onSubmit(promptQuery);
        } else {
            console.error("please enter a message")
        }
    }
    return (
        <>
            <div className="chat-container">
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

                <Box
                    component="form"
                    onSubmit={handleTextSubmit}
                    className="form"
                >
                    <TextField
                        type="text"
                        autoFocus
                        className="input"
                        autoComplete="off"
                        autoCorrect="off"
                        value={promptQuery}
                        onChange={e => setPromptQuery(e.target.value)}
                    />
                    <Button
                        type="submit"
                        className="send-message"
                        variant="contained"
                        disabled={!promptQuery}
                        sx={{ ml: 2 }}
                        startIcon={<Send />}
                    >
                        send
                    </Button>
                </Box>
            </div>

        </>
    )
}