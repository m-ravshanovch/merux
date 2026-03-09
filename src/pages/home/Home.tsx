import Intro from "@/sections/Intro"
import OurWork from "@/sections/OurWork"
import Service from "@/sections/Service"

const Home = () => {
  return (
    <div className="flex flex-col gap-y-10">
        <Intro />
        <Service />
        <OurWork />
    </div>
  )
}

export default Home