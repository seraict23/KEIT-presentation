"use client";

// import InputParagraph from "@/app/components/InputParagraph";

import { useState } from "react";
import test_data from "../../data/test";
import { usePathname } from "next/navigation";

import InputForm from "@/app/components/InputForm";
import SimpleButton from "@/app/components/SimpleButton";
import TableForm from "@/app/components/TableForm"
import Calculator from "@/app/components/Calculator";

export default function Page({ params }: { params: { dynamic: string } }) {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (id: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    //  console.log(inputValues);
  }

  const pathname = usePathname().split('/').slice(-1)[0];

  const SaveClick = (e: any) => {
    const postPatcher = {
      [pathname]: inputValues
    }

    alert(JSON.stringify(postPatcher, null, 2))
    // alert(JSON.stringify(inputValues, null, 2));
  }

  const PrintClick = async (e: any) => {
    await fetch('url', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(inputValues)
    })
  }

  const dynamic: string = params.dynamic;


    // toggle Button
    const [toggleCalculator, settoggleCalculator] = useState(false)
    const [s1, set1] = useState("계속")
    const [s2, set2] = useState("0")
    const [s3, set3] = useState("0")
    const [s4, set4] = useState("12")
    const [s5, set5] = useState("0")
    const [s6, set6] = useState("")
  
    const bgOpacity = toggleCalculator ? " bg-black/70" : " hidden";




  const target = test_data.find((e) => e.url === dynamic)
  if(!target) { return <div></div>; }




  return (
    <div className={"border border-black border-solid mt-4"}>
      <div className="p-2">
        <p className="font-semibold text-2xl">
          {target.name}
        </p>
      </div>
      <div className="border border-black border-solid mx-2"></div>
      <div>
        {target.contents.map((e, i) => (
          e.tableForms ? 

          <TableForm 
            key={i}
            tableForms={e.tableForms}
            title={e.title}
            value={inputValues}
            onChangeList={handleInputChange}
            toggleSwitch={() => {settoggleCalculator(!toggleCalculator)}}
          /> :
          <InputForm 
            key={i} 
            title={e.title}
            content={e.inputForms || []}
            value={inputValues}
            onChangeList={handleInputChange}
          />
        ))}
      </div>
      <div className="flex flex-row" >
        <div>
          <SimpleButton
            text="Save"
            onClick={SaveClick}
          />
        </div>
        <div>
          <SimpleButton
            text="Print"
            onClick={PrintClick}
          />
        </div>
      </div>
      <div className={"fixed inset-0 w-full h-full z-40"+bgOpacity}>
        <Calculator 
          toggle={toggleCalculator}
          setToggle={settoggleCalculator}
          setOfStates={[s1,s2,s3,s4,s5,s6]}
          setStatusFunctions={[set1,set2,set3,set4,set5,set6]}  
          key_indicator={inputValues["switcher"] || "dummy"}
          setValuesFunction= {handleInputChange}    
        />
      </div>

    </div>
  )
}