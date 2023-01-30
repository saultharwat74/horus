import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UseToggle } from '../components';
const Story: ComponentMeta<typeof UseToggle> = {
  component: UseToggle,
  title: 'Hooks',
  
};
export default Story;

const Template: ComponentStory<typeof UseToggle> = (args) => (
  <UseToggle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
