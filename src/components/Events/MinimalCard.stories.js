import React from 'react'
import MinimalCard from './MinimalCard'
 
export default {
  title: 'MinimalCard',
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
    memberId: "1", 
    timeStart: "2022-08-20T12:30:00",
}