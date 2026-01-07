import { PadLockIcon } from "@/assets/icons"
import CustomTextField from "@/components/ui/CustomTextField"
import { FlexColumn } from "@/components/ui/FlexColumn"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import { Box, Typography } from "@mui/material"

const SongsSegurity = () => {

  return (
       <Box 
       pr={4}
       >
        <Box mb={4} mt={3}>
          <Typography variant="h3">
            Segurity
          </Typography>
        </Box>

        <FlexColumn
        sx={{
            width: '70%',
            alignItems: 'flex-start',
            gap: 3
        }}
        >
            <FlexColumn
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 1
            }}
            >
              <Typography variant="h8">Current password</Typography>
              <CustomTextField
              placeholderWhite="***********"
              />
            </FlexColumn>
            <FlexColumn
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 1
            }}
            >
              <Typography variant="h8">Change password</Typography>
              <CustomTextField
              placeholderWhite="Enter new password"
              placeholderColor="text.secondary"
              />
            </FlexColumn>
            <FlexColumn
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 1
            }}
            >
              <Typography variant="h8">Confirm new password</Typography>
              <CustomTextField
              placeholderWhite="Enter new password again"
              placeholderColor="text.secondary"
              />
            </FlexColumn>

        </FlexColumn>

        <Box
        my={6}
        >
          <PrimaryButton
          text="Save Setting"
          height="43px"
          />
        </Box>

        <FlexColumn
        gap={3}
        sx={{
          alignItems: 'flex-start'
        }}
        >
          <Typography variant="h3"> Authentication 2FA </Typography>
          <SecondaryButton
          flexDirection="row-reverse"
          icon={PadLockIcon}
          text="Add 2FA Authentication"
          height="48px"
          bgcolor='grey.900'
          />
        </FlexColumn>
       </Box>
  )
}

export default SongsSegurity;