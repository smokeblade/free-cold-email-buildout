export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-gray-600 space-y-2">
        <p>
          We may earn an affiliate commission when clients purchase inboxes or related software via our links. This helps us offer the buildout for free. No SLAs are implied; pages are server-rendered only.
        </p>
        <p>&copy; {year} Free Cold Email Buildout.</p>
      </div>
    </footer>
  );
}


