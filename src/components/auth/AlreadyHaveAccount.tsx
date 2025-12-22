import { Typography } from "@mui/material"
import { FlexColumn } from "../ui/FlexColumn"
import Link from "next/link"

export interface IHaveAnAccountProps {
  textMain?: string;
  textSecondary?: string;
  href?: string;
}

const AlreadyHaveAccount = ({
  textMain= 'Already have an account?',
  textSecondary= 'Login here',
  href= '/access/auth/login'
}: IHaveAnAccountProps) => {
  return (
    <FlexColumn gap={1}>
        <Typography variant="h5" fontSize='20px'>
         {textMain}     
        </Typography>
        <Link href={href}
        style={{
            color: 'inherit',
            textDecoration: 'none'
        }}
        >
        <Typography variant="h5" fontSize='20px' color="secondary.main">
        {textSecondary}
        </Typography>
        </Link>
    </FlexColumn>
  )
}

export default AlreadyHaveAccount