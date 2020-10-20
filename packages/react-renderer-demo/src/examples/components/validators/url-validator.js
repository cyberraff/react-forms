import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/dist/cjs/validator-types';
import FormTemplate from '@data-driven-forms/mui-component-mapper/dist/cjs/form-template';
import TextField from '@data-driven-forms/mui-component-mapper/dist/cjs/text-field';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField
};
const schema = {
  title: 'Start typing',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'default-config',
      label: 'Default validator',
      helperText: 'type some address like: https://data-driven-forms.org/',
      validate: [
        {
          type: validatorTypes.URL
        }
      ]
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'protocol-config',
      label: 'Custom protocol',
      helperText: 'type some address with custom ddf protocol like: ddf://data-driven-forms.org/',
      validate: [
        {
          type: validatorTypes.URL,
          protocol: 'ddf'
        }
      ]
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'without-config',
      label: 'Without protocol',
      helperText: 'type some address with like: data-driven-forms.org/',
      validate: [
        {
          type: validatorTypes.URL,
          protocolIdentifier: false
        }
      ]
    }
  ]
};

const UrlValidators = () => (
  <div>
    <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
  </div>
);

export default UrlValidators;
