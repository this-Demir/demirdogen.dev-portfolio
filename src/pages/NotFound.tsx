import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/language';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <p className="font-mono text-sm font-medium text-accent">404</p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {t.notFound.title}
        </h1>

        <p className="mt-3 leading-relaxed text-muted">{t.notFound.description}</p>

        <p className="mt-4 break-all font-mono text-xs text-subtle">{location.pathname}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded border border-transparent bg-accent px-4 py-2 text-sm font-medium text-[hsl(var(--accent-foreground))] transition-opacity hover:opacity-90"
          >
            {t.notFound.goHome}
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-subtle hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            {t.notFound.goBack}
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
