import { SquareArrowOutUpRight } from "lucide-react"
import { motion } from 'framer-motion';

const OurWork = () => {
  const cards = [
    {
      image: "./talimet.jpg",
      title: "Talimet",
      description: "CRM System for Education center",
      link: "https://www.talimet.uz/"
    },
    {
      image: "./notee.jpg",
      title: "Notee",
      description: "Users platform to write own experience",
      link: "http://notee.uz/"
    },
  ]
  return (
    <section id="ourwork" className="px-5 md:px-10 flex flex-col gap-y-5 py-15 transition-colors duration-300">
      <div className="flex flex-col items-center gap-y-5 ">
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut" }}
  viewport={{ once: true }} className="text-indigo-600">OUR WORK</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.2 }}
  viewport={{ once: true }} className=" text-5xl md:text-6xl font-bold text-center">Featured projects</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.3 }}
  viewport={{ once: true }} className="text-zinc-500 text-xl font-semibold text-center">Explore our latest work and see how we transform ideas into reality</motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {cards.map((card,index) => (
          <motion.div  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:index*0.2 }}
  viewport={{ once: true }} key={card.title}
  className=" shadow-xl  hover:shadow-indigo-600/10 cursor-pointer  rounded-3xl items-start dark:bg-[#19161D] transition-all duration-300 flex flex-col  ">
            <div className="bg-[#F2EEFF] relative group dark:bg-[#241C34] rounded-t-2xl w-full h-80 overflow-hidden">

              <img
                src={card.image}
                alt="image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <a href={card.link} target="_blank"  className="absolute inset-0  flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white p-3 rounded-full">
                  <SquareArrowOutUpRight className=" text-indigo-600 w-8 h-8" />
                </div>
              </a>

            </div>
            <div className="flex w-full flex-col border gap-y-5 py-10 p-7 rounded-b-3xl border-zinc-300 dark:border-zinc-800 transition-colors duration-300">
              <p className="text-2xl font-bold">{card.title}</p>
              <p className=" text-zinc-700 dark:text-zinc-400">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default OurWork