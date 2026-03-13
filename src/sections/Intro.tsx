import { SkipForward } from "lucide-react"
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
const Intro = () => {
  const {t} = useTranslation("intro")
  return (
    <section id="intro" className="mt-10 flex flex-col gap-y-5 dark:bg-radial from-indigo-700/10 to-transparent  transition-colors duration-300 ">
      <div className="flex justify-center">

        <div className="px-5  py-1 rounded-2xl border border-indigo-500">
          <p className="text-sm text-zinc-500 ">Trusted by 500+ companies worldwide</p>
        </div>
      </div>
      <div className="flex flex-col gap-5  lg:px-60 items-center ">
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut" }}
  viewport={{ once: true }} className="text-5xl md:text-7xl font-bold text-center">
          {t("text.title")}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.2 }}   viewport={{ once: true }} className="text-xl wrap-break-word md:text-2xl text-zinc-500 text-center">
          {t("text.desc")}
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-10">
        <motion.button initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut",delay:0.5 }} viewport={{ once: true }} className="px-6 py-2 cursor-pointer text-white font-semibold rounded-xl 
bg-linear-to-r from-indigo-600 to-purple-600 
 hover:shadow-xl transition-all duration-300 shadow-indigo-500/20 hover:scale-105">
          {t("actions.btn1")}
        </motion.button>
        <motion.button initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5,ease:"easeInOut" ,delay:0.8}} viewport={{ once: true }} className="flex items-center gap-x-2 px-6 py-2 cursor-pointer text-indigo-600 font-semibold rounded-xl border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105">
          {t("actions.btn2")} <SkipForward />
        </motion.button>
      </div>
    </section>
  )
}

export default Intro