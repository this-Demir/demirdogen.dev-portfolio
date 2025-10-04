import React from "react";

interface PreferencesBarProps {
  languageSwitch: React.ReactNode;
  themeSwitch: React.ReactNode;
  className?: string;
}

/**
 * Minimal kapsayıcı: yalnızca yan yana hizalar ve araya ince ayraç koyar.
 * Herhangi bir arka plan, kenarlık veya dolgu yok.
 */
export default function PreferencesBar({
  languageSwitch,
  themeSwitch,
  className = "",
}: PreferencesBarProps) {
  return (
    <div
      role="group"
      aria-label="Preferences"
      className={`flex items-center gap-2 ${className}`}
    >
      <div className="flex items-center">{languageSwitch}</div>

      {/* İnce ayraç (tema/dil arasında) */}
      <span
        aria-hidden="true"
        className="h-5 w-px bg-border/70 dark:opacity-60"
      />

      <div className="flex items-center">{themeSwitch}</div>
    </div>
  );
}
