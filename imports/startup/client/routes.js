import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter'

import MyApp from '/imports/views/app/MyApp.jsx';
import NotFound from '/imports/views/pages/NotFound.jsx';


FlowRouter.route('/', {
  action: function() {
    mount(MyApp);
  }
});

FlowRouter.notFound = {
  action: function() {
    mount(NotFound);
  }
};
