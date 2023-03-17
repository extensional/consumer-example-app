import { Link } from "react-router-dom";
import "./Header.scss";
import { AppBar, Button } from "@mui/material";
import { Grading, Home } from "@mui/icons-material";

export const Header = (): JSX.Element => {
    return (
        <>
            <AppBar className="header">
                <div className="app-content">
                    <div className="header-content">
                        <div className="name">
                            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", color: "black" }}>
                                <img src="/blue-logo.svg" alt="logo" style={{ marginRight: ".5rem", height: "2rem" }} />
                                <span>Anarchy Hackaton</span>
                            </Link>
                        </div>
                        <div className="links">
                            <Link
                                hidden
                                to="/"
                                style={{ textDecoration: "none" }}
                            >
                                <Button variant="contained"
                                    startIcon={<Home />}
                                    size="small"
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link to="/examples" style={{ textDecoration: "none", marginLeft: "1rem" }}>
                                <Button variant="outlined"
                                    startIcon={<Grading />}
                                    size="small"
                                >
                                    Examples
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AppBar>
        </>
    )
}