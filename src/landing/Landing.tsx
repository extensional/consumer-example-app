import { Link } from "react-router-dom";
import doge from "./doge.jpeg";
import { Grid } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const Landing = (): JSX.Element => {
    return (
        <>
            <h1>
                Welcome to the Anarchy Hackaton
            </h1>
            <h3>
                Make sure to check the <Link to="/examples">Examples</Link> before starting
            </h3>
            <Grid container direction="row" flexWrap="wrap">
                <Grid item lg={6} position="relative">
                    <img src={doge} style={{ width: "100%", borderRadius: "100%" }} alt="doge" />
                    <Favorite sx={{
                        position: "absolute",
                        fontSize: "10rem",
                        top: "calc(50% - 5rem)",
                        right: "-5rem",
                        color: "#e84118",
                        filter: "drop-shadow(0px 1px 10px #000)"
                    }} />
                </Grid>
                <Grid item lg={6}>
                    <img src="/blue-logo.svg" style={{ width: "100%" }} alt="doge" />
                </Grid>
            </Grid>

        </>
    )
}