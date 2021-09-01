import Mustache from 'mustache'
import puppeteer  from 'puppeteer'
import fs from 'fs'



export class Invoicer{
    html: any
    data: any
    page: any
    browser: any
    constructor(htmlTemplate:string, data:any) {
        this.html = htmlTemplate
        this.data = data
    }

    async toImage(path: string, options={}) {
        let data = Mustache.render(this.html, this.data);
        const browser = await puppeteer.launch({
                headless: true,
                // pipe: true, <-- delete this property
                args: [
                    '--no-sandbox',
                    '--disable-dev-shm-usage', // <-- add this one
                    ],
            });
        const page = await browser.newPage();
        await page.setContent(data)
        await page.screenshot({ path: path, ...options });
        await browser.close()
        return "created"
    }

    async toPdf(path: string) {
            let data = Mustache.render(this.html, this.data);
             const browser = await puppeteer.launch({
                headless: true,
                // pipe: true, <-- delete this property
                args: [
                    '--no-sandbox',
                    '--disable-dev-shm-usage', // <-- add this one
                    ],
            })
            const page = await browser.newPage();
            await page.setContent(data)
            await page.pdf({ path: path, format: 'a4' });
            await browser.close()
            return "created"
    }
}