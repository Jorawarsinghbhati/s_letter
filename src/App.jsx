import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Heart,
  HeartHandshake,
  MessageCircleHeart,
  Sparkles,
  Stars,
} from "lucide-react";

const promises = [
  {
    number: "01",
    title: "Pehle tumhari baat sununga",
    detail:
      "Apna jawab sochne ke liye nahi, balki sach mein samajhne ke liye ki tumhe kaisa laga.",
    icon: MessageCircleHeart,
  },
  {
    number: "02",
    title: "Apne actions se better banunga",
    detail:
      "Sorry tabhi meaningful hai jab aage se meri chhoti-chhoti cheezon mein bhi badlav dikhe.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Tumhe time aur space dunga",
    detail:
      "Tumhe abhi reply dene ki zaroorat nahi. Jitna time chahiye, aaram se lo.",
    icon: Stars,
  },
];

function App() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [noteSent, setNoteSent] = useState(false);

  const openLetter = () => {
    setLetterOpen(true);
    window.setTimeout(() => {
      document
        .getElementById("letter")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf8f3] text-[#352722]">
      <div className="pointer-events-none absolute -left-48 top-32 h-96 w-96 rounded-full bg-[#f7ded8]/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 top-[34rem] h-96 w-96 rounded-full bg-[#f5e8c9]/55 blur-3xl" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f3e5dc] text-[#bd6b60] transition-transform group-hover:rotate-[-12deg]">
            <Heart size={17} fill="currentColor" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            just for you
          </span>
        </a>
        <a
          href="#a-little-more"
          className="hidden items-center gap-2 text-sm font-medium text-[#74625b] transition hover:text-[#bd6b60] sm:flex"
        >
          A little more
          <ArrowDown size={15} />
        </a>
        <span className="rounded-full border border-[#e9ded5] bg-white/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#907e74]">
          made with love ♡
        </span>
      </header>

      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 sm:px-10 md:gap-8 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:pb-28 lg:pt-16"
      >
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#eedfd5] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a66e60] shadow-sm shadow-[#684b3b]/[0.03]">
            <Sparkles size={14} />
            Pooja ke liye, dil se
          </div>
          <h1 className="font-display text-[3.55rem] font-medium leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[5.55rem]">
            Sorry, Pooja,
            <br />
            <span className="italic text-[#bf7165]">meri jaan.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#796b63] sm:text-lg sm:leading-8">
            Baby, main hum dono ke baare mein aur apni galti ke baare mein soch
            raha hoon. Mujhe sach mein afsos hai, aur main dil se tumse maafi
            maangna chahta hoon.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={openLetter}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#bc7064] px-6 text-sm font-semibold text-white shadow-lg shadow-[#bc7064]/20 transition hover:-translate-y-0.5 hover:bg-[#a85f55] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc7064]"
            >
              Mera dil padh lo, bacha
              <ArrowRight size={16} />
            </button>
            <span className="flex items-center justify-center gap-2 px-2 py-2 text-sm text-[#9b8c83] sm:justify-start">
              koi pressure nahi, bas dil se
              <Heart size={14} className="text-[#cc8b7b]" />
            </span>
          </div>
          <div className="mt-12 flex items-center gap-3 border-t border-[#e9ded5] pt-6">
            <div className="flex -space-x-2">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#fbf8f3] bg-[#f2d9d3] text-sm">
                ☀️
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#fbf8f3] bg-[#f1e4c8] text-sm">
                🌷
              </span>
            </div>
            <p className="text-xs leading-5 text-[#93847a]">
              meri favorite Pooja ke liye
              <br />
              <span className="font-medium text-[#6b5b53]">
                jab tum ready ho, babliya
              </span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[31rem] items-center justify-center py-4 sm:py-8 lg:py-0">
          <div className="absolute left-[8%] top-[13%] h-16 w-16 rounded-full border border-[#edddd1] bg-white/40" />
          <div className="absolute bottom-[12%] right-[4%] h-24 w-24 rounded-full border border-[#edddd1] bg-[#f7e9dc]/40" />
          <div className="absolute right-[15%] top-[7%] text-[#d3a18f]">
            <Sparkles size={21} />
          </div>
          <div className="absolute bottom-[25%] left-[5%] text-[#d3a18f]">
            <Sparkles size={17} />
          </div>

          <div className="relative w-[min(100%,26rem)] rotate-[2deg] rounded-[2rem] border border-white/90 bg-white/65 p-3 shadow-[0_35px_90px_-40px_rgba(87,58,43,0.28)] backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.55rem] bg-[#f0dfd4]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_30%,rgba(255,255,255,0.48),transparent_60%)]" />
              <div className="relative flex aspect-[4/4.15] flex-col items-center justify-center px-8 py-10 text-center">
                <span className="mb-5 grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full border border-white/70 bg-white/60 text-[#c8786d] shadow-sm">
                  <Heart size={30} strokeWidth={1.35} fill="currentColor" />
                </span>
                <p className="font-display text-4xl italic text-[#76564b]">
                  Main tumhe chunta hoon.
                </p>
                <p className="mt-3 max-w-[15rem] text-sm leading-6 text-[#876d62]">
                  Sirf achhe palon mein nahi, mushkil waqt mein bhi tumhara saath
                  aur tumse seekhna chahta hoon.
                </p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#a77b6c]">
                  <span className="h-px w-8 bg-[#cda99a]" />
                  hamesha pyaar se
                  <span className="h-px w-8 bg-[#cda99a]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1 right-[4%] rotate-[-5deg] rounded-xl border border-[#eddfd3] bg-[#fffdf9] px-4 py-3 shadow-lg shadow-[#795744]/10">
            <div className="flex items-center gap-2 text-xs font-medium text-[#7b685c]">
              <Heart size={13} className="text-[#bd7064]" fill="currentColor" />
              tumhara biggest fan, hamesha
            </div>
          </div>
        </div>
      </section>

      <section
        id="letter"
        className="relative mx-auto max-w-4xl scroll-mt-12 px-6 pb-20 sm:px-10 lg:px-16"
      >
        <div
          className={`overflow-hidden rounded-[2rem] border border-[#eee2d8] bg-[#fffdf9] shadow-[0_24px_70px_-45px_rgba(80,54,39,0.24)] transition-all duration-700 ${
            letterOpen
              ? "max-h-[36rem] translate-y-0 opacity-100"
              : "max-h-0 translate-y-4 border-transparent opacity-0"
          }`}
          aria-hidden={!letterOpen}
        >
          <div className="p-7 sm:p-11">
            <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b07164]">
              <Heart size={14} fill="currentColor" />
              mere dil se
            </div>
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Pooja, meri baby...
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-[#76675f]">
              <p>
                Baby, mujhe sach mein bahut sorry hai. Maa ki kasam, usse maine
                tere baare mein poochhne ke alawa kuch baat nahi ki. Mujhe samajh
                aa raha hai ki phir bhi tumhe bura laga, aur tum deserve karti ho
                ki main tumhari feelings ko aur dhyaan se samjhun.
              </p>
              <p>
                Pakka baby, aage se kisi ladki se faltu ya personal baat nahi
                karunga. Aur agar kabhi zaroori baat hui, toh tumse kuch
                chhupaunga nahi—seedha aur honestly bataunga. Ye baat dobara na
                ho, iska dhyaan apne actions se rakhunga. Tum mere liye bahut
                important ho, bacha.
              </p>
            </div>
            <p className="mt-7 font-display text-2xl italic text-[#b07164]">
              I love you, babliya. Dil se sorry. ♡
            </p>
          </div>
        </div>
      </section>

      <section
        id="a-little-more"
        className="relative z-10 border-y border-[#eee4da] bg-[#f7f2eb]/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b07164]">
              sirf sorry bolna kaafi nahi
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Ab se main
              <br />
              <span className="italic text-[#bf7165]">ye karunga.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#85766d] sm:text-base">
              Baby, mujhe pata hai sirf sorry bolna kaafi nahi. Main apne
              actions se tumhe dikhana chahta hoon ki tumhari baat samajh raha
              hoon.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {promises.map(({ number, title, detail, icon: Icon }) => (
              <article
                key={number}
                className="group rounded-[1.5rem] border border-[#eee2d8] bg-[#fffdf9] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#78533e]/[0.06] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#c5a394]">
                    {number}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7eae3] text-[#bf7165] transition group-hover:rotate-[-8deg]">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#83746b]">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-[#eddfd3] bg-[#fffdf9]/80 px-5 py-4 text-center text-sm leading-6 text-[#827269]">
            <Heart
              size={17}
              className="shrink-0 text-[#bd7064]"
              fill="currentColor"
            />
            <p>
              Tumhari feelings mere liye important hain, Pooja. Main tumhe
              samajhna chahta hoon, behas jeetna nahi.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[#efdcd1]">
          <Heart size={110} strokeWidth={0.7} />
        </div>
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b07164]">
            jab tumhara mann ho
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Main yahin hoon,
            <br />
            <span className="italic text-[#bf7165]">meri babliya.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#85766d] sm:text-base">
            Abhi reply karne ki koi jaldi nahi. Jab tumhara mann ho, main
            tumhari baat sunne ke liye yahin hoon.
          </p>
          <button
            onClick={() => setNoteSent(true)}
            disabled={noteSent}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#d8b8a9] bg-white/70 px-6 text-sm font-semibold text-[#9e6055] transition hover:border-[#bc7064] hover:bg-[#bc7064] hover:text-white disabled:cursor-default disabled:border-[#d8b8a9] disabled:bg-[#f4e8df] disabled:text-[#9e6055]"
          >
            {noteSent ? (
              <>
                <Check size={16} />
                I’ll be right here
              </>
            ) : (
              <>
                Ek chhota sa heart chhod do
                <Heart size={15} />
              </>
            )}
          </button>
          {noteSent && (
            <p className="mt-3 text-xs text-[#9a897f]" role="status">
              Bas yaad dilane ke liye: main yahin hoon, jab tum ready ho. ♡
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-[#eee4da] px-6 py-7 text-center">
        <p className="flex items-center justify-center gap-1.5 text-xs text-[#98877c]">
          Pooja ke liye, dil se banaya
          <Heart size={12} className="text-[#bf7165]" fill="currentColor" />
        </p>
      </footer>
    </main>
  );
}

export default App;
