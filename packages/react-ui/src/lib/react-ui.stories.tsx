import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactUi } from './react-ui';

const Story: ComponentMeta<typeof ReactUi> = {
  component: ReactUi,
  title: 'ReactUi',
};
export default Story;

const Template: ComponentStory<typeof ReactUi> = (args) => (
  <ReactUi {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
