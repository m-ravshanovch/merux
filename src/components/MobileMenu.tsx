import { useTheme } from "@/context/useTheme"
import { Sun, Moon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import { X } from "lucide-react"
import { useState } from "react"
const MobileMenu = () => {
    const { theme, toggleTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menu = [
        {
            name: "Home",
            to: "intro"
        },
        {
            name: "Service",
            to: "service"
        },
        {
            name: "Our Work",
            to: "ourwork"
        },
        {
            name: "Contact",
            to: "contact"
        }
    ]
    return (
        <div className="pt-5 px-2 sticky top-0 z-50 ">
            <div className="flex relative items-center border border-zinc-300 bg-white dark:bg-black backdrop-blur-2xl dark:border-zinc-800 rounded-2xl transition-colors duration-300 justify-between px-5 py-2">
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
                <AnimatePresence >
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="absolute top-full left-0 right-0 bg-white dark:bg-black border backdrop-blur-2xl border-zinc-300 dark:border-zinc-800 rounded-2xl transition-colors duration-300 mt-2 py-4"
                        >
                            <ul className="flex flex-col gap-4 items-left px-5">
                                {menu.map((item, index) => (
                                    <li key={index} onClick={() => setIsMenuOpen(false)}>
                                        <a
                                            className="text-zinc-800 dark:text-zinc-400 text-sm font-semibold"
                                            href={`#${item.to}`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                                <div className="flex items-center gap-x-3">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-full block md:hidden bg-zinc-200  text-zinc-800 dark:text-zinc-200 dark:bg-gray-900 cursor-pointer transition-colors duration-300"
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
                                    <button className="px-6 py-2 w-full md:w-fit cursor-pointer text-white font-semibold rounded-xl 
bg-linear-to-r from-indigo-600 to-purple-600 
 hover:shadow-xl transition-all duration-300">
                                        Get Started
                                    </button>
                                </div>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex gap-x-5 items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hidden md:block bg-zinc-200  text-zinc-800 dark:text-zinc-200 dark:bg-gray-900 cursor-pointer transition-colors duration-300"
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
                    <div className="flex items-center gap-x-3">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.4 }}>
                                {isMenuOpen ? <X /> : <Menu />}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu