import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "ready" | "error";

const DOG_API = "https://dog.ceo/api/breeds/image/random";
const MAX_ATTEMPTS = 10;

function preloadImage(
  url: string,
): Promise<{ url: string; w: number; h: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      resolve({ url, w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => reject(new Error("Image failed to load"));
    img.src = url;
  });
}

export default function NotFound() {

  useEffect(() => {
    document.title = "Uh oh, 404!";
    window.scrollTo(0, 0);
  }, []);

  const [dogImageUrl, setDogImageUrl] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [attempts, setAttempts] = useState<number>(0);
  const [error, setError] = useState<string>("");

  async function fetchLandscapeDog() {
    setStatus("loading");
    setError("");
    setAttempts(0);

    for (let i = 1; i <= MAX_ATTEMPTS; i++) {
      setAttempts(i);

      try {
        const res = await fetch(DOG_API, { cache: "no-store" });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();

        const { url, w, h } = await preloadImage(data.message);

        if (w >= h) {
          setDogImageUrl(url);
          setStatus("ready");
          return;
        }
      } catch (e) {
        if (i === MAX_ATTEMPTS) {
          setStatus("error");
          setError(
            "Couldn't fetch a landscape dog image right now. Try again.",
          );
          console.log("Error fetching dog image:", e);
          return;
        }
      }
    }

    setStatus("error");
    setError("Couldn’t find a landscape image after several attempts.");
  }

  useEffect(() => {
    fetchLandscapeDog();
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-[#020f05] to-[#001a0a] text-green-200 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-green-500/20 bg-black/60 backdrop-blur-xl p-6 shadow-2xl shadow-green-500/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-green-400">
              404
            </h1>

            <p className="mt-1 text-green-300/80">
              I could not find the page you were looking for...
              <br />
              but I found a <strong className="text-green-400">
                pupper
              </strong>{" "}
              instead!
            </p>
          </div>

          <div className="text-right text-xs text-green-400/60">
            {status === "loading" ? (
              <span>
                Searching… ({attempts}/{MAX_ATTEMPTS})
              </span>
            ) : (
              <span>source: dog.ceo</span>
            )}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-green-500/20 bg-black">
          {dogImageUrl ? (
            <img
              src={dogImageUrl}
              alt="Random dog"
              className="block w-full h-72 sm:h-80 border-2 rounded-xl border-green-500/40 object-top"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="h-72 sm:h-80 flex items-center justify-center">
              <div className="flex items-center gap-3 text-green-300">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-green-900 border-t-green-400" />
                <span>
                  {status === "error" ? "No dog today 😭" : "Loading dog…"}
                </span>
              </div>
            </div>
          )}
        </div>

        {error ? (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        ) : (
          <p className="mt-4 text-sm text-green-400/60">
            Tip: landscape-only filter is applied automatically.
          </p>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={fetchLandscapeDog}
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-xl 
                       bg-green-500 px-4 py-2.5 font-semibold text-black
                       shadow-lg shadow-green-500/30 transition
                       hover:bg-green-400
                       hover:shadow-green-400/50
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "loading" ? "Fetching…" : "Fetch new dog"}
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl 
                       border border-green-500/30 bg-black/40 px-4 py-2.5 
                       font-semibold text-green-200 transition
                       hover:bg-green-500/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
