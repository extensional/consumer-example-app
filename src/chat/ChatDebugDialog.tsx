import { Code } from "@mui/icons-material";
import { Fab, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";

interface ChatDebugDialogAttrs {
    debugInfo: any[];
}

export const ChatDebugDialog = ({ debugInfo }: ChatDebugDialogAttrs): JSX.Element => {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleCloseDialog = (): void => {
        setDialogOpen(false);
    }

    return (
        <>
            {debugInfo.length > 0 &&
                <Fab
                    className="open-debug"
                    onClick={() => setDialogOpen(true)}
                    sx={{
                        position: "fixed",
                        right: "1rem",
                        bottom: "1rem",
                    }}
                >
                    <Code />
                </Fab>
            }
            <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="xl">
                <DialogTitle>Debug info</DialogTitle>
                <DialogContent>
                    <div style={{ marginRight: "1rem" }}>
                        {debugInfo.map((debugItem: any, index: number) =>
                            <div>
                                <h3>Request #{index + 1}</h3>
                                <pre
                                    style={{
                                        width: "100%",
                                        wordBreak: "break-word",
                                        background: "#333",
                                        color: "white",
                                        marginRight: "1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    <code
                                        style={{
                                            background: "#333",
                                            display: "inline-block",
                                            padding: "1rem",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        {JSON.stringify(debugItem, null, 4)}
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}