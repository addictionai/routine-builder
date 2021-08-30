import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'; 

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
  },
}
 
const Template = (args) => {
    const { control } = useForm();
    return <Input control={control} {...args} />;
} ;
 
export const Primary = Template.bind({});
Primary.args = {
    name: 'input'
}