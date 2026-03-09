import { CodeXml,UserRound,AlignEndHorizontal } from "lucide-react"
import { motion } from 'framer-motion';

const Service = () => {
  const cards = [
    {
      icon: UserRound,
      title: "Web Portfolio",
      description:"A portfolio showcases your skills, experience, and completed projects in one place.It helps clients or employers quickly understand your abilities and the value you can bring to their projects."
    },
    {
      icon: CodeXml,
      title: "Website",
      description:"A website helps your business build trust and reach more customers online.It presents your services professionally and makes it easier for people to discover and contact your business."
    },
    {
      icon: AlignEndHorizontal,
      title: "CRM System",
      description:"A portfolio showcases your skills, experience, and completed projects in one place.It helps clients or employers quickly understand your abilities and the value you can bring to their projects."
    },
  ]
  return (
    <section id="service" className="px-5 md:px-10 flex flex-col gap-y-5 bg-white dark:bg-[#0C0A0F] py-15 transition-colors duration-300">
      <div className="flex flex-col items-center gap-y-5 ">
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut" }}
  viewport={{ once: true }} className="text-indigo-600">OUR SERVICES</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.2 }}
  viewport={{ once: true }} className=" text-5xl md:text-6xl font-bold text-center">What we offer</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.3 }}
  viewport={{ once: true }} className="text-zinc-500 text-xl font-semibold text-center">Comprehensive digital solutions tailored to your business needs</motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {cards.map((card,index)=>(
           <motion.div initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:index*0.2 }}
  viewport={{ once: true }} key={card.title} className="p-7 border hover:border-indigo-700 shadow-xl  hover:shadow-indigo-600/10 cursor-pointer border-zinc-300 dark:border-zinc-800 rounded-3xl items-start dark:bg-[#19161D] transition-all duration-300 flex flex-col gap-y-5 py-10">
              <div className="bg-[#F2EEFF] dark:bg-[#241C34] p-3 rounded-2xl transition-colors duration-300">
                 <card.icon/>
              </div>
              <div className="flex flex-col gap-y-5">
                 <p className="text-2xl font-bold">{card.title}</p>
                 <p className= " text-zinc-700 dark:text-zinc-400">{card.description}</p>
              </div>
           </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Service