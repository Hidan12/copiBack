import fs from "fs"
import axios from "axios";
import { URL } from "url";
import puppeteer from "puppeteer";

const url = "https://tuboleta.com/es";

(async () => {
  // Iniciar navegador
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  // Obtener HTML renderizado
  const html = await page.content();

  // Extraer CSS y JS usando evaluate
  const { cssContent, jsContent, externalCSS, externalJS } = await page.evaluate(() => {
    // Obtener CSS inline (etiquetas <style>)
    const inlineCSS = Array.from(document.querySelectorAll("style"))
      .map((style) => style.innerHTML)
      .join("\n");

    // Obtener JS inline (etiquetas <script> sin src)
    const inlineJS = Array.from(document.querySelectorAll("script:not([src])"))
      .map((script) => script.innerHTML)
      .join("\n");

    // Obtener URLs de CSS y JS externos
    const externalCSS = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map((link) => link.href);

    const externalJS = Array.from(document.querySelectorAll('script[src]'))
      .map((script) => script.src);

    return {
      cssContent: inlineCSS,
      jsContent: inlineJS,
      externalCSS,
      externalJS,
    };
  });

  // Función para descargar recursos externos
  const downloadExternalResources = async (urls) => {
    const contents = [];
    for (const url of urls) {
      try {
        const absoluteUrl = new URL(url, url).href; // Resuelve URLs relativas
        const response = await axios.get(absoluteUrl);
        contents.push(response.data);
      } catch (error) {
        console.error("Error al descargar ${url}: ${error.message}");
      }
    }
    return contents.join("\n");
  };

  // Descargar CSS y JS externos
  const externalCSSContent = await downloadExternalResources(externalCSS);
  const externalJSContent = await downloadExternalResources(externalJS);

  // Combinar todo el contenido
  const fullCSS = `${cssContent}\n${externalCSSContent}`;
  const fullJS = `${jsContent}\n${externalJSContent}`;

  // Guardar en archivos
  fs.writeFileSync("pagina.html", html);
  fs.writeFileSync("estilos.css", fullCSS);
  fs.writeFileSync("scripts.js", fullJS);

  await browser.close();
  console.log("¡Scraping completado!");
})();