import ReactDOM from "react-dom";

const VIDEO_SRC = "/montage_video.mp4";
const POSTER_SRC = "/hero_poster.webp";

/**
 * Hero background video.
 *
 * `src` and `autoPlay` are in the markup on purpose, with no client JS, so that
 * playback is never gated on hydration. Two earlier versions were measured and
 * rejected:
 *
 *   - deferring the load to `window.load` gave LCP 6.3 s (vs 4.5 s eager),
 *     because it pushed the first frame paint to whenever playback started;
 *   - assigning `src` from an effect still gated playback on hydration, which
 *     put 5.4 s into LCP Render Delay whenever the video frame won the LCP
 *     attribution instead of the poster.
 *
 * The poster is preloaded at high priority, and the re-encode (889 KB,
 * faststart) is what makes loading the video up front affordable at all.
 *
 * Note: splitting the poster out into a separate <img> layered under the video
 * is a viable next step if the Lighthouse score needs to be more stable. It
 * stops the poster paint and the first frame paint from sharing an element, so
 * LCP attribution stops flipping between them. It was not adopted because it
 * only addresses a Lighthouse *simulation* artifact: under real applied
 * throttling this version already measures LCP 1.8 s on every run, and the
 * benefit cannot be verified without a production deploy.
 */
export default function HeroVideo({ className }) {
  ReactDOM.preload(POSTER_SRC, { as: "image", fetchPriority: "high" });

  return (
    <video
      className={className}
      src={VIDEO_SRC}
      poster={POSTER_SRC}
      preload="auto"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
