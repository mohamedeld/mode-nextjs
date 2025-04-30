import { ReactNode } from "react"

interface IProps{
    children:ReactNode
}
const DashboardLayout = ({children}:IProps) => {
  return (
    <div>{children}</div>
  )
}

export default DashboardLayout