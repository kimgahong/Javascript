// when using ES6 import / npm
import ScrollTrigger from '@terwanerik/scrolltrigger'
// Create a new ScrollTrigger instance with default options
const trigger = new ScrollTrigger.default() // When not using npm, create a new instance with 'new ScrollTrigger.default()'
// Add all html elements with attribute data-trigger
trigger.add('[data-trigger]')
