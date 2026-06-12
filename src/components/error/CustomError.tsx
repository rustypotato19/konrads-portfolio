import { useState, useEffect } from "react";
import PageContainer from "../PageContainer";
import { useNavigate } from "react-router";

type Status = "idle" | "loading" | "ready" | "error";

const CAT_API = "https://api.thecatapi.com/v1/images/search";
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

export default function CustomError({
  errCode,
  errTitle,
}: {
  errCode: number;
  errTitle: string;
}) {
  const navigate = useNavigate();

  const [catImageUrl, setCatImageUrl] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [attempts, setAttempts] = useState<number>(0);
  const [error, setError] = useState<string>("");

  async function fetchLandscapeCat() {
    setStatus("loading");
    setError("");
    setAttempts(0);

    for (let i = 1; i <= MAX_ATTEMPTS; i++) {
      setAttempts(i);

      try {
        const res = await fetch(CAT_API, { cache: "no-store" });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();

        // Cat API returns an array
        const image = data[0];
        const { url, w, h } = await preloadImage(image.url);

        if (w >= h) {
          setCatImageUrl(url);
          setStatus("ready");
          return;
        }
      } catch (e) {
        if (i === MAX_ATTEMPTS) {
          setStatus("error");
          setError(
            "Couldn't fetch a landscape cat image right now. Try again.",
          );
          console.log("Error fetching cat image:", e);
          return;
        }
      }
    }

    setStatus("error");
    setError("Couldn't find a landscape image after several attempts.");
  }

  useEffect(() => {
    function fetch(): void {
      fetchLandscapeCat();
    }
    fetch();
  }, []);

  return (
    <PageContainer>
      <div className="w-full h-full flex justify-center items-center text-white">
        <div className="h-fit w-fit max-w-150 aspect-square flex flex-col justify-center items-center p-16 border-black border-2 rounded-[50px] bg-(--p-green)">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-(--s-h-green)">
                {errCode}: {errTitle}
              </h1>

              <p className="mt-1 text-(--s-h-green)/80">
                The page ran into an error, my bad!
                <br />
                Here's a <strong className="text-(--s-h-green)">
                  kitty
                </strong>{" "}
                to make you feel better!
              </p>
            </div>

            <div className="text-right text-xs text-(--s-h-green)/60">
              {status === "loading" ? (
                <span>
                  Searching… ({attempts}/{MAX_ATTEMPTS})
                </span>
              ) : (
                <span>source: thecatapi.com</span>
              )}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-(--p-green)/20 bg-black">
            {catImageUrl ? (
              <img
                src={catImageUrl}
                alt="Random cat"
                className="block w-full h-72 sm:h-80 border-2 rounded-xl border-(--p-green)/40 object-top"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="min-w-100 h-72 sm:h-80 flex items-center justify-center">
                <div className="flex items-center gap-3 text-green-300">
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-(--p-green) border-t-(--p-t-green)" />
                  <span>
                    {status === "error" ? "No cat today 😿" : "Loading cat…"}
                  </span>
                </div>
              </div>
            )}
          </div>

          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={fetchLandscapeCat}
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-xl 
                       bg-(--s-h-green) px-4 py-2.5 font-semibold text-black
                       shadow-lg shadow-(--s-h-green)/30 transition
                       hover:bg-(--s-green)
                       hover:shadow-(--s-h-green)/50
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? "Fetching…" : "Fetch new cat"}
            </button>

            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center rounded-xl 
                       border border-(--p-green)/30 bg-black/40 px-4 py-2.5 
                       font-semibold text-(--s-h-green) transition
                       hover:bg-(--p-h-green)/40"
            >
              Go home
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
