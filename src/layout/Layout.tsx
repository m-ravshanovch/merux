import Header from "@/components/Header"
import MobileMenu from "@/components/MobileMenu"
const Layout = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm ">
        <div className="hidden lg:block sticky top-0 z-50">
            <Header />
        </div>
        <div className="block lg:hidden sticky top-0 z-50">
            <MobileMenu />
        </div>
    </div>
  )
}

export default Layout