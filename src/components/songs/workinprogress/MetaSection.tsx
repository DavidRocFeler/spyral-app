'use client'
import {
  Stack,
} from '@mui/material';
import CardMetaListExpand from './CardMetaListExpand';
import CardMetaMain from './CardMetaMain';
import CardIdentifier from './CardIdentifier';
import DefaultDates from './DefaultDates';
import CardCopyRight from './CardCopyRight';
import CardHenre from './CardGenre';
import CardMetaPromotion from './CardMetaPromotion';
import CardMetaLang from './CardMetaLang';

const MetaSection = ({
}) => {

  return (
    <Stack spacing={2}
    px={4}
    py={3}
    width='100%'
    >
      {/* Tracklist Section */}
      <CardMetaListExpand
      title='Tracklist'
      placeholder='No items added'
      addElse='Add file'
      />

      {/* Artist Section */}
      <CardMetaListExpand
      title='Artist'
      placeholder='No artists added'
      addElse='Add artist'
      />

      {/* Main Section */}
      <CardMetaMain
      tracklistOpen
      />

      {/* Identifier Section */}
      <CardIdentifier/>

      {/* Default dates */}
      <DefaultDates
      consumerReleaseTime='8:42 PM'
      calendarTitle2='Preorder Date'
      />

      {/* release*/}
      <DefaultDates
      title='Release'
      calendarTitle1='Original Release Date'
      recordingYear={2025}
      recordingLocation='Italy'
      />

      <CardCopyRight/>

      <CardHenre/>

      <CardMetaPromotion/>

      <CardMetaLang/>
    </Stack>
  );
};

export default MetaSection;