import { useLanguage } from '../context/language';

const REPO_URL = 'https://github.com/this-Demir/demirdogen.dev-portfolio';

const linkClass = 'underline underline-offset-4 transition-colors hover:text-accent';

const PersonalizedFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-border pt-8 text-center text-xs leading-relaxed text-subtle">
      <p>{t.footer.built}</p>
      <p className="mt-1">
        {t.footer.design}{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
          className={linkClass}
        >
          Brittany Chiang
        </a>
        .
      </p>
      <p className="mt-4">
        © {new Date().getFullYear()} {t.footer.rights} ·{' '}
        <a href={REPO_URL} target="_blank" rel="noreferrer noopener" className={linkClass}>
          {t.footer.source}
        </a>
      </p>
    </footer>
  );
};

export default PersonalizedFooter;
