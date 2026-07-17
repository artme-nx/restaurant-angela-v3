import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";
import {
  RosemarySprig,
  OliveBranch,
  SeaFennel,
  CaperFlower,
  LaurelSprig,
  LavenderSprig,
  PinMark,
} from "@/components/botanical";

const MENU: {
  chapter: string;
  numeral: string;
  items: { latin: string; name: string; note: string }[];
}[] = [
  {
    chapter: "Iz mora",
    numeral: "III · A",
    items: [
      {
        latin: "Loligo a gradelis",
        name: "Lignje s gradela",
        note: "Cijele lignje s gradela, izuzetno svježe i nježne — gosti ih redovito izdvajaju u recenzijama.",
      },
      {
        latin: "Palaemon a gradelis",
        name: "Škampi i kozice s gradela",
        note: "Morski plodovi pripremljeni jednostavno, na žaru — gosti ih ocjenjuju izvrsnima uz miris ružmarina.",
      },
      {
        latin: "Discus piscium duo",
        name: "Riblja plata za dvoje",
        note: "Izbor svježe ribe s dnevnog ulova, poslužen s prilogom.",
      },
      {
        latin: "Farinacea viridis cum crustaceis",
        name: "Zelena tjestenina sa škampima",
        note: "Domaća tjestenina u zelenom umaku, s cijelim škampima.",
      },
    ],
  },
  {
    chapter: "S gradela",
    numeral: "III · B",
    items: [
      {
        latin: "Carnes mixtae a gradelis",
        name: "Miješano meso s gradela",
        note: "Kućni adut — miješano meso pečeno na žaru do savršenstva, sočno i obilno.",
      },
      {
        latin: "Discus carnium",
        name: "Mesna plata",
        note: "Obilna plata mesa s pomfritom i pirjanom rižom, za dijeljenje.",
      },
    ],
  },
];

