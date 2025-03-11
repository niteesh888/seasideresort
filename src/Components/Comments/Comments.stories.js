
import { fn } from "@storybook/test";
import Comments from "./Comments";



export default {
  component: Comments,
  title: 'Comments',
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

