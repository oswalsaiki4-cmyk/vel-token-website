"use client";

import { useState } from "react";
import { Language, languages } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languageFlags: Record<Language, string> = {
    en: "🇬🇧",
    de: "🇩🇪",
    fr: "🇫🇷",
    "zh-TW": "🇹🇼",
    ru: "🇷🇺",
    ja: "🇯🇵",
    es: "🇪🇸",
    ko: "🇰🇷",
    hi: "🇮🇳",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-900/20 border border-purple-700/30 hover:bg-purple-900/30 transition-colors text-sm font-medium text-white"
        aria-label="Change language"
      >
        <span className="text-lg">{languageFlags[currentLanguage]}</span>
        <span className="hidden sm:inline">{languages[currentLanguage]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-slate-900 border border-purple-700/30 rounded-lg shadow-xl overflow-hidden z-50">
          {(Object.keys(languages) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onLanguageChange(lang);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-900/30 transition-colors text-left ${
                currentLanguage === lang ? "bg-purple-900/20 text-purple-400" : "text-slate-300"
              }`}
            >
              <span className="text-lg">{languageFlags[lang]}</span>
              <span className="text-sm font-medium">{languages[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
