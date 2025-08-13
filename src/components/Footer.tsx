export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-xs text-black/60 dark:text-white/60 space-y-2">
        <p>
          We may earn an affiliate commission when clients purchase inboxes or related software via our links. This helps us offer the buildout for free. No SLAs are implied; pages are server-rendered only.
        </p>
        <p>&copy; {year} Free Cold Email Buildout.</p>
      </div>
    </footer>
  );
}


