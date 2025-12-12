'use client'
import { useState } from 'react'
import { FlexCenter } from './FlexCenter'
import SearchBar from './SearchBar'
import SelectCustom from './SelectCustom'
import { SearchWhiteIconSvg } from '@/assets/icons'

const mockFileSelect = ['Sort by', 'Channel', 'Electric', 'Bass Line'];

const SearchBarDropDown = () => {
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <FlexCenter>
    <SearchBar
        icon={SearchWhiteIconSvg}
        width="320px"
        placeholder='Search'
    />
    <SelectCustom
        bgcolor='tramsparent'
        fullWidth={false}
        options={mockFileSelect}
        value={selectedChannel}
        onChange={setSelectedChannel}
    />
    </FlexCenter>
  )
}

export default SearchBarDropDown