
import { fn } from "@storybook/test";
import Gallery from "./Gallery";



export default {
  component: Gallery,
  title: 'Gallerys',
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

