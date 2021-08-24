import React from 'react'
import DateSelect from './DateSelect'
 
export default {
  title: 'Routines/DateSelect',
  component: DateSelect,
  argTypes: {
    start: {
        control: 'date',
    },
  },
}
 
const Template = (args) => <DateSelect {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
    start: '2021-08-23T12:00:00',
    showDateRange: true,
    showNavScroll: true,
    showNavToday: true,
}
