import React from 'react';
import { getUrls } from '../data/pages/Pages'

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const allPaths = getUrls();

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    
        ${allPaths.map((url) => {
            return `
                <url>
                <loc>https://cia-service.com/${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                </url>
            `;
            })
            .join("")}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;