import { humanize } from "@/lib/utils/textConverter";
import React from "react";

function Notice({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  // 1. සෙවුම් යන්ත්‍ර සහ Screen Readers වලට අදාළව නිවැරදි ARIA Role එක තීරණය කිරීම
  const ariaRole = type === "warning" ? "alert" : "note";

  // 2. 👑 PREMIUM DARK THEME DYNAMIC STYLES CONFIGURATION
  const themeStyles: Record<string, { box: string; icon: string; text: string }> = {
    tip: {
      box: "border-[#01AD9F]/30 bg-[#01AD9F]/5",
      icon: "text-[#01AD9F]",
      text: "text-[#01AD9F]"
    },
    info: {
      box: "border-blue-500/30 bg-blue-500/5",
      icon: "text-blue-400",
      text: "text-blue-400"
    },
    warning: {
      box: "border-amber-500/30 bg-amber-500/5",
      icon: "text-amber-400",
      text: "text-amber-400"
    },
    default: {
      box: "border-neutral-700/50 bg-neutral-800/10",
      icon: "text-neutral-400",
      text: "text-neutral-300"
    }
  };

  const currentStyle = themeStyles[type] || themeStyles.default;

  return (
    <div 
      className={`my-6 flex flex-col md:flex-row items-start gap-3 rounded-2xl border p-5 transition-all duration-300 ${currentStyle.box}`} 
      role={ariaRole} 
      aria-label={`${humanize(type)} notice`}
    >
      {/* 🎨 ICON & HEADER SECTION */}
      <div className="flex items-center gap-2 shrink-0 md:pt-0.5" aria-hidden="true">
        {type === "tip" ? (
          <svg className={`h-5 w-5 ${currentStyle.icon}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM15.9515 7.55147L9.6 13.9029L8.04853 12.3515C7.5799 11.8828 6.8201 11.8828 6.35147 12.3515C5.88284 12.8201 5.88284 13.5799 6.35147 14.0485L8.75147 16.4485C9.2201 16.9172 9.9799 16.9172 10.4485 16.4485L17.6485 9.24853C18.1172 8.7799 18.1172 8.0201 17.6485 7.55147C17.1799 7.08284 16.4201 7.08284 15.9515 7.55147Z" fill="currentColor"/>
          </svg>
        ) : type === "info" ? (
          <svg className={`h-5 w-5 ${currentStyle.icon}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : type === "warning" ? (
          <svg className={`h-5 w-5 ${currentStyle.icon}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className={`h-5 w-5 ${currentStyle.icon}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        <p className={`my-0 font-bold uppercase text-[14px] tracking-wider md:hidden ${currentStyle.text}`}>
          {humanize(type)}
        </p>
      </div>

      {/* 🧠 SMART SEO BODY CONTAINER */}
      <div className="flex-1 w-full">
        <p className={`my-0 hidden md:block font-bold uppercase text-[13px] tracking-wider mb-1 ${currentStyle.text}`} aria-hidden="true">
          {humanize(type)}
        </p>
        <div className="prose prose-invert max-w-none text-[15px] leading-relaxed text-neutral-300 selection:bg-[#01AD9F]/30 selection:text-[#01AD9F]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Notice;
