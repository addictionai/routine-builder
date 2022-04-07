import React from 'react'
import DayView from './DayView'
 
export default {
  title: 'Schedule/DayView',
  component: DayView,
  argTypes: {
    date: {
        control: 'date',
    },
  },
}
 
const Template = (args) => <DayView {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
    date: '2021-08-23T12:00:00',
    // showDateRange: true,
    // showNavScroll: true,
    // showNavToday: true,
}
