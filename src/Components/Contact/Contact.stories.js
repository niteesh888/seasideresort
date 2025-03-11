
import { fn } from "@storybook/test";
import Contact from "./Contact";



export default {
  component: Contact,
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

