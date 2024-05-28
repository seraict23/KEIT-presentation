"use client";

import { useEffect, useState } from "react";
import {XMarkIcon} from '@heroicons/react/24/outline';


interface ToggleI {
  toggle: boolean
  setToggle: any
  setStatusFunctions: any
  setOfStates: string[]
  key_indicator: string
  setValuesFunction: (key: string, value: string) => void
}

const Calculator = ({toggle, setToggle, setStatusFunctions, setOfStates, key_indicator, setValuesFunction}: ToggleI) => {

  const [switcher, setSwitcher] = useState(0)

  useEffect(() => {
    const numberCheck = () => {
      setOfStates.forEach((e, i) => {
        if (i !== 0) {
          if(isNaN(Number(e))) {
            return false;
          }
        }
      })
      return true;
    }

    if(numberCheck() && switcher==2) {
      const result = (Number(setOfStates[1])*Number(setOfStates[2])*Number(setOfStates[3])/12).toString()
      setStatusFunctions[4](result)
    }

    if(numberCheck() && switcher==4) {
      const result = (Number(setOfStates[4])/Number(setOfStates[1])/Number(setOfStates[3])*12).toString()
      setStatusFunctions[2](result)
    }

    setSwitcher(0)
  }, [setOfStates, setStatusFunctions, switcher])


  // 버튼 클릭 : 상태변경을 동기적으로 처리하기 위한 꼼수
  const [buttonClicked, setButtonClicked] = useState(false)

  const buttonClick = () => {
    const text_value = '('+setOfStates[0]+')'
    +setOfStates[1]+'개x'
    +setOfStates[2]+'백만x'
    +setOfStates[3]+'/12개월='
    +setOfStates[4]

    setStatusFunctions[5](
      text_value
    )

    setButtonClicked(!buttonClicked)
  }

  useEffect(() => {
    if(buttonClicked) {
      setValuesFunction(key_indicator, setOfStates[5])
      setToggle(!toggle)
    }
    setButtonClicked(false)
  }, [buttonClicked])


  const CSS = toggle ? "" : " hidden"
  const input_css = "text-center w-12"
  return (
    <div className={"z-50 absolute right-1/2 bottom-1/2 bg-white" + CSS}>
      <div className="p-1">
        <div className="flex justify-between bg-gray-300">
        <div></div>
        <button
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          <XMarkIcon className="size-5"/>
        </button>
        </div>

        <div className="flex flex-row text-center">
          <div>
            <div>기간</div>
            <select
              onChange={(e) => { 
                setStatusFunctions[0](e.target.value)
                const num = (e.target.value === "신규") ? 4 : 12
                setStatusFunctions[3](num)
              }}
              value={setOfStates[0]}
            >
              <option value="신규">신규</option>
              <option value="계속">계속</option>
              <option value="종료">종료</option>
            </select>
          </div>
          <div>
            <div>갯수</div>
            <input 
              type="text" 
              onChange={(e) => { setStatusFunctions[1](e.target.value) }}
              value={setOfStates[1]}
              className={input_css}
            />
          </div>
          <div>
            <div>단가</div>
            <input 
              type="text" 
              onChange={(e) => { 
                setStatusFunctions[2](e.target.value)
                setSwitcher(2)
              }}
              value={setOfStates[2]}
              className={input_css}
            />
          </div>

          <div>
            <div>개월</div>
            <input 
              type="text" 
              onChange={(e) => { setStatusFunctions[3](e.target.value) }}
              value={setOfStates[3]}
              className={input_css}
            />
          </div>
          <div>
            <div>총액</div>
            <input 
              type="text" 
              onChange={(e) => { 
                setStatusFunctions[4](e.target.value) 
                setSwitcher(4)
              }}
              value={setOfStates[4]}
              className={input_css}
            />
          </div>
        </div>
        <div className='flex flex-row justify-between m-1'>
          <div >
            <p>
              {
                '('+setOfStates[0]+')'
                +setOfStates[1]+'개x'
                +setOfStates[2]+'백만x'
                +setOfStates[3]+'/12개월='
                +setOfStates[4]
              }
            </p>
          </div>
          <div>
            
          </div>
        </div>
        <div
          className="flex justify-between"
        >
          <div></div>
          <button
            onClick={buttonClick}
            className="bg-gray-300 px-2 rounded"
          >입력</button>
        </div>
      </div>
    </div>
  )
}


export default Calculator;