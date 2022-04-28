import { NavbarComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';

export default {
	title: 'NavbarComponent',
	component: NavbarComponent,
	argTypes: {},
} as Meta;
const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
	component: NavbarComponent,
	props: args,
});
export const navbarComponent = Template.bind({});
