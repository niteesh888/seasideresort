
import { fn } from "@storybook/test";
import Footer from "./Footer";



export default {
  component: Footer,
  title: 'Contact',
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

