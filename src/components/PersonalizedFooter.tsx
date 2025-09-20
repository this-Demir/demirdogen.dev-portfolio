import { Heart, Code, Zap } from 'lucide-react';

const PersonalizedFooter = () => {
  return (
    <footer className="mt-16 py-8 border-t border-ocean-blue/30">
      <div className="text-center space-y-4">
        {/* Personal message */}
        <div className="flex items-center justify-center gap-2 text-cool-gray">
          <span>Crafted with</span>
          <Heart className="h-4 w-4 text-ember animate-bounce-subtle" fill="currentColor" />
          <span>and</span>
          <Code className="h-4 w-4 text-amber animate-bounce-subtle" />
          <span>in İzmir</span>
        </div>
        
        {/* Tech stack */}
        <div className="flex items-center justify-center gap-2 text-sm text-silver">
          <Zap className="h-3 w-3 text-copper" />
          <span>Built with React, TypeScript & Tailwind CSS</span>
        </div>
        
        {/* Copyright */}
        <p className="text-xs text-cool-gray">
          © {new Date().getFullYear()} Demir Demirdöğen. All rights reserved.
        </p>
        
        {/* Easter egg */}
        <div className="mt-6 opacity-50 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-cool-gray font-mono">
            // TODO: Make the world a better place, one line of code at a time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PersonalizedFooter;