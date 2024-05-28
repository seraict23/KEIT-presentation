import { ChangeEvent } from "react"

interface CellProps {
    type?: string
    cellValue: string
    onChange: (value:string) => void
    calculatorOpen: () => void
  }

const TableCellForm = ({type="text", cellValue, onChange, calculatorOpen }: CellProps) => {

  switch(type) {
    case "text":
      return (
        <div className={`flex-1 border-b border-black border-dotted`}>
          <input 
            type="text"
            value={cellValue || "" }
            onChange={(e) => onChange(e.target.value)}
            className="text-center w-full"
          />
        </div>
      )
    case "formula":
      return (
        <div 
          className={`flex-1 border-b border-black border-dotted text-center w-full hover:bg-gray-200 cursor-pointer`}
          onClick={(e) => {
            calculatorOpen()
          }}
        >{cellValue}
        </div>
      )
    case "header":
      return (
        <div className={`flex-1 border-b border-black border-dotted`}>
          <div 
            className="text-center"
          >{cellValue || "" }
          </div>
        </div>
      )
  }
}
  


export default TableCellForm;