import assert from 'node:assert/strict';import{readFileSync,readdirSync}from'node:fs';
for(const name of ['index.html','404.html']){const s=readFileSync(name,'utf8');assert.ok(s.includes('/Chainsaw-man-philosophy/assets/'));assert.ok(!/(src|href)="\/(assets\/|favicon\.svg)/.test(s));assert.ok(!/<link[^>]+fonts\.googleapis\.com[^>]+rel="stylesheet"/.test(s));}
for(const name of readdirSync('assets')){const s=readFileSync('assets/'+name,'utf8');if(name.endsWith('.js')){assert.ok(!s.includes('base:"",children:'));assert.ok(!s.includes('"/images/'));assert.ok(!s.includes('(adsbygoogle='));}if(name.endsWith('.css'))assert.ok(!/@import["']https:\/\/fonts\.googleapis\.com/.test(s));}
console.log('PASS Pages asset/router paths and non-blocking optional fonts/ads');
