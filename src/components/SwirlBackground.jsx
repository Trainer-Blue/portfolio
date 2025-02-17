import { useEffect } from "react";

const SwirlBackground = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        // Load scripts sequentially from the public folder
        await loadScript("/js/noise.min.js");
        await loadScript("/js/util.js");
        await loadScript("/js/swirl.js");

        // Manually call setup() after scripts load
        if (typeof window.setup === "function") {
          window.setup();
        }
      } catch (error) {
        console.error("Error loading background scripts:", error);
      }
    };

    loadScripts();
  }, []);

  return (
    <div className="content content--canvas">
      <h2 className="content__title"></h2>
    </div>
  );
};

export default SwirlBackground;
