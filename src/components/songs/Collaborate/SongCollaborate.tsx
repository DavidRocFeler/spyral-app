'use client'
import CollaborateTask from "@/components/songs/Collaborate/CollaborateTask"
import { commentsEmpty } from "@/mock/cardComment.mock"
import { mockCollaborateFilesItemEmpty } from "@/mock/collaborateFilesItem.mock"
import { mockSharedVersions, mockVersions } from "@/mock/collaborationEmptyState.mock"
import { tasksDataEmpty } from "@/mock/todoList.mock"

const SongsCollaborate = () => {
  return (
    <CollaborateTask
      taskTableData={tasksDataEmpty}
      cardCommentsData={commentsEmpty}
      fileItem={mockCollaborateFilesItemEmpty}
      latestVersion={mockVersions}
      sharedVersion={mockSharedVersions}
    />
  )
}

export default SongsCollaborate