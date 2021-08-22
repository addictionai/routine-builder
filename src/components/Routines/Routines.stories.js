import React from 'react'
import Routines from './Routines'

// Data
import { events as routineEvents } from '../../data';
import { events as transportEvents } from '../../dataTransport';
import { startDate, endDate } from './../../helpers/dateHelpers';

const start = Date.now();
 
export default {
  title: 'Routines/Builder',
  component: Routines,
  argTypes: {
      setup: {
          options: ['routine', 'transport'],
          control: 'radio',
      },
      eventType: {
          options: ['activity', 'request'],
          control: 'radio',
      },
  },
}
 
const Template = (args) => <Routines {...args} />;
 
export const Routine = Template.bind({});
Routine.args = {
    setup: 'routine',
    data: routineEvents,
    eventType: 'activity',
    range: {
      startDate: startDate(start),
      endDate: endDate(start),
    },
}

export const Transport = Template.bind({});
Transport.args = {
    setup: 'transport',
    data: transportEvents,
    eventType: 'request',
    range: {
      startDate: startDate(start),
      endDate: endDate(start),
    },
}