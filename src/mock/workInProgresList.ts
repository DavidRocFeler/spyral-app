import { IWorkInProgress } from "@/types/home";
import CoverOne from "@/assets/workProgresPicture1.png"
import CoverTwo from "@/assets/workProgresPicture2.png"
import Profile1 from "@/assets/Ellipse6.png"
import Profile2 from "@/assets/Ellipse7.png"
import Profile3 from "@/assets/Ellipse8.png"

export const workInProgressList: IWorkInProgress[] = [
  {
    id: 1,
    image: CoverOne,
    title: 'Echoes of Twilight',
    createdDate: 'Created 10 Jun 2025',
    collaborators: [
      Profile1,
      Profile2,
      Profile3,
    ]
  },
  {
    id: 2,
    image: CoverTwo,
    title: "I'm Gonna Be (500 miles)",
    createdDate: 'Created 10 Jun 2025',
    collaborators: [
      Profile1,
      Profile2,
      Profile3,
    ]
  }
];
