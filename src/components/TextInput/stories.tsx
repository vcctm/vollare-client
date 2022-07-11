import { Story, Meta } from "@storybook/react";
import TextInput from '.'

export default {
  title: 'TextInput',
  component: TextInput
} as Meta

export const Default: Story = () => <TextInput label="TextField" variant="outlined" />
