import { Typography } from "@mui/material"
import { FlexColumn } from "./FlexColumn"
import GrandiantButton from "./GrandiantButton"

export interface IGoDashboardProps {
    textMain?: string;
}

const GoDashboard = ({
    textMain = 'Go to Spyral dashboard to continue'
}: IGoDashboardProps) => {
  return (
    <FlexColumn gap={5}
    position='absolute'
    minHeight='100vh'
    sx={{
        width: '100%',
    }}
    >
        <Typography variant="h1" fontSize='40px'>{textMain}</Typography>
        <GrandiantButton/>
    </FlexColumn>
  )
}

export default GoDashboard