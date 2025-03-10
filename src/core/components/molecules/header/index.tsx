import { HeaderTableData } from "@/core/data/header.data"
import Button from "../../atoms/button"

const Header = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-8 px-2">
            <div>
                  <h1 className="font-teko font-bold text-5xl">Quad</h1>
            </div>
             

              <div className="flex gap-2 pb-3 border-b border-gray">
                  {HeaderTableData.map((item) => (
                      <Button url="/" key={item.id} variant="primary" className="borer-none px-3">{item.title}</Button>
                  ))}
              </div>
              
    </nav>
  )
}

export default Header
