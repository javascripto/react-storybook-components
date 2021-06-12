import { Story, Meta } from '@storybook/react';
import {
  LoadingSpinner,
  LoadingSpinnerProps,
} from '../components/LoadingSpinner';

export default {
  title: 'components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    color: { control: 'color' },
    accentColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  speed: '0.6s',
  size: 'md',
};
