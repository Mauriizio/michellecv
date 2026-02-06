export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-10">
      <h1 className="text-3xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Effective date: January 1, 2026. This website is operated for Michelle Hernandez, RBT, serving families in Miami,
        Florida. We respect your privacy and handle personal information responsibly.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
        <p className="text-sm leading-relaxed text-muted">
          We may collect contact details that you voluntarily provide, such as your name, phone number, and messages
          submitted through the contact form or WhatsApp.
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
        <p className="text-sm leading-relaxed text-muted">
          Information is used only to respond to inquiries, coordinate appointments, and improve communication with
          families. We do not sell personal information.
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Data Sharing</h2>
        <p className="text-sm leading-relaxed text-muted">
          We may share limited information with trusted service providers when needed to deliver website or communication
          services. We may also disclose information if legally required under Florida or U.S. law.
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Children&apos;s Privacy</h2>
        <p className="text-sm leading-relaxed text-muted">
          This website is intended for parents and guardians. We do not knowingly collect personal information directly
          from children through this website.
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Your Rights and Contact</h2>
        <p className="text-sm leading-relaxed text-muted">
          If you have questions about this policy or would like to request updates to your information, please contact us
          via the contact section or WhatsApp link on the homepage.
        </p>
      </section>

      <p className="mt-8 text-xs text-muted">This policy is provided for general website privacy transparency and is not legal advice.</p>
    </main>
  );
}
