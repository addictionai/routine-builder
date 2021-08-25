import { memberData, staffData } from './data/members';
import { title as routineTitle, events as routineEvents } from './data/dataRoutines';
import { title as transportTitle , events as transportEvents } from './data/dataTransport';

export const userData = {
    members: memberData,
    staff: staffData,
};

export const config = {
    'routine': {
      title: routineTitle,
      data: routineEvents,
      eventType: 'activity',
    },
    'transport': {
      title: transportTitle,
      data: transportEvents,
      eventType: 'request',
    },
  };