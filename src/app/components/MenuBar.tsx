"use client";

import MenuBarItem from "./MenuBarItem"
import {PageInterface} from "../data/interfaces"

import { usePathname } from "next/navigation"

interface MenuBarProps {
  max: PageInterface[]
}

export default function MenuBar({max}:MenuBarProps) {
  const pathname = usePathname();

  return <div className="grid grid-cols-5 items-start border-r border-black border-solid">
    {max.map((e, i) => {
      return (
        <div 
          key={i.toString()} 
          className="grid-span-1"
        >
          <MenuBarItem 
            title={e.name} href={e.url} 
            active={pathname.split('/').slice(-1)[0] === e.url}
          />
        </div>
      )
    })}
  </div>
}