'use client'
import { useState } from 'react'
import { FlexCenter } from './FlexCenter'
import SearchBar from './SearchBar'
import SelectCustom from './SelectCustom'
import { SearchWhiteIconSvg } from '@/assets/icons'

export interface ISearchDropdownProps {
  placeholder?: string;
}

const SearchBarDropDown = ({
  placeholder = 'Search'
}: ISearchDropdownProps) => {
    const mockFileSelect = ['Sort by', 'Channel', 'Electric', 'Bass Line'];
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <FlexCenter>
    <SearchBar
        icon={SearchWhiteIconSvg}
        width="320px"
        placeholder={placeholder}
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