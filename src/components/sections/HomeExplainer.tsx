import Link from "next/link";
import { Container } from "../shared/Container";

export function HomeExplainer() {
  return (
    <section id="what-is-iptv" className="bg-[#050706] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.08em] text-primary">
            IPTV service explained
          </p>
          <h2 className="mt-2.5 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Is IPTV?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            IPTV sends live TV and on-demand video over your internet connection to a player on a TV, streaming device, or computer you already own. It does not require a cable box, and TryIPTV does not require its own app.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            After you choose a plan or the 24-hour trial, TryIPTV sends Xtream Codes or M3U login details, typically within 5–15 minutes. Paid plans start at $16, include 2 simultaneous connections, and do not renew automatically.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link href="/guides/what-is-iptv" className="text-primary hover:underline">
              Read what IPTV is
            </Link>
            <Link href="/setup" className="text-primary hover:underline">
              Read the setup guide
            </Link>
            <Link href="/pricing" className="text-primary hover:underline">
              Compare IPTV plans
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
