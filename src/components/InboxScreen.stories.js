import React from 'react';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';

import { action } from '@storybook/addon-actions';

import * as TaskListStories from './TaskList.stories';

// A super-simple mock of a rudux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};