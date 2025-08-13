export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function TermsPage() {
  return (
    <main>
      <section className="pt-20 md:pt-28 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8">
            <h1 className="text-3xl font-semibold text-gray-900">Terms & Conditions</h1>
            <p className="mt-3 text-sm text-gray-700">
              No SLAs are provided. Buildout is offered as a complimentary setup. You retain full ownership of all accounts and data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


