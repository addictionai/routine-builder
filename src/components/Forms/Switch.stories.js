import React from 'react'
import Switch from './Switch'
import { useForm } from 'react-hook-form'; 

export default {
  title: 'Forms/Switch',
  component: Switch,
  argTypes: {
  },
}
 
const Template = (args) => {
    const { control } = useForm();
    return <Switch control={control} {...args} />;
} ;
 
export const Primary = Template.bind({});
Primary.args = {
    name: 'input'
}