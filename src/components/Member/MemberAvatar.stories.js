import React from 'react';

import MemberAvatar from './MemberAvatar';

export default {
  title: 'Member/MemberAvatar',
  component: MemberAvatar,
  argTypes: {
    size: { 
        options: ['small', 'medium', 'large'],
        control: 'radio' 
    },
  },
};

const Template = (args) => <MemberAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  photo: 'https://images.generated.photos/5l8YXV-c-CCEquZ3DCaU0JaO-mVJZAhq8YZzFROH9TQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2NzQyLmpwZw.jpg',
  firstName: 'John',
  lastName: 'Snow',
};

export const Card = Template.bind({});
Card.args = {
    size: 'medium',
    photo: 'https://images.generated.photos/Inn80-M6d9fftSJoxz566QvS9ppXtofF1lQe7aJZvDU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA0MzI3LmpwZw.jpg',
    firstName: 'Sarah',
    lastName: 'Patterson',
}