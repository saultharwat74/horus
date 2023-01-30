import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hooks } from './hooks';

const Story: ComponentMeta<typeof Hooks> = {
  component: Hooks,
  title: 'Hooks',
};
export default Story;

const Template: ComponentStory<typeof Hooks> = (args) => <Hooks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
