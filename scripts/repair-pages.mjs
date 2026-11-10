// This branch publishes prebuilt assets. Keep paths under the GitHub Pages project.
import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
const base='/Chainsaw-man-philosophy';
for(const name of ['index.html','404.html']){
 let text=readFileSync(name,'utf8').replace(/(src|href)="\/(assets\/|favicon\.svg)/g,`$1="${base}/$2`);
 // Start optional fonts only after module scripts have initialized.
 text=text.replace(/<link href="(https:\/\/fonts\.googleapis\.com\/[^"]+)"[^>]*>/g,(_,url)=>`<script>document.addEventListener('DOMContentLoaded',function(){var link=document.createElement('link');link.rel='stylesheet';link.href=${JSON.stringify(url)};document.head.appendChild(link);},{once:true});</script>`);
 writeFileSync(name,text);
}
for(const name of readdirSync('assets').filter(x=>x.endsWith('.js'))){
 const path='assets/'+name;let text=readFileSync(path,'utf8');
 const target='base:"",children:';
 if(text.includes(target)){
  if(text.split(target).length!==2)throw Error('Ambiguous app router; review before deploying');
  text=text.replace(target,`base:"${base}",children:`);
 }
 text=text.replace(/(["'`])\/images\//g,`$1${base}/images/`);
 // Optional ads must not crash React when the third-party script is blocked.
 text=text.replaceAll('(adsbygoogle=window.adsbygoogle||[]).push({})','(window.adsbygoogle=window.adsbygoogle||[]).push({})');
 writeFileSync(path,text);
}
// A CSS @import blocks the app stylesheet when Google Fonts is unreachable.
// The optional HTML font link above loads without blocking the page instead.
for(const name of readdirSync('assets').filter(x=>x.endsWith('.css'))){
 const path='assets/'+name;
 writeFileSync(path,readFileSync(path,'utf8').replace(/@import\s*["']https:\/\/fonts\.googleapis\.com\/[^"']+["'];?/g,''));
}
