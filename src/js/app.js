/* eslint-disable no-new */
import CallbackChatWidget from './CallbackChatWidget';
import CollapseWidget from './CollapseWidget';

document.addEventListener('DOMContentLoaded', () => {
  new CollapseWidget();
  new CallbackChatWidget();
});
