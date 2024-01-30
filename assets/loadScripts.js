async function loadScripts() {
  await loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
  );
  await loadScript("./assets/maugallery.js");
  await loadScript("./assets/scripts.js");
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    if (
      script.src ===
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
    ) {
      script.crossOrigin = "anonymous";
      script.integrity =
        "sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==";
      script.referrerpolicy = "no-referrer";
    }
    script.onload = resolve;
    script.onerror = () =>
      reject(`Erreur lors du chargement du script : ${src}`);
    document.head.appendChild(script);
  });
}

loadScripts();
