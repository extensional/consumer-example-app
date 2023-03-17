import { IInteractionConsumerPrompt } from "@-anarchy-/config";

interface ChatInteractionAttrs {
    interaction: IInteractionConsumerPrompt;
}

export const ChatInteraction = ({ interaction }: ChatInteractionAttrs): JSX.Element => {
    return (
        <div className="interaction">
            <div className="my interaction-bubble">
                {interaction.question}
            </div>
            <div className="ai interaction-bubble">
                {interaction.answer}
            </div>
        </div>
    )
}