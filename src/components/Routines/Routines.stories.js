import React from 'react'
import Routines from './Routines'

// Data
import { events as routineEvents } from '../../data/dataRoutines';
import { events as transportEvents } from '../../data/dataTransport';
import { startDate } from './../../helpers/dateHelpers';

const start = '2021-08-23';
 
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
      workweek: false,
    },
}

export const Transport = Template.bind({});
Transport.args = {
    setup: 'transport',
    data: transportEvents,
    eventType: 'request',
    range: {
      startDate: startDate(start),
      workweek: false,
    },
}