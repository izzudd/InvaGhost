export async function initializeHighlighting(version) {
  const languages = Array.from(getCodeLanguages());
  if (languages.length === 0) return;

  await loadHighlightCore(version);
  await Promise.all(languages.map(lang => loadScript(getHighlightLangURL(version, lang))));

  executeHighlighting();
}

function getCodeLanguages() {
  return Array.from(document.querySelectorAll('pre code[class^="language-"]'))
    .map(tag => tag.className.match(/language-(\w+)/)?.[1])
    .filter(Boolean)
    .reduce((acc, lang) => acc.add(lang), new Set());
}

function loadHighlightCore(version) {
  return Promise.all([
    loadScript(getHighlightCoreURL(version)),
    loadCSS(getHighlightCSSURL(version))
  ]);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

function loadCSS(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    document.body.appendChild(link);
  });
}

function getHighlightCoreURL(version) {
  return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/highlight.min.js`;
}

function getHighlightCSSURL(version) {
  return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/styles/night-owl.min.css`;
}

function getHighlightLangURL(version, lang) {
  return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/languages/${lang}.min.js`;
}

function executeHighlighting() {
  const script = document.createElement('script');
  script.textContent = 'hljs.highlightAll();';
  document.body.appendChild(script);
}
