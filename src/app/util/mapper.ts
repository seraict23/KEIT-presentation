interface returnValue {
  dataRows: RowDataInterface[]
  statusValues: {[key: string]: string}
}

interface RowDataInterface {
  rowHeader: string
  contents: CellDataInterface[]
  isFirstRow: boolean
}

interface CellDataInterface {
  title: string
  type: string
  cellValue: string
  row: string
  col: string
}

interface InputParameter {
  tableForms: string[][]
  title: string
}

const mapper = ( {tableForms, title }: InputParameter ) : returnValue => {
  const result : returnValue = {
    dataRows: [],
    statusValues: {}
  }

  tableForms.map((dataRow, dataRowIndex) => {
    const newDataRow: RowDataInterface = {
      rowHeader: dataRow[0],
      contents: [],
      isFirstRow: (dataRowIndex === 0)
    }

    dataRow.map((data, cellDataIndex) => {
      const cellType = dataRowIndex===0 ? 'header'
        : data.includes('{formula}') ? 'formula'
        : data.includes('{something else}') ? '' 
        : data.includes('{number}') ? 'number' : 'text'

      const cellData = data.includes('{formula}') ? data.replace('{formula}', '') : data

      if(cellDataIndex !== 0) {
        const newDataCell: CellDataInterface = {
          title: title,
          type: cellType,
          cellValue: cellData,
          row: dataRowIndex.toString(),
          col: cellDataIndex.toString()
        }
        newDataRow.contents.push(newDataCell)

        if(dataRowIndex !== 0) {
          result.statusValues = {
            ...result.statusValues,
            [title + "-" + dataRowIndex.toString() + "-" + cellDataIndex.toString()]: cellData
          }
        }
      }
    })

    // console.log(result)

    result.dataRows.push(newDataRow)
  })

  return result
}

export default mapper;
