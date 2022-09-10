import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface IProps {
  children: ReactNode
}

const MainLayout = ({children}: IProps) => {
  return <>
  <Header/>
  {children}
  <Footer />
  </>
}

<MainLayout>
  <h1>Happy</h1>
</MainLayout>
export default MainLayout