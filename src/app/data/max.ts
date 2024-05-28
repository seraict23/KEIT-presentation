import { PageInterface } from './interfaces'

const max: PageInterface[] = [
    {
      name: "page1",
      url: "url1",
      contents: [
        {
          title: "page1-1",
          inputForms: [
            [{
              label: 'textLabel1',
              inputType: 'text',
            }],
            [{
                label: 'textLabel2',
                inputType: 'text',
              },
              {
                label: 'textLabel3',
                inputType: 'text',
              }
            ],
            [{
              label: 'selectLabel',
              inputType: 'select',
              options: ['Select1', 'Select2', 'Select3'],
            }],
            [{
              label: 'radioLabel',
              inputType: 'radio',
              options: ['Radio 1', 'Radio 2', 'Radio 3']
            }]
          ]
        },

        {
          title: "page1-2",
          inputForms: [
            [{
              label: 'textLabel1-2',
              inputType: 'text',
            }],
            [{
                label: 'textLabel2-2',
                inputType: 'text',
              },
              {
                label: 'textLabel3-2',
                inputType: 'text',
              }
            ]
          ]
        }
      ]
    },
    {
      name: "page2",
      url: "url2",
      contents: [
        {
          title: "page2-1",
          inputForms: [
            
            [{
              label: 'textLabel12',
              inputType: 'text',
            }],
            [{
                label: 'textLabel22',
                inputType: 'text',
              },
              {
                label: 'textLabel32',
                inputType: 'text',
              }],
            [{
              label: 'selectLabel2',
              inputType: 'select',
              options: ['Select1', 'Select2', 'Select3'],
            }],
            [{
              label: 'radioLabel2',
              inputType: 'radio',
              options: ['Radio 1', 'Radio 2', 'Radio 3']
            }]
          ]
        }
      ]
    }
  ]

export default max;