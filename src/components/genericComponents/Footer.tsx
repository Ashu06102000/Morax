import { Link } from "react-router-dom";

interface socialLinks {
  href: string;
  name: string;
  email?: boolean;
}
const socialLinks: socialLinks[] = [
  {
    href: "https://www.linkedin.com/in/yash-thakur-0b71051b9/",
    name: "Linkedin",
  },
  { href: "yash6102000thakur@gmail.com", name: "Email", email: true },
  { href: "https://yashthakur.hashnode.dev/", name: "Hashnode" },
  { href: "https://yashthakur-d7b2fc.webflow.io/", name: "Portfolio" },
];
const productsLinks = [
  { href: "/games", name: "Games" },
  { href: "/consoles", name: "Consoles" },
  { href: "/cards", name: "Cards" },
  { href: "/nft", name: "NFT" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-8 text-black">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-black text-[40rem] leading-none font-bold font-zentry">
          MORAX
        </h1>

        <div className="container mx-auto flex  items-start gap-52 px-4 md:flex-row">
          <Link to={"/"}>
            <img
              className="h-10 w-10 rounded-full"
              src="/img/moraxLogo.png"
              alt=""
            />
          </Link>
          <div className="flex justify-center gap-4 flex-col  md:justify-start">
            <span className="text-xs uppercase">Follow us</span>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.email ? `mailto:${link.href}` : link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black special-font text-lg transition-colors duration-500 ease-in-out hover:text-white uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-4 flex-col  md:justify-start">
            <span className="text-xs uppercase">Products</span>
            {productsLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-lg special-font transition-colors duration-500 ease-in-out hover:text-white uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <span className="flex-grow text-end">Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
