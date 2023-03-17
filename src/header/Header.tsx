import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = (): JSX.Element => {
    return (
        <>
            <div className="header">
                <div className="app-content">
                    <div className="header-content">
                        <div className="name">Anarchy Hackaton</div>
                        <div className="links">
                            <Link to="/">All examples</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}