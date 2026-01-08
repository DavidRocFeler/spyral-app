'use client'
import { AppleIconSvg, EyeRegisterIconSvg, FacebookIconSvg, GoogleIconSvg, LogoTypography, WindowsIconSvg } from "@/assets/icons"
import { FlexColumn } from "../ui/FlexColumn"
import { Box, Typography } from "@mui/material"
import CardAuthThird from "./CardAuthThird"
import AlreadyHaveAccount from "./AlreadyHaveAccount"
import IconInput from "../ui/IconInput"
import { useState } from "react"
import CheckBoxCustom from "../ui/CheckBoxCustom"
import { FlexCenter } from "../ui/FlexCenter"
import GrandiantButton from "../ui/GrandiantButton"

const CardLogin = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordsDoNotMatch = password !== confirmPassword && confirmPassword.length > 0;
  
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
        py={7}
        bgcolor='background.default'
        borderRadius='20px'
        >
          <FlexColumn gap={4}>
            <FlexColumn>
              <Typography variant="h1"
              >
                Login here to continue
              </Typography>
            </FlexColumn>

            <FlexColumn gap={2}
            sx={{
              alignItems: 'flex-start'
            }}
            >

              <IconInput
                placeholder="Email"
                bgcolor="grey.900"
                height="44px"
                borderRadius="8px"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                {...(passwordsDoNotMatch && {
                  border: '1px solid',
                  borderColor: 'error.main'
                })}
              />
              <IconInput
                placeholder="Confirm Password"
                  icon={EyeRegisterIconSvg}
                  bgcolor="grey.900"
                  height="44px"
                  borderRadius="8px"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  {...(passwordsDoNotMatch && {
                    border: '1px solid',
                    borderColor: 'error.main'
                })}
              />
              <FlexCenter gap={1}>
                <CheckBoxCustom
                bgcolorCheck="#4A4A4A"
                bgcolorHover="#4A4A4A"
                borderColor="#4A4A4A"
                />
                <Typography variant="h7" fontWeight={500}>Remember me</Typography>
              </FlexCenter>
            </FlexColumn>
            
            <Box 
            sx={{
              typography: 'h5',
              color: '#D9D9D9'
            }}
            >Or select another method</Box>

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

              </FlexColumn>
            </FlexColumn>

          </FlexColumn>

        </FlexColumn>

        <AlreadyHaveAccount
        href="/desktop/access/auth/signup"
        textMain="Don’t have an account yet?"
        textSecondary="Register here"
        />

      </FlexColumn>

    </FlexColumn>
  )
}

export default CardLogin;