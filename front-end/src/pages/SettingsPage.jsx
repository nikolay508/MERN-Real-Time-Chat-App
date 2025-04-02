import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          
          <div className="bg-base-200 rounded-lg p-6">
            <div className="flex flex-col gap-2 mb-4">
              <h2 className="text-lg font-semibold">Appearance</h2>
              <p className="text-sm text-base-content/70">
                Choose light or dark theme.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {THEMES.map((t) => (
                <button
                  key={t}
                  className={`
                    group flex flex-col items-center gap-2 p-3 rounded-lg transition-all
                    ${theme === t 
                      ? "bg-base-100 ring-2 ring-primary" 
                      : "hover:bg-base-100 hover:scale-105"
                    }
                  `}
                  onClick={() => setTheme(t)}
                >
                  <div 
                    className="relative h-12 w-full rounded-md overflow-hidden shadow-sm" 
                    data-theme={t}
                  >
                    <div className="absolute inset-0 grid grid-cols-4 gap-px p-1.5">
                      <div className="rounded bg-primary"></div>
                      <div className="rounded bg-secondary"></div>
                      <div className="rounded bg-accent"></div>
                      <div className="rounded bg-neutral"></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium truncate w-full text-center">
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
