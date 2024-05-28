import clsx from 'clsx';
import {CheckCircleIcon, ViewfinderCircleIcon} from '@heroicons/react/20/solid'

interface InputBoxProps {
  label: string;
  inputType: 'text' | 'select' | 'radio';
  options?: string[]; // inputType이 'select'일 때 사용
  value: string;
  onChange: (value: string) => void;
  half?: boolean;
}

export default function InputBox({label, inputType, options = [], value, onChange, half}: InputBoxProps) {

  const cover_css: string = half ? "grid grid-cols-4 divide-x divide-black divide-dotted w-1/2 items-center" : "grid grid-cols-8 divide-x divide-black divide-dotted items-center" 
  const label_css: string = "col-span-1 p-2 font-semibold text-sm"
  const content_css: string = half ? "col-span-3 p-2" : "col-span-7 p-2"

  const label_color: string = "bg-[beige]"

  switch(inputType) {
    case 'text' :
      return (
        <div className={cover_css}>
          <div className={label_css + " " +label_color}>{label}</div>
          <input 
            className={content_css}
            type="text" 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
          />
        </div>
      )
    case 'select' :  
      return (
        <div className={cover_css}>
          <div className={label_css + " " +label_color}>{label}</div>
          <select 
            className={content_css}
            value={value} 
            onChange={(e) => onChange(e.target.value)}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )  
    case 'radio' :  
      return (
        <div className={cover_css}>
          <div className={label_css + " " +label_color}>{label}</div>
          <div className={content_css+" flex"}>
            {options.map((option, index) => (
            <div key={index} className="mr-3">
              <input 
                type='radio' 
                value={option} 
                name={label} 
                onChange={e => onChange(e.target.value)}
              />
              <label className="px-1">
                {option}
              </label>
            </div>
            ))}
          </div>
        </div>
      )
    default :
      return (
        <p>wrong type</p>
      )
  }
}

