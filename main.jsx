import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../imports/ui/App';


const rootElement1 = document.getElementById('root');
const root1 = createRoot(rootElement1);

root1.render(<App />);

