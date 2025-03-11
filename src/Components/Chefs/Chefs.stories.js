
import { fn } from "@storybook/test";
import Chefs from "./Chefs";



export default {
  component: Chefs,
  title: 'Chefs',
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

