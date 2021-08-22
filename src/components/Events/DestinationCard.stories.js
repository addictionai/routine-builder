import React from 'react'
import DestinationCard from './DestinationCard'
 
export default {
  title: 'Events/DestinationCard',
  component: DestinationCard,
}
 
const Template = (args) => <DestinationCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  destinationType: "Work",
  destination: "212 Marine St",
};