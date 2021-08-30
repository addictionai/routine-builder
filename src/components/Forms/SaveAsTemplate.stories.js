import React from 'react'
import SaveAsTemplate from './SaveAsTemplate'
 
export default {
  title: 'Forms/SaveAsTemplate',
  component: SaveAsTemplate,
  argTypes: {
  },
}
 
const Template = (args) => <SaveAsTemplate {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
}