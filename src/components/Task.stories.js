import React from 'react';

import Task from './Task';

export default {
    component: Task,
    title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};

const longTitleString = `We can put a whole lot of text in here to see what will happen to the UI if a task item has a longer label than we had initially intended or expected anyone to use`
export const LongTitle = Template.bind({});
LongTitle.args = {
    task: {
        ...Default.args.task,
        title: longTitleString,
    },
};
