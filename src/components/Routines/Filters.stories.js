import React, {useContext} from 'react'
import Filters from './Filters'
import { RoutineContext } from '../../context/RoutineContext';

export default {
  title: 'Routines/Filters',
  component: Filters,
  argTypes: {
    setup: {
        options: ['routine', 'transport'],
        control: 'radio'
    }
  },
  decorators: [StoryFn => {
    return (<RoutineContext.Provider value={{setup: 'routine'}}><StoryFn /></RoutineContext.Provider>)
  }]
}
 
const Template = (args) => <Filters {...args} />;
 
export const Routines = Template.bind({});
Routines.args = {
    setup: 'routine'
}

export const Transport = Template.bind({});
Transport.args = {
    setup: 'transport'
}