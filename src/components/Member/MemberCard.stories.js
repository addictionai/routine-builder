import React from 'react';

import MemberCard from './MemberCard';
import * as MemberAvatarStories from './MemberAvatar.stories';

export default {
  title: 'Member/MemberCard',
  component: MemberCard,
  argTypes: {
    size: { 
        options: ['small', 'medium', 'large'],
        control: 'radio' 
    },
  },
};

const Template = (args) => <MemberCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...MemberAvatarStories.Card.args,
  location: 'inRecovery Care',
};

export const Small = Template.bind({});
Small.args = {
  ...MemberAvatarStories.Card.args,
  size: 'small',
}