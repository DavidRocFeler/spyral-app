import { Box, Grid, Typography } from "@mui/material"
import ElectronicCover from '@/assets/coverElectronic.png'
import Image from "next/image"
import { FlexCenter } from "@/components/ui/FlexCenter"
import UserProfile from "@/assets/UserOlivia.png"
import { FlexColumn } from "@/components/ui/FlexColumn"
import IconSpan from "@/components/ui/IconSpan"
import { EditeIconSvg } from "@/assets/icons"
import Summary from "@/components/home/Sumary"
import { artistPageSumaryData } from "@/mock/artistPageSumary.mock"
import JamesArthur from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from "@/mock/collaboratorTrack.mock"
import CardArtistPlayerMusic from "@/components/artist-page/CardArtistPlayerMusic"
import { pictureArtistPage } from "@/mock/artistPagePictures.mock"

const ProfilePage = () => {
  return (
    <Box px={4} pb={4}>
        <Box
        mt={3}
        p={3}
        bgcolor='background.default'
        borderRadius='24px'
        pb={5}
        >
            <Image
                src={ElectronicCover}
                alt="Cover Artis Page"
                height={217}
                style={{
                    width: '100%'
                }}
            />
            <FlexCenter 
            sx={{
                pl: 4,
                gap: 2,
                alignItems: 'flex-start'
            }}
            >
                <Box 
                mt={-9}
                >
                    <Image
                    src={UserProfile}
                    alt="User Profile"
                    height={206}
                    width={206}
                    style={{
                        borderRadius: '100%',
                        border: '8px solid',
                        borderColor: '#000'
                    }}
                    />
                </Box>
                <FlexColumn 
                sx={{
                    ml: 'auto',
                    alignItems: 'flex-start',
                    mt: 2,
                    gap: 2
                }}
                >
                    <FlexCenter gap={1.7}>
                        <Typography variant="h1"> Artist Name </Typography>
                        <IconSpan
                        icon={EditeIconSvg}
                        />
                    </FlexCenter>
                    <FlexCenter gap={1}>
                        <Box
                        bgcolor='#D9D9D9'
                        height='24px'
                        width='24px'
                        borderRadius='50px'
                        />
                        <Box
                        bgcolor='#D9D9D9'
                        height='24px'
                        width='24px'
                        borderRadius='50px'
                        />
                        <Box
                        bgcolor='#D9D9D9'
                        height='24px'
                        width='24px'
                        borderRadius='50px'
                        />
                        <Box
                        bgcolor='#D9D9D9'
                        height='24px'
                        width='24px'
                        borderRadius='50px'
                        />                
                    </FlexCenter>
                    <FlexCenter gap={0}
                    sx={{
                        width: '100%',
                        justifyContent: 'center',
                        pr: 2
                    }}
                    >
                        <Typography mr='auto' variant="h9"
                        width='95%'
                        lineHeight='1rem'
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <IconSpan
                        icon={EditeIconSvg}
                        />
                    </FlexCenter>
                </FlexColumn>
            </FlexCenter>
        </Box>

       <Box
       sx={{
        my: 7,
        width: '85%',
        mx: 'auto'
       }}
       >
        <Grid mb={3} container spacing={3}>
            {artistPageSumaryData.map((item, index) => (
            <Grid size={{xs: 12, md: 3}} key={index}>
                <Summary
                value={item.value}
                subvalue={item.subvalue}
                subtitle={item.subtitle}
                collaborators={item.collaborators}
                />
            </Grid>
            ))}
        </Grid>
       </Box>

       <Box
       sx={{
        my: 7,
        width: '85%',
        mx: 'auto',
       }}
       >
        <Box mb={2}>
            <Typography variant="h8"> Spotlight release </Typography>
        </Box>
        <CardArtistPlayerMusic
        coverImage={JamesArthur}
        artistName="James Arthur"
        songTitle="Say You Won't Let Go"
        collaborators={collaboratorsTrack}
        lastUpdate="11 Jan 2025"
        duration="4:15"
        currentTime="0:00"
        />
       </Box>

       <Box
       bgcolor='background.default'
       p={3}
       borderRadius='24px'
       >
        <FlexCenter
        sx={{
            mb: 4,
            width: '100%'
        }}
        >
            <Typography mr='auto' variant="h4"> From the artist </Typography>
            <Typography variant="h8"> Add </Typography>
        </FlexCenter>
        <Grid container spacing={2}>
        {pictureArtistPage.map((picture) => (
            <Grid size={3} key={picture.id}>
            <Image
                src={picture.image}
                alt={picture.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            </Grid>
        ))}
        </Grid>
       </Box>

       <Box
       sx={{
        my: 7,
        width: '100%',
        mx: 'auto',
       }}
       >
        <Box mb={2}>
            <Typography variant="h8"> All songs</Typography>
        </Box>
        <Box
        mb={2}
        >
            <CardArtistPlayerMusic
            coverImage={JamesArthur}
            artistName="James Arthur"
            songTitle="Say You Won't Let Go"
            collaborators={collaboratorsTrack}
            lastUpdate="11 Jan 2025"
            duration="4:15"
            currentTime="0:00"
            />
        </Box>
        <Box>
            <CardArtistPlayerMusic
            coverImage={JamesArthur}
            artistName="James Arthur"
            songTitle="Say You Won't Let Go"
            collaborators={collaboratorsTrack}
            lastUpdate="11 Jan 2025"
            duration="4:15"
            currentTime="0:00"
            />
        </Box>
       </Box>

       <Box>
            <Typography variant="h3">
            Contacts
            </Typography>
            <FlexColumn my={5} gap={3}
            sx={{
                alignItems: 'flex-start'
            }}
            >
                <Typography variant="h8"> Email address </Typography>
                <Typography variant="h6"> Email address </Typography>
            </FlexColumn>

            <FlexColumn  gap={3}
            sx={{
                alignItems: 'flex-start'
            }}
            >
                <Typography variant="h8"> Citizen service number (BSN) </Typography>
                <Typography variant="h6"> 123456789 </Typography>
            </FlexColumn>
       </Box>

       <FlexColumn mt={10} gap={5}
            sx={{
                alignItems: 'flex-start'
            }}
            >
            <Typography variant="h3"> Metadata </Typography>
            <Typography variant="h8"> Lorem ipsum dolor sit amet consectetur. Consequat viverra cursus lorem massa sagittis gravida vitae ut. </Typography>
        </FlexColumn>

    </Box>
  )
}

export default ProfilePage