import AdminImg from "../assets/admin-img.jpg";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { PiEyeDuotone } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";

// Reusable Social Icon
const SocialIcon = ({ href, icon: Icon, label }) => (
  <li className="p-1 transition-transform duration-150 hover:-translate-y-2">
    <a
      href={href}
      aria-label={label}
      className="text-green-800 text-2xl"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <Icon />
    </a>
  </li>
);

// Reusable Resume Buttons
const ResumeButtons = () => (
  <div className="flex items-center gap-2 mt-5">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 rounded-full bg-[#CACED0] px-4 py-2 text-sm font-bold text-[#04772e]"
    >
      View Resume <PiEyeDuotone className="size-[17px]" />
    </a>

    <a
      href="/resume.pdf"
      download="Sumit_Shrirange_Resume.pdf"
      className="rounded-full bg-[#CACED0] p-[7px] text-xl font-semibold text-[#04772e]"
    >
      <IoMdDownload />
    </a>
  </div>
);

function InfoCard() {
  const socialLinks = [
    {
      href: "mailto:sumitshrirange81@gmail.com",
      icon: TbMailFilled,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/sumitshrirange",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/sumitshrirange",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "tel:+917499988151",
      icon: MdCall,
      label: "Phone",
    },
  ];

  return (
    <aside className="relative top-13 flex h-[580px] w-90 flex-col items-center justify-evenly rounded-2xl bg-white py-10 lg:fixed lg:top-24 lg:h-4/5 lg:w-100">
      {/* Admin Image */}
      <div className="flex h-[65%] w-[75%] items-center overflow-hidden rounded-2xl">
        <img
          src={AdminImg}
          alt="Sumit Shrirange"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <h1 className="my-2 text-3xl font-bold text-black">Sumit Shrirange</h1>

      <p className="text-center text-gray-400">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      {/* Social Icons */}
      <ul className="mt-3 flex items-center gap-3">
        {socialLinks.map((link) => (
          <SocialIcon key={link.label} {...link} />
        ))}
      </ul>

      {/* Resume Buttons */}
      <ResumeButtons />
    </aside>
  );
}

export default InfoCard;
