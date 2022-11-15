import Link from "next/link";

export default function HeroSection() {
  const clientsLogo = [
    { id: 1, name: "databiz", url: "/images/client-databiz.svg" },
    { id: 2, name: "audiophile", url: "/images/client-audiophile.svg" },
    { id: 3, name: "meet", url: "/images/client-meet.svg" },
    { id: 4, name: "maker", url: "/images/client-maker.svg" },
  ];
  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse justify-between items-center pt-24 lg:pb-24 lg:flex-row">
          <div className="w-full lg:w-1/2 py-14 lg:py-10 px-5 text-center lg:text-start">
            <h1 className="text-4xl lg:text-5xl font-bold">Make remote work</h1>
            <p className="text-secondary my-5">
              Get your team sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.
            </p>
            <Link
              href="#"
              className="py-3 px-6 inline-block bg-accent text-primary rounded-xl"
            >
              Learn more
            </Link>
            <div className="flex w-full lg:w-10/12 justify-between items-center mt-32">
              {clientsLogo.map((client) => (
                <div key={client.id}>
                  <img src={client.url} alt={client.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-5">
            <img
              src="/images/image-hero-desktop.png"
              alt="hero"
              className="hidden lg:block w-9/12 mx-auto"
            />
            <img
              src="/images/image-hero-mobile.png"
              alt="hero"
              className="lg:hidden"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
