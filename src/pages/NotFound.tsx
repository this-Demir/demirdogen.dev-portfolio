import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';
import { content } from "../data/content"; 

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const language: 'en' | 'tr' = 'en'; 
  
  const t = content[language]; 

  useEffect(() => {
    console.error("404 Error: Access attempt to:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-midnight overflow-hidden px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ui-purple/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="relative z-10 text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl shadow-black/50">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gradient-to-br from-ui-blue/10 to-ui-purple/10 ring-1 ring-ui-blue/30 shadow-lg shadow-ui-blue/20 animate-float">
                <FileQuestion className="h-12 w-12 text-ui-blue" />
            </div>
          </div>

          <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ui-blue via-ui-purple to-ui-teal drop-shadow-lg select-none">
            404
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl text-silver font-bold tracking-tight">
            {t.notFound.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            {t.notFound.description}
          </p>
          <p className="text-xs text-ui-blue/60 font-mono bg-midnight/50 inline-block px-2 py-1 rounded border border-ui-blue/10">
            Path: {location.pathname}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-ui-blue to-ui-purple text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ui-blue/25 active:scale-95"
          >
            <Home className="h-4 w-4" />
            {t.notFound.goHome}
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-ui-blue/30 text-silver font-medium text-sm transition-all duration-300 hover:bg-ui-blue/10 hover:border-ui-blue/60 hover:text-white active:scale-95 bg-midnight/50"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.notFound.goBack}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;