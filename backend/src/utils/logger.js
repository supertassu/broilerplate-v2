import Logger from '@itassu/log';
import {pointerSmall} from 'figures';

const logger = new Logger();

logger.addLogger('note', {
	styling: [
		{
			text: () => `[${new Date().toLocaleTimeString()}]`,
			styles: 'grey'
		},
		{
			text: '!',
			styles: 'yellow'
		},
		{
			text: pointerSmall,
			styles: 'grey'
		}
	]
});

logger.addLogger('pending', {
	styling: [
		{
			text: () => `[${new Date().toLocaleTimeString()}]`,
			styles: 'grey'
		},
		{
			text: 'pending ',
			styles: ['yellow', 'underline']
		},
		{
			text: pointerSmall,
			styles: 'grey'
		}
	]
});

logger.addLogger('complete', {
	styling: [
		{
			text: () => `[${new Date().toLocaleTimeString()}]`,
			styles: 'grey'
		},
		{
			text: 'complete',
			styles: ['green', 'underline']
		},
		{
			text: pointerSmall,
			styles: 'grey'
		}
	]
});

logger.log('note', 'Hello!');

export default logger;
