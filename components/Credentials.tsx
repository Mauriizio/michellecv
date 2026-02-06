import Image from "next/image";

const credentials = [
  {
    title: "Associate Degree (Valencia College)",
    subtitle: "Associate in Arts",
    description:
      "Academic foundation in child development and behavioral support.",
    src: "/credentials/cert1.png",
    aspect: "aspect-[4/3]",
    order: "md:order-1",
    isId: false,
  },
  {
    title: "Florida Public Schools Contractor",
    subtitle: "Contractor ID",
    description:
      "Active contractor credential for school-based support services.",
    src: "/credentials/cert3.png",
    aspect: "aspect-[3/5]",
    order: "md:order-2",
    isId: true,
  },
  {
    title: "RBT® 40-Hour Training",
    subtitle: "Behavior University",
    description:
      "Evidence-based ABA training aligned with BACB requirements.",
    src: "/credentials/cert2.png",
    aspect: "aspect-[4/3]",
    order: "md:order-3",
    isId: false,
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-shell px-6 py-10 sm:px-10 lg:px-12">
      <div className="space-y-3 text-center lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Credentials
        </p>
        <h2 className="text-3xl font-semibold text-foreground">
          Professional titles and licenses
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted lg:mx-0">
          Verified credentials and certificates to build trust with families and partner organizations.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {credentials.map((item) => (
          <article
            key={item.title}
            className={`lift-hover flex h-full flex-col rounded-2xl border border-border bg-surface-alt/80 p-4 text-center md:text-left ${item.order}`}
          >
            <div
              className={`flex h-56 items-center justify-center rounded-xl border border-border/70 bg-surface sm:h-64 ${
                item.isId ? "p-2" : "p-3"
              }`}
            >
              <div
                className={`relative ${
                  item.isId ? "w-32 sm:w-36" : "w-full max-w-[100%]"
                } ${item.aspect}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-1 flex-col justify-between space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                {item.subtitle}
              </p>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
