import ReactOnRails from 'react-on-rails';
import TodoApp from './TodoAppClient';

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ TodoApp });
