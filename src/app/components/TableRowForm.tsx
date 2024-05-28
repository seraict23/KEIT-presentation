import TableCellForm from "./TableCellForm"

interface CellObj {
  cellValue: string
  type?: string
  col: string
  row: string
  title: string
}

interface TableRowFormProps {
  rowName: string
  rowContent: CellObj[]
  isFirstRow: boolean
  onChangeRow: (label: string, value: string) => void
  statusValues: any
  toggleSwitch: any
}

const TableRowForm = ({ rowName, rowContent, isFirstRow, onChangeRow, statusValues, toggleSwitch}: TableRowFormProps) => {
  const color = isFirstRow ? ' bg-slate-300' : ''
  const cellLength = rowContent.length

  return (
    <div className={"grid grid-cols-8"+color}>
      <div className="col-span-1 bg-slate-300">
        {rowName}
      </div>
      <div className="col-span-7">
        <div className="flex flex-row">
          {rowContent.map((e, i) => (
            isFirstRow ?
            <TableCellForm 
              key={i}
              type={e.type} 
              cellValue={e.cellValue} 
              onChange={() => {}}
              calculatorOpen={
                () => {}
              }
            />
             :
            <TableCellForm 
              key={i}
              type={e.type} 
              cellValue={statusValues[e.title +"-" + e.row + "-" + e.col]} 
              onChange={(value) => onChangeRow(e.title +"-" + e.row + "-" + e.col, value)}
              calculatorOpen={
                () => {
                  toggleSwitch()
                  onChangeRow('switcher', e.title +"-" + e.row + "-" + e.col)
                }
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableRowForm;


