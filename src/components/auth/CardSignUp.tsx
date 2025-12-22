'use client'
import { AppleIconSvg, AppleMusicSvg, FacebookIconSvg, GoogleIconSvg, LogoTypography, WindowsIconSvg } from "@/assets/icons"
import { FlexColumn } from "../ui/FlexColumn"
import { Box, Typography } from "@mui/material"
import CardAuthThird from "./CardAuthThird"
import SecondaryButton from "../ui/SecondaryButton"
import PrimaryButton from "../ui/PrimaryButton"
import AlreadyHaveAccount from "./AlreadyHaveAccount"
import Link from "next/link"
import GrandiantButton from "../ui/GrandiantButton"

const CardSignUp = () => {
  return (
    <FlexColumn
    sx={{
      pt: 5,
      width: '100%'
    }}
    >
      <FlexColumn gap={7}>

        <LogoTypography/>
        <FlexColumn 
        px={20}
        py={5}
        bgcolor='background.default'
        borderRadius='20px'
        >
          <FlexColumn gap={5}>
            <FlexColumn gap={2.5}>
              <Typography variant="h1"
              >
                Welcome to Spyral
              </Typography>

              <Typography variant="h5"
              fontSize='18px'
              >
                Empower Your Music
              </Typography>
            </FlexColumn>

            <FlexColumn gap={1.5}>
              <FlexColumn gap={1.5}>
                <CardAuthThird
                icon={GoogleIconSvg}
                text="Continue with Google"
                />
                <CardAuthThird
                icon={FacebookIconSvg}
                text="Continue with Facebook"
                />
                <CardAuthThird
                icon={AppleIconSvg}
                text="Continue with Apple"
                />
                <CardAuthThird
                icon={WindowsIconSvg}
                text="Continue with Windows"
                />
              </FlexColumn>

              <FlexColumn gap={1}>
                <Typography variant="h7" color='text.secondary'>
                Or sign up with email
                </Typography>
               <Link href='/access/auth/signup/email'
               style={{
                textDecoration: 'none',
                color: 'inherit' 
               }}
               >
                <CardAuthThird
                text="Email signup"
                />
               </Link>
              </FlexColumn>

              <FlexColumn mt={3} gap={3}>
                <GrandiantButton/>

                <Box
                  mt={0}
                  sx={{
                  color: 'error.main',
                  typography: 'h5'
                  }}
                  >
                  The passwords don't match
                </Box>

                <Typography lineHeight='1rem' width='320px' variant="h9" textAlign='center' color="#d9D9D9"> 
                  By continuing, you acknowledge that you understand and agree to the Terms & Conditions and Privacy Policy 
                </Typography>
              </FlexColumn>
            </FlexColumn>

          </FlexColumn>

        </FlexColumn>

        <AlreadyHaveAccount/>

      </FlexColumn>

    </FlexColumn>
  )
}

export default CardSignUp