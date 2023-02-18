

import { Typography, Box } from "@mui/material";
import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <Box>
            <Typography variant="h4">There was error loading this page</Typography>
        </Box>
    )
}

export default ErrorComponent;