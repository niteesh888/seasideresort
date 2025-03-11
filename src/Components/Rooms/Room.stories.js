
import { fn } from "@storybook/test";
import Room from "./Room";



export default {
  component: Room,
  title: 'Rooms',
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

