export const carbonHtml = `
<html>
  <head>
    <!-- Carbon stylesheets -->
    <link rel="stylesheet" href="https://unpkg.com/carbon-components/css/carbon-components.min.css">
    </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

export const carbonCode = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import FormTemplate from '@data-driven-forms/carbon-component-mapper/dist/cjs/form-template';
import componentMapper from '@data-driven-forms/carbon-component-mapper/dist/cjs/component-mapper';

import schema from './schema'

class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));`;

export const carbonWizardCode = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import CarbonFormTemplate from '@data-driven-forms/carbon-component-mapper/dist/cjs/form-template';
import componentMapper from '@data-driven-forms/carbon-component-mapper/dist/cjs/component-mapper';

import schema from './schema'

const FormTemplate = (props) => <CarbonFormTemplate {...props} showFormControls={false} />

class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));`;

export const carbonDependencies = {
  react: '^16.12.0',
  'react-dom': '^16.12.0',
  '@data-driven-forms/react-form-renderer': 'latest',
  '@data-driven-forms/carbon-component-mapper': 'latest',
  '@carbon/icons-react': 'latest',
  'carbon-components': 'latest',
  'carbon-components-react': 'latest',
  'carbon-icons': 'latest',
  'prop-types': 'latest'
};
