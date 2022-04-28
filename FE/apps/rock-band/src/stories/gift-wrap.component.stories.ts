import { GiftWrapComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';

export default {
	title: 'GiftWrapComponent',
	component: GiftWrapComponent,
	argTypes: {},
} as Meta;
const Template: Story<GiftWrapComponent> = (args: GiftWrapComponent) => ({
	component: GiftWrapComponent,
	props: args,
});
export const giftWrapComponent = Template.bind({});
