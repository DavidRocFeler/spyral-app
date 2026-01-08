import { LogoTypography } from "@/assets/icons"
import CardAccesSignUp from "@/components/auth/CardAccesSignUp"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { Typography } from "@mui/material"
import ProfessionalAcces from "@/assets/professionalIndustryPicture.png"
import AlreadyHaveAccount from "@/components/auth/AlreadyHaveAccount"

const Access = () => {
  return (
     <FlexColumn
     px={15}
     py={5}
     sx={{
      width: '100%',
      gap: 4
     }}
     >
       <LogoTypography/>

      <FlexColumn mt={2} gap={3}>
        <Typography variant="h1"
        fontSize='40px'
        >
          Get access to Spyral
        </Typography>

        <Typography variant="h5"
        fontSize='20px'
        >
          First, tell us who you are.
        </Typography>
      </FlexColumn>

       <FlexCenter
       mt={2}
       sx={{
        width: '100%',
        gap: 5,
        mb: 4
       }}
       >
          <CardAccesSignUp
          cardType="creator"
          />
          <CardAccesSignUp
          image={ProfessionalAcces}
          mainText="Industry Professional"
          secondaryText="Label, Publisher, A&R, Sync, Manager, etc."
          cardType="professionalIndustry"
          />
       </FlexCenter>
       <AlreadyHaveAccount/>
     </FlexColumn>
  )
}

export default Access;