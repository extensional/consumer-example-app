import { Code } from "@mui/icons-material";
import { Fab } from "@mui/material";

interface CodeButtonAttrs {
    url: string;
}

export const CodeButton = ({ url }: CodeButtonAttrs): JSX.Element =>
    <a
        href={"https://raw.githubusercontent.com/extensional/consumer-example-app/main/" + url}
        target="_blank"
        rel="noreferrer"
        title="Open code in new tab"
        style={{ position: "fixed", bottom: "1rem", left: "1rem" }}
    >
        <Fab>
            <Code />
        </Fab>
    </a>