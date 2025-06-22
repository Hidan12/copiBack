import puppeteer from "puppeteer";

const readPage = async (req, res, next)=>{    
    const externalSiteBaseUrl = "https://tuboleta.com"    
    try {
        const browser = await puppeteer.launch();
    const page = await browser.newPage();
     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    await page.goto('https://www.latamairlines.com/co/es', { waitUntil: ['domcontentloaded', 'networkidle2'], timeout: 60000});

    // FILTRO: sacá los estilos que dan problemas de CORS
    const styles = await page.$$eval('link[rel="stylesheet"]', links =>
        links
            .filter(link => !link.href.includes("https://tuboleta.com/themes/custom/"))
            .map(link => link.href)
    );

    const scripts = await page.$$eval('script[src]', scripts =>
        scripts.map(script => script.src)
    );

    // OPCIONAL: limpiar los links directamente del DOM (esto evita que aparezcan en content.html)
    // await page.evaluate(() => {
    //     document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    //         if (link.href.includes("https://tuboleta.com/themes/custom/")) {
    //             link.remove();
    //         }
    //     });
    // });

    const html = await page.content();

    await browser.close();

    res.json({ html, scripts, styles });
        
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: error
        })
    }
    
}

export {readPage}