import { Story, Meta } from '@storybook/react';
import { LoadingSpinner, LoadingSpinnerProps } from '../components';

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  speed: '0.6s',
  size: 'md',
};

export const Sample: Story<LoadingSpinnerProps> = (args) => {
  return (
    <div
      style={{
        gap: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <LoadingSpinner {...args} size="xs" />
      <LoadingSpinner {...args} size="sm" />
      <LoadingSpinner {...args} size="md" />
      <LoadingSpinner {...args} size="lg" />
      <LoadingSpinner {...args} size="xl" />
    </div>
  );
};

Sample.args = {
  speed: '1.5s',
};

Sample.storyName = 'Todos os tamanhos';

export default {
  title: 'components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    color: { control: 'color' },
    accentColor: { control: 'color' },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    speed: {
      control: 'inline-radio',
      options: ['0.6s', '1s', '1.5s'],
    },
    as: { name: '', control: { type: null } },
    ref: { name: '', control: { type: null } },
    theme: { name: '', control: { type: null } },
    forwardedAs: { name: '', control: { type: null } },
  },
} as Meta;
