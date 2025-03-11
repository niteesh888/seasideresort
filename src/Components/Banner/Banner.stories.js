
import { fn } from "@storybook/test";
import Banner from "./Banner";



export default {
  component: Banner,
  title: 'Banner',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};
