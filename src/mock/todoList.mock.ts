import { ITaskTableProps } from "@/types/song";

export const tasksData: ITaskTableProps[] = [
  {
    id: '1',
    task: 'Enter Task',
    addedBy: 'You',
    date: '4 Oct',
    status: 'not-started'
  },
  {
    id: '2',
    task: 'Finalize Intro',
    addedBy: 'Elowen Davies',
    date: '12 Sep',
    status: 'finished'
  },
  {
    id: '3',
    task: 'Draft Chorus',
    addedBy: 'You',
    date: '15 Sep',
    status: 'not-started'
  },
  {
    id: '4',
    task: 'Complete Bridge',
    addedBy: 'Sophie Turner',
    date: '18 Sep',
    status: 'pending'
  }
];


export const tasksDataEmpty: ITaskTableProps[] = [
  ];