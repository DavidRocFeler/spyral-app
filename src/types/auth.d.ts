import { ComponentType } from "react";

export interface IHaveAnAccountProps {
    textMain?: string;
    textSecondary?: string;
    href?: string;
  }

  export interface ICardAccesSignUpProps {
    image?: StaticImageData;
    alt?: string;
    mainText?: string;
    secondaryText?: string;
    cardType: 'professionalIndustry' | 'creator';
  }

  export interface ICardAuthThirdProps {
    icon?: ComponentType;
    text?: string;
  }