import { Code2, Coffee, Globe } from 'lucide-react';
import yuSyncLogo from '../assets/yu-sync-logo.png';

const PersonalizedHeader = () => {

  return (
    <div className="space-y-6">
      {/* Name with gradient effect */}
      <div>
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          <a href="/" className="group relative">
            <span className="text-gradient bg-gradient-to-r from-ui-blue via-ui-purple to-ui-teal bg-300% animate-gradient-shift">
              Demir Demirdöğen
            </span>
          </a>
        </h1>
        
        {/* Static role */}
        <div className="mt-4">
          <h2 className="text-lg font-medium text-silver sm:text-xl lg:text-2xl">
            Software Engineering Student
          </h2>
        </div>
      </div>

      {/* Personal tagline with icons */}
      <div className="space-y-4">
        <p className="max-w-sm leading-relaxed text-cool-gray text-base lg:text-lg">
          Constantly learning and growing while building{' '}
          <span className="text-ui-blue font-medium">meaningful projects</span> that make a{' '}
          <span className="text-ui-purple font-medium">positive impact</span> in people's lives.
        </p>
        
        {/* Quick facts with icons */}
        <div className="flex flex-wrap gap-4 text-sm text-silver">
          <div className="flex items-center gap-2 group">
            <Globe className="h-4 w-4 text-accent group-hover:animate-bounce-subtle" />
            <span>Türkiye - İzmir</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Code2 className="h-4 w-4 text-primary group-hover:animate-bounce-subtle" />
            <span>React • .NET • Java</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedHeader;