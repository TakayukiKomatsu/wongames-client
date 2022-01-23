import Logo, { LogoProps } from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
