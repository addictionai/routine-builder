import React from 'react'
import RequestCard from './RequestCard'
import * as DestinationCardStories from './DestinationCard.stories'
 
export default {
  title: 'Events/RequestCard',
  component: RequestCard,
  argTypes: {
      status: {
          options: ['completed', 'assigned', 'denied', 'missed'],
          control: 'radio',
      },
      timeStart: {
          control: 'date',
      },
      memberId: {
        options: ['1','2','3'],
        control: 'radio',
      },
      staffId: {
          options: ['1','2'],
          control: 'radio',
      }
  },
}
 
const Template = (args) => <RequestCard {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
    _id: "1", 
    memberId: "1", 
    staffId: "2",
    status: "completed",
    timeStart: "2022-08-20T12:30:00",
    ...DestinationCardStories.Primary.args,
}