import React from 'react'
import ActivityCard from './ActivityCard'

export default {
  title: 'Events/ActivityCard',
  component: ActivityCard,
  argTypes: {
    timeStart: {
        control: 'date',
    },
    status: {
        options: ['completed', 'scheduled', 'canceled'],
        control: 'radio',
    },
    category: {
        options: ['call','recovery','personal'],
        control: 'radio',
    },
    avatarSize: {
        options: ['small', 'medium'],
        control: 'radio',
    },  
  },
}
 
const Template = (args) => <ActivityCard {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
    _id: "1", 
    status: "completed", 
    invitedMembers: ['1'],
    category: "personal",
    eventType: "Yoga",
    eventName: "Morning Yoga", 
    timeStart: "2021-08-20T08:30:00",
    showAvatars: true,
}

export const Group = Template.bind({});
Group.args = {
    _id: "1", 
    status: "completed", 
    invitedMembers: ['1', '2'],
    category: "recovery",
    eventType: "12 Step",
    eventName: "AA Meeting", 
    timeStart: "2021-08-20T18:30:00",
    showAvatars: true,
}