'use client'
import CollaborateTask from "@/components/songs/Collaborate/CollaborateTask"
import Demo from "@/components/songs/Demo"
import ListButtonsTracking from "@/components/songs/ListButtonsTracking"
import MinimizeDemo from "@/components/songs/MinimizeDemo"
import { commentsMock } from "@/mock/cardComment.mock"
import { mockCollaborateFilesItem } from "@/mock/collaborateFilesItem.mock"
import { mockSharedVersionsState, mockVersionsState } from "@/mock/collaborationState.mock"
import { tasksData } from "@/mock/todoList.mock"
import { Box } from "@mui/material"
import { useState } from "react"

const SongsCollaborateWithState = () => {
  
  const [isDemoMinimized, setIsDemoMinimized] = useState(false)

  const handleToggleDemo = () => {
    setIsDemoMinimized(!isDemoMinimized)
  }

  return (
    <Box display="flex" flexDirection='column' gap={2} py={2} px={4}>
      <ListButtonsTracking />
      
      {isDemoMinimized ? (
        <MinimizeDemo onExpand={handleToggleDemo} />
      ) : (
        <Demo onMinimize={handleToggleDemo} />
      )}
      
      <CollaborateTask
      taskTableData={tasksData}
      cardCommentsData={commentsMock}
      fileItem={mockCollaborateFilesItem}
      latestVersion={mockVersionsState}
      sharedVersion={mockSharedVersionsState}
      />
    </Box>
  )
}

export default SongsCollaborateWithState;
