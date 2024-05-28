import Link from "next/link"

interface MenuBarItemProps {
  title: string
  href: string
  active: boolean
}

export default function MenuBarItem( {title, href, active}: MenuBarItemProps) {
  const menuBarItemCSS:string = active 
    ? "border-l border-black border-solid bg-slate-300"
    : "border-l border-black border-solid"
  return(
    <div className={menuBarItemCSS}>
      <Link
        className='text-center'
        href={href}
      >
        <div className="p-2">
          {title}
        </div>
        
      </Link>
    </div>
  )
}