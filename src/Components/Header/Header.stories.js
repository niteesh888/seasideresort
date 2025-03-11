
import { fn } from "@storybook/test";
import Header from "./Header";





export default {
  component: Header,
  title: 'Header',
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

