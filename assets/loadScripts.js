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
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

loadScripts();
