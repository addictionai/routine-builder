import React from 'react'
import MinimalCard from './MinimalCard'
 
export default {
  title: 'Events/MinimalCard',
  component: MinimalCard,
  argTypes: {
    timeStart: {
        control: 'date',
    },
  },
}
 
const Template = (args) => <MinimalCard {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
    _id: "1", 
    invitedMembers: ["1"], 
    timeStart: "2022-08-20T12:30:00",
}

export const Group = Template.bind({});
Group.args = {
    _id: "1", 
    invitedMembers: ["1", "2"], 
    timeStart: "2022-08-20T16:30:00",
}