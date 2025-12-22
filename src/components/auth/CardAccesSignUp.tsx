'use client'
import { Box, Typography } from "@mui/material"
import Image, { StaticImageData } from "next/image"
import CreatorPicture from '@/assets/creatorPicture.png'
import { FlexColumn } from "../ui/FlexColumn"
import Link from "next/link"
import { useState } from "react"

export interface ICardAccesSignUpProps {
  image?: StaticImageData;
  alt?: string;
  mainText?: string;
  secondaryText?: string;
  cardType: 'professionalIndustry' | 'creator';
}

const CardAccesSignUp = ({
  image = CreatorPicture,
  mainText = ' Creator',
  secondaryText = 'Artist, Mix/Master Engineer, Producer, etc.',
  alt = 'Creator Artist',
  cardType
}: ICardAccesSignUpProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    localStorage.setItem('userType', cardType);
  };

  return (
    <Link 
      href="/access/auth/signup"
      style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}
      onClick={handleClick}
    >
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Borde gradiente - posición absoluta */}
        <Box
          sx={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: '34px',
            background: 'linear-gradient(135deg, #E2FC0B 5%, #CFCDFF 22%, #E0FC0B 100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
            zIndex: 0,
          }}
        />

        {/* Card principal */}
        <FlexColumn
          bgcolor='background.default'
          pt={3}
          pb={6}
          borderRadius='32px'
          sx={{
            width: '100%',
            position: 'relative',
            zIndex: 1,
            '&:hover': {
              bgcolor: 'grey.900',
            },
          }}
        >
          <Image
            src={image}
            alt={alt}
            priority
            style={{
              width: '243px',
              height: '243px'
            }}
          />
          <Typography
            variant="h1"
            fontWeight={600}
            mb={3}
          >
            {mainText}
          </Typography>
          <Typography
            variant="h8"
          >
            {secondaryText}
          </Typography>
        </FlexColumn>
      </Box>
    </Link>
  );
}

export default CardAccesSignUp;