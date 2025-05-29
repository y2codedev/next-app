import { IoClose } from "react-icons/io5";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { DrawerMenuProps } from "@/types/type";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function DrawerMenu({
  isOpen,
  onClose,
  navLinks,
  supportLinks,
  socialLinks,
  isSupportOpen,
  toggleSupport,
}: DrawerMenuProps) {
  const drawerRef = useOutsideClick<HTMLDivElement>({ handler: onClose, enabled: isOpen });
  return (
    <div
      ref={drawerRef}
      className={`
          fixed top-0 left-0 h-full w-full sm:w-[24%] z-50 bg-white sm:border-r border-gray-200
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
      <div className="flex justify-end p-4 sticky top-0 bg-white z-10 border-b border-gray-200">
        <div onClick={onClose} aria-label="Close menu">
          <IoClose size={28} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col h-[calc(100%-64px)]">
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item, index) =>
              item.nested ? (
                <div key={index}>
                  <div
                    onClick={toggleSupport}
                    className="w-full border-b border-gray-200 py-3 text-lg font-bold text-left text-[#666] flex items-center gap-2"
                  >
                    {item.label}
                    {isSupportOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                  {isSupportOpen && (
                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      {supportLinks.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href ?? "#"}
                          onClick={onClose}
                          className="text-lg text-gray-500 hover:text-black"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={index} href={item.href ?? "#"}>
                  <span
                    onClick={onClose}
                    className={`block border-b border-gray-200 py-3 text-lg font-bold text-left ${item.isActive ? "text-black" : "text-[#666]"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ),
            )}
          </nav>
          <div className=" py-2 flex flex-wrap">
            {socialLinks.map(({ label, href, icon }) => (
              <Link
                className="px-[37px] py-8 border text-blue-500 border-gray-200"
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
