interface paragraph {
    label: string;
    inputType: 'text' | 'select' | 'radio';
    options?: string[];
    half?: boolean
  }

const paragraph1: paragraph[][] = [
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
    }],
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

export default paragraph1;