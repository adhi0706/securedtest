import React from "react";
import Link from "next/link";

const MegaMenu = ({ items, label, isVisible, onMouseEnter, onMouseLeave }) => {
  if (!items || items.length === 0) return null;

  const isServices = label === "Services";
  const isProducts = label === "Product";

  return (
    <div
      className={`absolute left-1/2 top-full mt-2 transition-all duration-300 ease-in-out z-[100] w-max ${
        isVisible
          ? "opacity-100 translate-y-0 -translate-x-1/2 visible"
          : "opacity-0 -translate-y-2 -translate-x-1/2 invisible"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="bg-white dark:bg-[#031B34] bg-grid border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex gap-x-16"
      >
        {isServices ? (
          // grouped Layout (Services)
          items.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-y-4">
              <h4 className="text-secondary dark:text-white font-bold text-lg whitespace-nowrap">
                {section.title}
              </h4>
              <div className="flex flex-col gap-y-2">
                {section.children.map((child, cidx) => (
                  <Link
                    key={cidx}
                    href={child.to || "#"}
                    target={child.external ? "_blank" : undefined}
                    rel={child.external ? "noopener noreferrer" : undefined}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-[#00d2ff] hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 -mx-3 rounded transition-colors duration-200 text-[15px] whitespace-nowrap"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Flat layout for Products and Resources
          <div
            className={`grid gap-x-16 gap-y-3 min-w-[350px] ${
              items.length > 4 ? "grid-flow-col" : "grid-flow-row"
            }`}
            style={
              items.length > 4
                ? {
                    gridTemplateRows: `repeat(${Math.ceil(
                      items.length / 2
                    )}, minmax(0, 1fr))`,
                  }
                : {}
            }
          >
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.to || "#"}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-[#00d2ff] hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 -mx-4 rounded transition-colors duration-200 text-[15px] whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
