import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useMentorStore = create()(
  devtools((set) => ({
    mentorData: [],
    setMentorData: (mentors) => set(() => ({ mentorData: mentors })),
  }))
);

export default useMentorStore;
