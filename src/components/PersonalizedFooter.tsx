import { useLanguage } from '../context/language';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, REPO_URL } from '../data/links';

const linkClass = 'underline underline-offset-4 transition-colors hover:text-accent';

const PersonalizedFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-border pt-8 text-center text-xs leading-relaxed text-subtle">
      {/*
        On mobile the sidebar links live behind the menu toggle, so the end of
        the page repeats them in plain sight. The address is shown as text so
        it can be copied as well as clicked.
      */}
      <p className="mb-6 text-sm text-muted">
        <span className="font-medium text-foreground">{t.footer.contact}:</span>{' '}
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          {EMAIL}
        </a>
        <span aria-hidden="true"> · </span>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener" className={linkClass}>
          LinkedIn
        </a>
        <span aria-hidden="true"> · </span>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener" className={linkClass}>
          GitHub
        </a>
      </p>

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
