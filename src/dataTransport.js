import { nanoid } from 'nanoid'

export const title = "Transport Requests";

export const memberData = [
    {
        _id: '1',
        firstName: 'Sarah',
        lastName: 'Patterson',
        photo: 'https://images.generated.photos/Inn80-M6d9fftSJoxz566QvS9ppXtofF1lQe7aJZvDU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA0MzI3LmpwZw.jpg',
        location: 'Sana Lake Housing',
    },
    {
        _id: '2',
        firstName: 'Parker',
        lastName: 'Williams',
        photo: 'https://images.generated.photos/5l8YXV-c-CCEquZ3DCaU0JaO-mVJZAhq8YZzFROH9TQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2NzQyLmpwZw.jpg',
        location: 'Sana Lake Housing',
    },
    {
        _id: '3',
        firstName: 'Sammy',
        lastName: 'Davis',
        photo: 'https://images.generated.photos/iAoKYM0ch2fpvHJl3-yNnijrGka2uLgHjw_2fS9KgmQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMyMDk5LmpwZw.jpg',
        location: 'Sana Lake Housing',
    },

]

export const staffData = [
    {
        _id: '1',
        firstName: 'James',
        lastName: 'Orwell',
        photo: 'https://images.generated.photos/rw5qAl3iwycYSaxoAwsLrp1df492NpzplXhHvfg2xyY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA3NTA1LmpwZw.jpg',
    },
    {
        _id: '2',
        firstName: 'Laura',
        lastName: 'Carlton',
        photo: 'https://images.generated.photos/eaIbdNQBZF-DNoLuaMGJumpRHXZZSpcSX5S1BpkH2m8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA3MTI4LmpwZw.jpg',
    }
];


export const events = [
    {
      _id: nanoid(10),
      status: 'completed',
      memberId: '1',
      staffId: '1',
      destinationType: 'Work',
      destination: 'Starbucks',
      timeStart: '2021-08-16T08:30:00',
    },
    {
      _id: nanoid(10),
      status: 'completed',
      memberId: '3',
      staffId: '2',
      destinationType: 'Work',
      destination: '1010 Wilshire',
      timeStart: '2021-08-16T14:30:00',
    },
    {
      _id: nanoid(10),
      status: 'assigned',
      memberId: '2',
      staffId: '1',
      destinationType: 'Shop',
      destination: 'Apple Store',
      timeStart: '2021-08-16T14:00:00',
    },    
    {
      _id: nanoid(10),
      status: 'denied',
      memberId: '3',
      staffId: '2',
      destinationType: 'Shop',
      destination: 'Main St Deli',
      timeStart: '2021-08-16T09:30:00',
    },
    {
      _id: nanoid(10),
      status: 'completed',
      memberId: '1',
      staffId: '2',
      destinationType: 'Gym',
      destination: 'Equinox',
      timeStart: '2021-08-18T18:45:00',
    },
    {
      _id: nanoid(10),
      status: 'assigned',
      memberId: '3',
      staffId: '1',
      destinationType: 'AA',
      destination: 'The Retreat',
      timeStart: '2021-08-17T13:30:00',
    },
    {
      _id: nanoid(10),
      status: 'assigned',
      memberId: '2',
      staffId: '2',
      destinationType: 'Work',
      destination: '212 Main St',
      timeStart: '2021-08-18T07:00:00',
    },
    {
      _id: nanoid(10),
      status: 'assigned',
      memberId: '2',
      staffId: '2',
      destinationType: 'AA',
      destination: 'The Retreat',
      timeStart: '2021-08-21T07:00:00',
    },
    {
      _id: nanoid(10),
      status: 'assigned',
      memberId: '1',
      staffId: '2',
      destinationType: 'AA',
      destination: 'Trinity Church',
      timeStart: '2021-08-20T17:00:00',
    },
  ]