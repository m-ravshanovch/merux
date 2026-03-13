import { CodeXml,UserRound,AlignEndHorizontal } from "lucide-react"
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
const Service = () => {
  const {t} = useTranslation("service")
  const cards = [
    {
      icon: UserRound,
      title: "cards.webPortfolio.title",
      description:"cards.webPortfolio.desc"
    },
    {
      icon: CodeXml,
      title: "cards.website.title",
      description:"cards.website.desc"
    },
    {
      icon: AlignEndHorizontal,
      title: "cards.crmSystem.title",
      description:"cards.crmSystem.desc"
    },
  ]
  return (
    <section id="service" className="px-2 md:px-10 flex flex-col gap-y-5 bg-white dark:bg-[#0C0A0F] py-15 transition-colors duration-300">
      <div className="flex flex-col items-center gap-y-5 ">
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut" }}
  viewport={{ once: true }} className="text-indigo-600">{t("text.sectionName")}</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.2 }}
  viewport={{ once: true }} className=" text-5xl md:text-6xl font-bold text-center">{t("text.title")}</motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.3 }}
  viewport={{ once: true }} className="text-zinc-500 text-xl font-semibold text-center">{t("text.desc")}</motion.p>
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
                 <p className="text-2xl font-bold">{t(card.title)}</p>
                 <p className= " text-zinc-700 dark:text-zinc-400">{t(card.description)}</p>
              </div>
           </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Service