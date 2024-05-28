import { useEffect, useState } from "react"
import TableRowForm from "./TableRowForm"
import mapper from "../util/mapper"
import {Squares2X2Icon} from '@heroicons/react/24/outline';

interface CellObj {
  type?: string
  cellValue: string
  col: string
  row: string
}

interface TableRowFormProps {
  rowHeader: string
  contents: CellObj[]
  isFirstRow: boolean
  rowLength?: number
}


interface TableFormProps {
  tableForms: string[][]
  title: string
  value: {[key: string]: string}
  onChangeList: (id: string, value: string) => void
  toggleSwitch: any
}

const TableForm = ({tableForms, title, value, onChangeList, toggleSwitch} : TableFormProps) => {

  const { dataRows, statusValues } = mapper({tableForms, title})

  useEffect(() => {
    const initializeStatusValues = () => {
      for (let e in statusValues) {
        onChangeList(e, statusValues[e])
      }
    };

    initializeStatusValues();
    
  }, [])


  return (<div className="my-2">
      <div className="flex flex-row items-center m-1">
        <Squares2X2Icon className="size-5"/>
        <p className="text-lg font-semibold ml-1">{title}</p>
      </div>
      <div className="text-center m-1">
        {
          dataRows.map((e, i) => (
            <TableRowForm 
              key={i} 
              rowName={e.rowHeader} 
              rowContent={e.contents} 
              isFirstRow={e.isFirstRow} 
              onChangeRow={onChangeList}
              statusValues={value}
              toggleSwitch={toggleSwitch}
            />
          ))
        }
      </div>
    </div>
  )
}

const colCounter = (data: TableFormProps) : number => {
  
  return 0
}

export default TableForm;