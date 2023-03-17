import { FetchABot } from "./examples/FetchABot";
import { NoValidation } from "./examples/NoValidation";
import { WithValidation } from "./examples/WithValidation";

export const routes: Array<{ path: string; element: JSX.Element, name: string; }> = [
    { path: '/no-validation', element: <NoValidation />, name: "No validation" },
    { path: '/with-validation', element: <WithValidation />, name: "With validation" },
    { path: '/fetch-a-bot', element: <FetchABot />, name: "Fetch a bot" },
]
