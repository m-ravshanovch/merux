import { Github, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  const links = [
    {
      icon: Github,
      link: "https://github.com/m-ravshanovch"
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/merux.uz"
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@merux_uz"
    }
  ]

  const product = [
    {
      name: "Features",
      link: "/features"
    },
    {
      name: "Pricing",
      link: "/pricing"
    },
    {
      name: "Security",
      link: "/security"
    },
    {
      name: "Roadmap",
      link: "/roadmap"
    }
  ]

  const company = [
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Blog",
      link: "/blog"
    },
    {
      name: "Careers",
      link: "/careers"
    },
    {
      name: "Press",
      link: "/press"
    }
  ]
  return (
    <div className="px-5 md:px-10 flex flex-col gap-y-5 bg-white dark:bg-[#0C0A0F] py-15 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-5 justify-between border-b border-zinc-300  dark:border-gray-800 py-10 transition-all duration-300">
        <div className="flex flex-col gap-y-5">
          <p className="text-2xl text-indigo-600">Merux</p>
          <p className="text-zinc-400">Building digital products that scale. <br /> Transform your ideas into reality with our <br /> expert team.</p>
          <div className="flex gap-x-2">
            {links.map((link) => (
              <a key={link.link} href={link.link} className="p-2 bg-indigo-900/20 rounded-full">
                <link.icon size={24} className="text-indigo-600" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
          <div className="flex flex-col ">
            <p>Product</p>
            <div className="flex flex-col  gap-y-2 mt-5">
              {product.map((res) => (
                <p key={res.name} className="text-zinc-400">
                  {res.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col ">
            <p>Company</p>
            <div className="flex  flex-col gap-y-2 mt-5">
              {company.map((res) => (
                <p key={res.name} className="text-zinc-400">
                  {res.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-zinc-500">© 2026 Merux. All rights reserved.</p>
      </div>
    </div >
  )
}

export default Footer