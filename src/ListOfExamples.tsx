import { Link } from "react-router-dom"
import { routes } from "./routes"

export const ListOfExamples = (): JSX.Element => {

    return (
        <div>
            <h3>Examples</h3>
            <ul style={{ listStyleType: "none", margin: 0, display: "flex", flexDirection: "column" }}>
                {routes.map(r =>
                    <Link to={r.path}>{r.name}</Link>
                )}
            </ul>
        </div>
    )
}