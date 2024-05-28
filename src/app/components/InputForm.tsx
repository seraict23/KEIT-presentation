"use client";

import {Squares2X2Icon} from '@heroicons/react/24/outline';
import { useState } from "react";
import InputBox from "./InputBox";

import { InputFormInterface } from "../data/interfaces";

interface InputFormProps {
  title: string
  content: InputFormInterface[][]
  value: {[key: string]: string}
  onChangeList: (id: string, value: string) => void
}

const InputForm = ({ title, content, value, onChangeList } : InputFormProps) => {

  return (
    <div className='my-2'>
      <div className="flex flex-row items-center m-1">
        <Squares2X2Icon className="size-5"/>
        <p className="text-lg font-semibold ml-1">{title}</p>
      </div>
      <div className="border border-black border-dotted divide-y divide-black divide-dotted m-1">
        {content.map((e, i) => (
          (e.length === 1 ? 
          <div
            key={i}
          >
            <InputBox 
              label={e[0].label}
              inputType={e[0].inputType}
              options={e[0].options}
              value={value[e[0].label] || ""}
              onChange={(value) => onChangeList(e[0].label, value)}
              half={false}
            />
          </div> : 
          <div
            key={i}
            className="flex flex-row divide-x divide-black divide-dotted"
          >
            <InputBox
              label={e[0].label}
              inputType={e[0].inputType}
              options={e[0].options}
              value={value[e[0].label] || ""}
              onChange={(value) => onChangeList(e[0].label, value)}
              half={true}
            />
            <InputBox
              label={e[1].label}
              inputType={e[1].inputType}
              options={e[1].options}
              value={value[e[1].label] || ""}
              onChange={(value) => onChangeList(e[1].label, value)}
              half={true}
            />
          </div>)
        ))
        }
      </div>
    </div>
    );
  };

export default InputForm;