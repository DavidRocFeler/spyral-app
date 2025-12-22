


'use client'
import CollaborateTask from "@/components/songs/Collaborate/CollaborateTask"
import Demo from "@/components/songs/Demo"
import ListButtonsTracking from "@/components/songs/ListButtonsTracking"
import MinimizeDemo from "@/components/songs/MinimizeDemo"
import { commentsEmpty } from "@/mock/cardComment.mock"
import { mockCollaborateFilesItemEmpty } from "@/mock/collaborateFilesItem.mock"
import { mockSharedVersions, mockVersions } from "@/mock/collaborationEmptyState.mock"
import { tasksDataEmpty } from "@/mock/todoList.mock"
import { Box } from "@mui/material"
import { useState } from "react"

const SongsCollaborate = () => {
  const [isDemoMinimized, setIsDemoMinimized] = useState(false)

  const handleToggleDemo = () => {
    setIsDemoMinimized(!isDemoMinimized)
  }

  return (
    <Box display="flex" flexDirection='column' gap={2} py={2} px={4}>
      <ListButtonsTracking trackingStatus={2} />
      
      {isDemoMinimized ? (
        <MinimizeDemo onExpand={handleToggleDemo} />
      ) : (
        <Demo onMinimize={handleToggleDemo} />
      )}
      
      <CollaborateTask
      taskTableData={tasksDataEmpty}
      cardCommentsData={commentsEmpty}
      fileItem={mockCollaborateFilesItemEmpty}
      latestVersion={mockVersions}
      sharedVersion={mockSharedVersions}
      />
    </Box>
  )
}

export default SongsCollaborate;