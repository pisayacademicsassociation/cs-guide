import{_ as e,c as o,a as t,e as i,f as m,r as p,o as l,b as a,d as r}from"./app-Czj5d4Jn.js";const c="/cs-guide/assets/big_o-Bk9DI-bM.png",h={};function g(d,s){const n=p("center");return l(),o("div",null,[s[1]||(s[1]=t('<h1 id="growth-of-functions" tabindex="-1"><a class="header-anchor" href="#growth-of-functions"><span>Growth of Functions</span></a></h1><p>If you want to perform a specific task, let&#39;s say doing your requirements, you would want it to be done as fast as possible, right? After all, you wouldn&#39;t want a requirement to take hours, or even days, especially when your deadline is near!</p><p>In CS, the same concept applies to functions. We don&#39;t want our functions to take incredibly long, otherwise, our code would run really slow! What about the user using our application? They&#39;d probably get frustrated waiting for a response! In this lesson, we will tackle about the growth of functions, or most commonly known as <strong>Big O notation</strong>.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The growth of functions, most commonly denoted in Big O notation, describes the <strong>worst</strong> time complexity a function takes, given a certain input size.</p><img src="'+c+'" class="center x75" alt="The Big O notation">',6)),i(n,null,{default:m(()=>s[0]||(s[0]=[a("br",null,null,-1),a("i",null,"Complexity Growth Illustration.",-1),r(" Retrieved from bigocheatsheet: "),a("a",{href:"https://www.bigocheatsheet.com/"},"https://www.bigocheatsheet.com/",-1)])),_:1}),s[2]||(s[2]=t('<h2 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work"><span>How does it work?</span></a></h2><p>You may see different &quot;arguments&quot; to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi></mrow><annotation encoding="application/x-tex">O</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span></span></span></span> like <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mtext> </mtext><mi>l</mi><mi>o</mi><mi>g</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding="application/x-tex">n\\,log\\,n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">n^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo stretchy="false">!</mo></mrow><annotation encoding="application/x-tex">n!</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">n</span><span class="mclose">!</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>, etc. These arguments describe the function&#39;s complexity as the input size grows.</p><p>Here, a <strong>lesser</strong> complexity is better, since it means that the function takes lesser time in comparison to it&#39;s competitors, meaning it is more efficient time-wise.</p><p>For instance, take <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>. The function with the best time complexity out of the two is the <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> one, since as the input size grows, the time complexity would be just the input size, rather than the input size, squared.</p>',4))])}const w=e(h,[["render",g],["__file","growth-of-functions.html.vue"]]),x=JSON.parse('{"path":"/cs5/3/growth-of-functions.html","title":"Growth of Functions","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"How does it work?","slug":"how-does-it-work","link":"#how-does-it-work","children":[]}],"git":{"updatedTime":1739900481000},"filePathRelative":"cs5/3/growth-of-functions.md"}');export{w as comp,x as data};
