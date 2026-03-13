import { useTheme } from "@/context/useTheme"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import i18n from "@/i18n"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
const Header = () => {
    const [langOpen, setLangOpen] = useState(false)
    const { t } = useTranslation()
    const { theme, toggleTheme } = useTheme()
    const menu = [
        {
            name: "menu.home",
            to: "intro"
        },
        {
            name: "menu.service",
            to: "service"
        },
        {
            name: "menu.ourWork",
            to: "ourwork"
        },
        {
            name: "menu.contact",
            to: "contact"
        }
    ]

    const languages = ["uz", "ru", "ko", "en"]
    return (
        <div className="pt-5 relative px-20  top-0 z-50 ">
            <div className="flex items-center border border-zinc-300 backdrop-blur-3xl bg-white dark:bg-black  dark:border-zinc-800 rounded-xl transition-colors duration-300 justify-between px-5 py-2">
                <a href="/" className="flex items-center">
                    <motion.div
                        key={theme}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img src={theme === "light" ? "/meruxBlack.png" : "/meruxAv.png"} alt="" className="w-15 h-15" />
                    </motion.div>
                    <p className="text-black dark:text-white transition-colors duration-300 font-bold text-xl">Merux Uz</p>
                </a>
                <div className="flex items-center ">
                    <ul className="flex gap-5 items-center ">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a className="text-zinc-800 dark:text-zinc-400 text-sm font-semibold" href={`#${item.to}`}>{t(item.name)}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex  items-center gap-x-3">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="font-bold cursor-pointer hover:text-indigo-700 transition-colors duration-300"
                        >
                            {!langOpen ? (
                                i18n.language === "ko"? "Korean": i18n.language === "ru"? "Russian": i18n.language === "uz"? "Uzbek": "English"
                            ) : (
                                <ChevronRight />
                            )}
                        </button>

                        <div
                            className={`flex gap-3 overflow-hidden transition-all duration-500 ${langOpen ? "max-w-100" : "max-w-0"}`}
                        >
                            {languages
                                .map((lang, index) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            i18n.changeLanguage(lang)
                                            setLangOpen(false)
                                        }}
                                        className={`transition-transform duration-500 cursor-pointer ${langOpen ? "translate-x-0" : "translate-x-10"}`}
                                        style={{ transitionDelay: `${index * 70}ms` }}
                                    >
                                        {lang === "uz" ? "Uzbek" : lang === "ru" ? "Russian" : lang === "ko" ? "Korean" : "English"}
                                    </button>
                                ))}
                        </div>

                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-zinc-200  text-zinc-800 dark:text-zinc-200 dark:bg-gray-900 cursor-pointer transition-colors duration-300"
                    >
                        <motion.div
                            key={theme}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.4 }}
                        >
                            {theme === "light" ? <Moon className="text-indigo-700" /> : <Sun className="text-amber-400" />}
                        </motion.div>
                    </button>
                    <button className="px-6 py-2 cursor-pointer text-white font-semibold rounded-xl 
bg-linear-to-r from-indigo-600 to-purple-600 
 hover:shadow-xl transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header