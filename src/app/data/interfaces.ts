export interface PageInterface {
  name: string
  url: string
  contents: ContentInterface[]
}

export interface ContentInterface {
  title: string
  inputForms?: InputFormInterface[][]
  tableForms?: any
}

export interface InputFormInterface {
  label: string
  inputType: 'text' | 'select' | 'radio'
  options?: string[]
}