const REVIEWS = [
  {
    quote:
      "Daleko najbolji restoran u Sv. Filipu i Jakovu. Roštilj je bio pun pogodak — svako meso pečeno do savršenstva, sočno i ukusno.",
    attr: "Damir Stanin, Google",
    rotate: "-2deg",
  },
  {
    quote:
      "Za razliku od ostalih restorana, ovdje dobijete dobre porcije i ukusnu hranu, a cijene su prihvatljive.",
    attr: "Ena Loborec, Google",
    rotate: "1.5deg",
  },
  {
    quote:
      "Lijepo mjesto, cijene prihvatljive, brza usluga, fina i ukusna hrana.",
    attr: "Ninika Kristofić Kodba, Google",
    rotate: "-1deg",
  },
  {
    quote:
      "Hrana je odlična i dovoljno začinjena. Osoblje je jako ljubazno i pristupačno.",
    attr: "Money&Stuff, Google",
    rotate: "2deg",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <RevealInit />

      <main className="relative">
        {/* I. NASLOVNICA — album cover */}
        <section
          id="naslovnica"
          className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
          style={{ background: "var(--background)" }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div
            className="pointer-events-none absolute inset-4 md:inset-10 border"
            style={{ borderColor: "var(--border)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-6 md:inset-12 border border-dashed"
            style={{ borderColor: "var(--moss-pale)" }}
            aria-hidden="true"
          />

          <RosemarySprig className="reveal h-40 w-auto md:h-56 mb-6 opacity-90" />

          <p className="text-label reveal w-full min-w-0 max-w-[16rem] mx-auto sm:max-w-none" style={{ color: "var(--terracotta)" }}>
            Tabula I · Uz Pašmanski kanal
          </p>
          <h1 className="reveal font-display text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl md:text-8xl" style={{ color: "var(--foreground)" }}>
            Angela
          </h1>
          <p className="reveal font-script mt-3 text-2xl md:text-3xl" style={{ color: "var(--moss)" }}>
            restoran &amp; grill na moru
          </p>
          <p className="reveal mt-5 max-w-md text-base md:text-lg" style={{ color: "var(--muted-foreground)" }}>
            Sveti Filip i Jakov, uz Biograd na moru — svježa riba i plodovi mora,
            meso s gradela, na tihoj pješačkoj uličici korak od obale.
          </p>

          <div className="reveal mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="tel:+38523389254"
              className="px-7 py-3 text-sm uppercase tracking-[0.14em] transition-colors"
              style={{ background: "var(--button-primary-bg)", color: "var(--button-primary-fg)" }}
            >
              Rezerviraj stol · +385 23 389 254
            </a>
            <a
              href="#jelovnik"
              className="border px-7 py-3 text-sm uppercase tracking-[0.14em] transition-colors"
              style={{ borderColor: "var(--button-ghost-border)", color: "var(--moss)" }}
            >
              Pogledaj jelovnik
            </a>
          </div>

          <p className="text-label reveal mt-12 w-full min-w-0 max-w-[15rem] mx-auto sm:max-w-none" style={{ color: "var(--muted-foreground)" }}>
            Ul. kralja Petra Krešimira IV · Sveti Filip i Jakov
          </p>
        </section>

        {/* II. PRIČA — about, herbarium leaf with pinned specimen */}
        <section id="prica" className="relative px-6 py-24 md:py-32" style={{ background: "var(--muted)" }}>
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="reveal-rotate relative mx-auto w-full max-w-sm" data-rotate="-2">
              <div className="leaf-paper deckle-edge relative px-8 py-12">
                <div className="washi-tape absolute -top-3 left-10 h-7 w-20 -rotate-6" />
                <div className="washi-tape absolute -bottom-3 right-8 h-7 w-16 rotate-3" />
                <OliveBranch className="mx-auto h-24 w-auto" />
                <div className="mt-6 flex justify-center">
                  <CaperFlower className="h-16 w-16" />
                </div>
                <p className="text-label mt-6 text-center" style={{ color: "var(--moss)" }}>
                  Olea europaea &amp; Capparis spinosa
                </p>
                <p className="font-script mt-1 text-center text-lg" style={{ color: "var(--terracotta)" }}>
                  maslina i kapar, jadranska obala
                </p>
              </div>
            </div>

            <div className="reveal">
              <p className="text-label" style={{ color: "var(--terracotta)" }}>
                Tabula II · Priča
              </p>
              <h2 className="font-display mt-2 text-4xl md:text-5xl" style={{ color: "var(--foreground)" }}>
                Konoba na pješačkoj uličici
              </h2>
              <div className="ink-divider my-6 w-24" />
              <p className="text-base leading-relaxed md:text-lg" style={{ color: "var(--foreground)" }}>
                Angela je opušten restoran za ribu i meso s gradela u samom srcu
                Svetog Filipa i Jakova, na mirnoj pješačkoj uličici bez prometa,
                nekoliko koraka od mora. Vani su stolovi na ulici, u sjeni
                markiza; unutra prostor nosi topao, gotovo talijanski
                trattoria ugođaj — gosti ga opisuju kao skriveni dragulj među
                turističkim zamkama mjesta.
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: "var(--muted-foreground)" }}>
                Kuhinja se oslanja na svježu ribu i plodove mora s dnevnog
                ulova te meso s gradela, uz cijene koje gosti redovito
                opisuju kao povoljne u usporedbi s drugim ribljim
                restoranima na jadranskoj obali. Angela se dosljedno nalazi
                među najbolje ocijenjenim restoranima Svetog Filipa i Jakova
                na Tripadvisoru.
              </p>
            </div>
          </div>
        </section>

        {/* III. JELOVNIK — specimen catalog, not a photo grid */}
        <section id="jelovnik" className="relative px-6 py-24 md:py-32" style={{ background: "var(--background)" }}>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-label reveal" style={{ color: "var(--terracotta)" }}>
              Tabula III · Katalog specimena
            </p>
            <h2 className="reveal font-display mt-2 text-4xl md:text-5xl" style={{ color: "var(--foreground)" }}>
              Jelovnik
            </h2>
            <p className="reveal mx-auto mt-4 max-w-xl text-base md:text-lg" style={{ color: "var(--muted-foreground)" }}>
              Izabrani listovi iz jelovnika — svaki jelo katalogizirano poput
              specimena, s bilješkom gostiju gdje postoji. Cjeloviti jelovnik
              dostupan je u restoranu.
            </p>
          </div>

          <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-16">
            {MENU.map((group) => (
              <div key={group.chapter}>
                <div className="reveal mb-6 flex items-center gap-4">
                  <span className="text-label" style={{ color: "var(--moss)" }}>
                    {group.numeral}
                  </span>
                  <span className="ink-divider flex-1" />
                  <span className="font-display text-2xl md:text-3xl" style={{ color: "var(--foreground)" }}>
                    {group.chapter}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="reveal specimen-label-border leaf-paper flex flex-col gap-2 px-6 py-6 text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-xl md:text-[1.4rem]" style={{ color: "var(--foreground)" }}>
                          {item.name}
                        </span>
                        <PinMark className="mt-1.5 shrink-0" />
                      </div>
                      <span className="text-sm italic" style={{ color: "var(--moss)", fontFamily: "var(--type-label)" }}>
                        {item.latin}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IV. GLASOVI GOSTIJU — pinned handwritten review cards */}
        <section id="glasovi" className="relative px-6 py-24 md:py-32" style={{ background: "var(--muted)" }}>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-label reveal" style={{ color: "var(--terracotta)" }}>
              Tabula IV · Zabilješke posjetitelja
            </p>
            <h2 className="reveal font-display mt-2 text-4xl md:text-5xl" style={{ color: "var(--foreground)" }}>
              Glasovi gostiju
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2">
            {REVIEWS.map((r) => (
              <div
                key={r.quote}
                className="reveal-rotate leaf-paper relative px-7 py-8"
                data-rotate={r.rotate.replace("deg", "")}
              >
                <div className="washi-tape absolute -top-3 left-8 h-6 w-16 -rotate-3" />
                <p className="font-script text-2xl leading-snug" style={{ color: "var(--foreground)" }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="text-label mt-4" style={{ color: "var(--moss)" }}>
                  — {r.attr}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* V. UVALA I MJESTO — geography plate */}
        <section id="mjesto" className="relative px-6 py-24 md:py-32" style={{ background: "var(--background)" }}>
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="reveal">
              <p className="text-label" style={{ color: "var(--terracotta)" }}>
                Tabula V · Zemljovid uvale
              </p>
              <h2 className="font-display mt-2 text-4xl md:text-5xl" style={{ color: "var(--foreground)" }}>
                Sveti Filip i Jakov
              </h2>
              <div className="ink-divider my-6 w-24" />
              <p className="text-base leading-relaxed md:text-lg" style={{ color: "var(--foreground)" }}>
                Malo mjesto na obali Pašmanskog kanala, tri kilometra od
                Biograda na moru i dvadesetak kilometara od Zadra. Uz
                pješačku promenadu koja vodi do susjednog Turnja proteže se
                plaža od pijeska, šljunka i kamena, a stara jezgra mjesta
                čuva graditeljsko naslijeđe iz 16. i 17. stoljeća.
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: "var(--muted-foreground)" }}>
                U srcu mjesta stoji crkva sv. Mihovila iz 18. stoljeća, a
                nedaleko i Borelli park — spomenik hortikulture kojemu
                herbarij ovog restorana duguje ime. Primorska makija koja
                raste uz obalu — ružmarin, kadulja, lavanda, morski kopar —
                inspiracija je za specimene na ovim stranicama.
              </p>
            </div>

            <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-6">
              <div className="reveal-rotate leaf-paper flex flex-col items-center px-4 py-6" data-rotate="-3">
                <SeaFennel className="h-28 w-auto" />
                <p className="text-label mt-3 text-center" style={{ color: "var(--moss)" }}>
                  Crithmum maritimum
                </p>
                <p className="mt-1 text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                  morski kopar, stjenovita obala
                </p>
              </div>
              <div className="reveal-rotate leaf-paper flex flex-col items-center px-4 py-6" data-rotate="2">
                <LavenderSprig className="h-28 w-auto" />
                <p className="text-label mt-3 text-center" style={{ color: "var(--moss)" }}>
                  Lavandula angustifolia
                </p>
                <p className="mt-1 text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                  lavanda, dalmatinska makija
                </p>
              </div>
              <div className="reveal-rotate leaf-paper col-span-2 flex flex-col items-center px-4 py-6" data-rotate="-1.5">
                <LaurelSprig className="h-16 w-auto" />
                <p className="text-label mt-3 text-center" style={{ color: "var(--moss)" }}>
                  Laurus nobilis
                </p>
                <p className="mt-1 text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                  lovor, Borelli park
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VI. POSJET — accession card / contact */}
        <section id="posjet" className="relative px-6 py-24 md:py-32" style={{ background: "var(--muted)" }}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-label reveal" style={{ color: "var(--terracotta)" }}>
              Tabula VI · Posjet
            </p>
            <h2 className="reveal font-display mt-2 text-4xl md:text-5xl" style={{ color: "var(--foreground)" }}>
              Rezervirajte stol
            </h2>
          </div>

          <div className="reveal leaf-paper deckle-edge relative mx-auto mt-14 max-w-xl px-8 py-12 text-center">
            <div className="washi-tape absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-1" />
            <p className="text-label" style={{ color: "var(--moss)" }}>
              Broj primjerka · MMXXVI
            </p>
            <p className="font-display mt-4 text-2xl" style={{ color: "var(--foreground)" }}>
              Restoran Angela
            </p>
            <p className="mt-2 text-base" style={{ color: "var(--muted-foreground)" }}>
              Ul. kralja Petra Krešimira IV
              <br />
              23207 Sveti Filip i Jakov, Hrvatska
            </p>
            <div className="ink-divider my-6 w-20 mx-auto" />
            <a
              href="tel:+38523389254"
              className="font-display block text-2xl tracking-wide"
              style={{ color: "var(--terracotta)" }}
            >
              +385 23 389 254
            </a>
            <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              Otvoreno tijekom sezone · rezervacije preporučene, osobito za
              večernje termine.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+38523389254"
                className="px-7 py-3 text-sm uppercase tracking-[0.14em]"
                style={{ background: "var(--button-primary-bg)", color: "var(--button-primary-fg)" }}
              >
                Nazovi restoran
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Restoran+Angela+Sveti+Filip+i+Jakov"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-7 py-3 text-sm uppercase tracking-[0.14em]"
                style={{ borderColor: "var(--button-ghost-border)", color: "var(--moss)" }}
              >
                Otvori na karti
              </a>
            </div>
          </div>
        </section>

        <footer className="relative border-t px-6 py-10 text-center" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
          <p className="font-script text-xl" style={{ color: "var(--moss)" }}>
            Angela · Herbarium
          </p>
          <p className="text-label mt-2" style={{ color: "var(--muted-foreground)" }}>
            Sveti Filip i Jakov · +385 23 389 254
          </p>
          <p className="mt-4 text-xs" style={{ color: "var(--muted-foreground)" }}>
            © {new Date().getFullYear()} Restoran Angela. Sva prava pridržana.
          </p>
        </footer>
      </main>
    </>
  );
}
