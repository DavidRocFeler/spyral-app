import { Box } from '@mui/material'
import Collaborators from '../ui/Collaborators'
import { ICollaboratorsProps } from '@/types/ui'

export interface IColaboratorsTrackProps {
  collaborators: ICollaboratorsProps[]
  width?: number,
  height?: number
}

const CollaboratorTrack = ({
  collaborators,
  width,
  height
}: IColaboratorsTrackProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 0.5,
        alignItems: 'center',
        pb: 0
      }}
    >
      {collaborators.map((collaborator) => (
        <Box
          key={collaborator.id}
        >
          <Collaborators
            {...collaborator}
            width={width}
            height={height}
          />
        </Box>
      ))}
    </Box>
  )
}

export default CollaboratorTrack