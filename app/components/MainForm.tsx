"use client";
import { useState, useRef } from "react";

export default function MainPage() {
  const [total, setTotal] = useState(40);
  const [attended, setAttended] = useState(30);
  const [required, setRequired] = useState(75);

  const [percent, setPercent] = useState<number | null>(null);
  const [allowed, setAllowed] = useState<number | null>(null);
  const [taken, setTaken] = useState<number | null>(null);
  const [need, setNeed] = useState<number | string | null>(null);
  const [status, setStatus] = useState("");
  const [advice, setAdvice] = useState(
    "Result yahan dikhega. Click calculate."
  );

  const resultRef = useRef<HTMLDivElement | null>(null);

  const calc = () => {
    const t = Math.max(0, Math.floor(total));
    const a = Math.max(0, Math.floor(attended));
    const r = Math.min(Math.max(required, 0), 100);

    if (t === 0) {
      setPercent(null);
      setStatus("Total classes must be > 0.");
      setAllowed(null);
      setTaken(null);
      setNeed(null);
      setAdvice("Total 0 pe attendance calculate nahi hoti jaani.");
      return;
    }

    const percentNow = (a / t) * 100;
    setPercent(Number(percentNow.toFixed(2)));

    const minRequiredAtt = Math.ceil((r / 100) * t);
    const bunsAllowed = Math.max(0, t - minRequiredAtt);
    const bunsTaken = Math.max(0, t - a);
    setAllowed(bunsAllowed);
    setTaken(bunsTaken);

    let futureNeeded: number | string = 0;
    if (percentNow >= r) {
      futureNeeded = 0;
    } else if (r === 100) {
      futureNeeded = "Impossible";
    } else {
      futureNeeded = Math.ceil(((r / 100) * t - a) / (1 - r / 100));
      futureNeeded = Math.max(0, futureNeeded);
    }
    setNeed(futureNeeded);

    if (percentNow >= r) {
      setStatus("Safe 😎");
      setAdvice("Aaram se bethe ho, tum required se upar ho.");
    } else {
      setStatus("Shortfall 😬");
      setAdvice(
        futureNeeded === "Impossible"
          ? "Required 100% hai — attend har class forever tabhi possible."
          : `Attend at least ${futureNeeded} future class${typeof futureNeeded === "number" && futureNeeded > 1 ? "es" : ""} to reach ${r}%`
      );
    }

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const saveData = () => {
    const data = { total, attended, required };
    localStorage.setItem("duet-attendance", JSON.stringify(data));
    setAdvice("Saved successfully jaani! 🎉");
  };

  const reset = () => {
    setTotal(40);
    setAttended(30);
    setRequired(75);
    setPercent(null);
    setAllowed(null);
    setTaken(null);
    setNeed(null);
    setStatus("");
    setAdvice("Reset complete. Numbers phir se daalo jaani.");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] font-sans text-slate-700">
      <div className="pointer-events-none fixed inset-0 overflow-hidden select-none z-0">
        <div className="absolute left-[6%] top-[10%] text-4xl animate-[float_9s_ease-in-out_infinite]">📚</div>
        <div className="absolute left-[85%] top-[20%] text-4xl animate-[float_11s_ease-in-out_infinite]">😴</div>
        <div className="absolute left-[20%] top-[70%] text-4xl animate-[float_7s_ease-in-out_infinite]">🚌</div>
        <div className="absolute left-[70%] top-[78%] text-4xl animate-[float_12s_ease-in-out_infinite]">🎧</div>
        <div className="absolute left-[45%] top-[3%] text-4xl animate-[float_10s_ease-in-out_infinite]">🤓</div>
      </div>

      <main className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 bg-white/80 rounded-2xl shadow-2xl overflow-hidden">
        <section className="p-9 flex flex-col gap-5 bg-white/70 backdrop-blur">
          <div className="flex gap-3 items-center">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md bg-[conic-gradient(from_160deg,#ffd6a5,#ffadad,#caffbf)]">DU</div>
            <div>
              <h1 className="text-xl font-semibold">DUET Bunk-o-Meter</h1>
              <p className="text-sm text-slate-500">Type your numbers — aur dekh kitna chill kar sakte ho.</p>
            </div>
          </div>

          <div className="bg-white/90 p-4 rounded-xl shadow">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs font-medium">Total Classes</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  value={total}
                  onChange={(e) => setTotal(Number(e.target.value))}
                />
              </div>

              <div className="flex-1 min-w-[150px]">
                <label className="text-xs font-medium">Classes Attended</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  value={attended}
                  onChange={(e) => setAttended(Number(e.target.value))}
                />
              </div>

              <div className="min-w-[120px]">
                <label className="text-xs font-medium">Required %</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  value={required}
                  onChange={(e) => setRequired(Number(e.target.value))}
                />
              </div>

              <button
                onClick={calc}
                className="px-5 py-2 bg-gradient-to-r from-rose-500 to-orange-400 text-white rounded-lg shadow cursor-pointer"
              >
                Calculate
              </button>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="bg-white/90 p-3 rounded-xl shadow flex-1 min-w-[160px]">
              <strong className="text-sm">Quick Actions</strong>
              <div className="flex mt-2 gap-2">
                <button
                  onClick={saveData}
                  className="px-4 py-1.5 bg-rose-400 text-white rounded-lg shadow cursor-pointer"
                >
                  Save
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-1.5 bg-blue-400 text-white rounded-lg shadow cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-white/90 p-3 rounded-xl shadow flex-1 min-w-[160px]">
              <strong className="text-sm">Vibe</strong>
              <p className="text-xs text-slate-500 mt-1">Background emojis float softly in calm rhythm.</p>
            </div>
          </div>

          <div className="text-xs text-slate-500 mt-auto flex justify-between">
            <span>Made with ☕ & 🎶</span>
            <span>© Fahad Ahmed</span>
          </div>
        </section>

        <aside
          ref={resultRef}
          className="p-7 bg-white/70 flex flex-col gap-4 text-center md:text-left"
        >
          <div className="bg-white/90 p-4 rounded-xl shadow">
            <p className="text-xs text-slate-500">Your attendance</p>
            <p className="text-4xl font-bold mt-1">
              {percent === null ? "—" : `${percent}%`}
            </p>
            <p className="text-sm text-slate-500">{status}</p>
          </div>

          <div className="bg-white/90 p-4 rounded-xl shadow">
            <p className="text-xs text-slate-500">Bunk Summary</p>
            <div className="grid grid-cols-3 gap-3 mt-2 text-sm font-semibold">
              <div>
                <p className="text-slate-500 text-xs">Allowed</p>
                <p>{allowed ?? "—"}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Taken</p>
                <p>{taken ?? "—"}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Need</p>
                <p>{need ?? "—"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 p-4 rounded-xl shadow">
            <p className="text-sm text-slate-600">{advice}</p>
          </div>
        </aside>
      </main>
    
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.9; }
          50% { transform: translateY(-28px) rotate(8deg); opacity: 1; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
