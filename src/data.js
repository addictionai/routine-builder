import { nanoid } from 'nanoid'

export const title = "Weekly Routine";

export const memberData = [
    {
        _id: '1',
        firstName: 'Sarah',
        lastName: 'Patterson',
        photo: 'https://images.generated.photos/Inn80-M6d9fftSJoxz566QvS9ppXtofF1lQe7aJZvDU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA0MzI3LmpwZw.jpg',
        location: 'Sana Housing',
    },
    {
        _id: '2',
        firstName: 'Parker',
        lastName: 'Williams',
        photo: 'https://images.generated.photos/5l8YXV-c-CCEquZ3DCaU0JaO-mVJZAhq8YZzFROH9TQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2NzQyLmpwZw.jpg',
        location: 'Sana IOP',
    },
    {
        _id: '3',
        firstName: 'Sammy',
        lastName: 'Davis',
        photo: 'https://images.generated.photos/iAoKYM0ch2fpvHJl3-yNnijrGka2uLgHjw_2fS9KgmQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMyMDk5LmpwZw.jpg',
        location: 'Sana Housing',
    },
];

export const staffData = [
    {
        _id: '1',
        status: 'active',
        firstName: 'James',
        lastName: 'Orwell',
        photo: 'https://images.generated.photos/rw5qAl3iwycYSaxoAwsLrp1df492NpzplXhHvfg2xyY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA3NTA1LmpwZw.jpg',
    },
    {
        _id: '2',
        status: 'active',
        firstName: 'Laura',
        lastName: 'Carlton',
        photo: 'https://images.generated.photos/eaIbdNQBZF-DNoLuaMGJumpRHXZZSpcSX5S1BpkH2m8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA3MTI4LmpwZw.jpg',
    },
    {
      _id: '3',
      status: 'disabled',
      firstName: 'Jimmy',
      lastName: 'Joe',
      photo: 'https://images.generated.photos/iAoKYM0ch2fpvHJl3-yNnijrGka2uLgHjw_2fS9KgmQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMyMDk5LmpwZw.jpg',
    }
];


export const events = [
    {
      _id: nanoid(10),
      status: 'completed',
      memberId: '1',
      hostId: '1',
      category: 'call',
      eventType: 'Call',
      eventName: '1-on-1 Session',
      timeStart: '2021-08-23T08:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '3',
      hostId: '2',
      category: 'recovery',
      eventType: '12 Step',
      eventName: 'AA Meeting',
      timeStart: '2021-08-23T16:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '3',
      hostId: '1',
      category: 'personal',
      eventType: 'Yoga',
      eventName: 'Morning Yoga',
      timeStart: '2021-08-24T08:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '1',
      hostId: '2',
      category: 'personal',
      eventType: 'Gym',
      eventName: 'Evening Workout',
      timeStart: '2021-08-24T20:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '3',
      hostId: '2',
      category: 'recovery',
      eventType: '12 Step',
      eventName: 'AA Meeting',
      timeStart: '2021-08-24T10:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '2',
      hostId: '2',
      category: 'recovery',
      eventType: 'Therapy',
      eventName: 'Dr. Kripke, MD',
      timeStart: '2021-08-26T12:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '3',
      hostId: '1',
      category: 'personal',
      eventType: 'Yoga',
      eventName: 'Morning Yoga',
      timeStart: '2021-08-27T08:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '3',
      hostId: '2',
      category: 'recovery',
      eventType: '12 Step',
      eventName: 'AA Meeting',
      timeStart: '2021-08-27T20:30:00',
    },
    {
      _id: nanoid(10),
      status: 'scheduled',
      memberId: '1',
      driverId: '2',
      category: 'personal',
      eventType: 'Spiritual',
      eventName: 'Chuch Group',
      timeStart: '2021-08-28T13:30:00',
    },
  ];