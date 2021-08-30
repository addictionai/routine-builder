import React from 'react'
import Textarea from './Textarea'
import { useForm } from 'react-hook-form'; 

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
  },
}
 
const Template = (args) => {
    const { control } = useForm();
    return <Textarea control={control} {...args} />;
} ;
 
export const Primary = Template.bind({});
Primary.args = {
    name: 'input'
}