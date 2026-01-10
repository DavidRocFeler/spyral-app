'use client'
import { EyeRegisterIconSvg, LogoTypography } from "@/assets/icons"
import { FlexColumn } from "../ui/FlexColumn"
import { Box, Typography } from "@mui/material"
import IconInput from "../ui/IconInput"
import AlreadyHaveAccount from "./AlreadyHaveAccount"
import { useState } from "react"
import GrandiantButton from "../ui/GrandiantButton"

const EmailSignUp = () => {
  const [email, setEmail] = useState('');
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
          pt={5}
          pb={3}
          bgcolor='background.default'
          borderRadius='20px'
        >
          <FlexColumn gap={4.5}>
            <FlexColumn gap={2.5}>
              <Typography variant="h1">
                Welcome to Spyral
              </Typography>
              <Typography variant="h5" fontSize='18px'>
                Continue with your email
              </Typography>
            </FlexColumn>
            <FlexColumn gap={1.5}>
              <FlexColumn gap={1.5}>
                <IconInput
                  placeholder="Email"
                  bgcolor="grey.900"
                  height="44px"
                  borderRadius="8px"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <IconInput
                  placeholder="Password"
                  icon={EyeRegisterIconSvg}
                  bgcolor="grey.900"
                  height="44px"
                  borderRadius="8px"
                  type="password"
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
              </FlexColumn>
              <FlexColumn mt={3} gap={4}>
                <Typography variant="h5">
                  Or select another method
                </Typography>
                <FlexColumn>
                  <GrandiantButton/>
                  {passwordsDoNotMatch && (
                    <Box
                      mt={2}
                      sx={{
                        color: 'error.main',
                        typography: 'h5'
                      }}
                    >
                      The passwords don't match
                    </Box>
                  )}
                </FlexColumn>
              </FlexColumn>
            </FlexColumn>
          </FlexColumn>
        </FlexColumn>
        
        <AlreadyHaveAccount/>
      </FlexColumn>
    </FlexColumn>
  )
}

export default EmailSignUp