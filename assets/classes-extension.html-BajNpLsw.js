import{_ as l,c as o,b as n,d as a,e as t,f as i,a as p,r as c,o as d}from"./app-CgnWbmZE.js";const r={},u={class:"hint-container tip"};function k(m,s){const e=c("RouteLink");return d(),o("div",null,[s[23]||(s[23]=n("h1",{id:"classes-extended",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#classes-extended"},[n("span",null,"Classes (extended)")])],-1)),n("div",u,[s[3]||(s[3]=n("p",{class:"hint-container-title"},"Tips",-1)),n("p",null,[s[1]||(s[1]=a("This page is a follow-up and assumes you know the concepts from the ")),t(e,{to:"/cs4/2/classes-objects-packages.html"},{default:i(()=>s[0]||(s[0]=[n("strong",null,"Classes, Objects, and Packages",-1)])),_:1}),s[2]||(s[2]=a(" section."))])]),s[24]||(s[24]=n("h2",{id:"defining-class-methods",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#defining-class-methods"},[n("span",null,"Defining class methods")])],-1)),n("p",null,[s[5]||(s[5]=a("Our classes can have various methods that a programmer may use to interact with it. Here is an example of your typical method declaration, taken from the ")),t(e,{to:"/cs4/2/classes-objects-packages.html"},{default:i(()=>s[4]||(s[4]=[a("previous")])),_:1}),s[6]||(s[6]=a(" section."))]),s[25]||(s[25]=p(`<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">takeDamage</span><span class="token punctuation">(</span><span class="token keyword">int</span> damage<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">-=</span> damage<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>energy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>dead <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A method declaration requires a return type, name, a pair of parentheses <code>()</code> and braces <code>{}</code>.</p><p>More specifically, method declarations have five components, in order:</p>`,3)),n("ul",null,[n("li",null,[s[8]||(s[8]=a("Access modifiers — such as ")),s[9]||(s[9]=n("code",null,"public",-1)),s[10]||(s[10]=a(" and ")),s[11]||(s[11]=n("code",null,"private",-1)),s[12]||(s[12]=a(", which is discussed in a later section, over ")),t(e,{to:"/cs4/2/oop.html#access-modifiers"},{default:i(()=>s[7]||(s[7]=[a("here")])),_:1}),s[13]||(s[13]=a("."))]),s[14]||(s[14]=n("li",null,[a("The return type — the data type of the value this method will return, or "),n("code",null,"void"),a(" if none.")],-1)),s[15]||(s[15]=n("li",null,"The method name — the method name, following variable naming rules.",-1)),s[16]||(s[16]=n("li",null,[a("The parameter list in paranthesis — a comma separated list of method parameters, preceded by their data types, all enclosed by parentheses "),n("code",null,"()"),a(". If there are no parameters, empty parentheses must be used instead.")],-1)),s[17]||(s[17]=n("li",null,"The method body, enclosed between braces — the method's code, including the declaration of local variables, goes inside the braces.",-1))]),s[26]||(s[26]=n("p",null,"From our example above, we can slice this function into it's corresponding parts:",-1)),n("ul",null,[n("li",null,[s[19]||(s[19]=n("code",null,"public",-1)),s[20]||(s[20]=a(" — this is the method's access modifier. Access modifiers are discussed in a later section, over ")),t(e,{to:"/cs4/2/oop.html#access-modifiers"},{default:i(()=>s[18]||(s[18]=[a("here")])),_:1}),s[21]||(s[21]=a("."))]),s[22]||(s[22]=p("<li><code>void</code> — this is the method&#39;s return type. <code>void</code> means that this method will not return anything.</li><li><code>takeDamage</code> — this is the method&#39;s name. <code>takeDamage</code> perfectly follows variable naming rules.</li><li><code>(int damage)</code> — this is the method&#39;s parameter list. Since there is only one parameter, a comma is unnecessary, and will lead to an error.</li><li><code>{ this.health -= damage; /* (more code here) */ }</code> — this is the method&#39;s body, containing all the code.</li>",4))]),s[27]||(s[27]=p(`<h2 id="defining-and-using-class-constructors" tabindex="-1"><a class="header-anchor" href="#defining-and-using-class-constructors"><span>Defining and using class constructors</span></a></h2><p>In our classes, we know that they can have various fields and methods. A class can also have a constructor. In the Java Programming Language, a constructor is also considered a method. However, it is a more <em>special</em> type of method, where it is only called when a new class that contains that constructor is made.</p><p>Let&#39;s go back to our <code>CharacterCard</code> class from the <a href="../2/classes-objects-packages"><strong>Classes, Objects and Packages</strong></a> section.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterCard</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">	<span class="token class-name">String</span> id<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> damage<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> health<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> energy<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> maxHealth<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> maxEnergy<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">boolean</span> dead <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">public</span> <span class="token class-name">CharacterCard</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> damage<span class="token punctuation">,</span> <span class="token keyword">int</span> maxHealth<span class="token punctuation">,</span> <span class="token keyword">int</span> maxEnergy<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>damage <span class="token operator">=</span> damage<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>maxHealth <span class="token operator">=</span> maxHealth<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>maxEnergy <span class="token operator">=</span> maxEnergy<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> maxHealth<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>energy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">takeDamage</span><span class="token punctuation">(</span><span class="token keyword">int</span> damage<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">-=</span> damage<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>energy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>dead <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dealDamage</span><span class="token punctuation">(</span><span class="token class-name">CharacterCard</span> character<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		character<span class="token punctuation">.</span><span class="token function">takeDamage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>damage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>energy <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">heal</span><span class="token punctuation">(</span><span class="token keyword">int</span> healing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>healing <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>health<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHealth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Our constructor here is <code>CharacterCard</code>. A class constructor must always have the same name as the class. This is what differentiates a constructor from a method.</p><p>When we want to create a new <code>CharacterCard</code>, we use the <code>new CharacterCard()</code> syntax. A constructor&#39;s arguments are applied to the syntax. Here, we are using the no-argument constructor, which doesn&#39;t really exist in <code>new CharacterCard()</code>. When creating a new class, we need to pass in valid arguments to the constructor. Here, we need to pass a <code>String</code>, <code>int</code>, <code>int</code>, <code>int</code>, in that order. This is because our constructor has a method signature of <code>(String, int, int, int)</code>. Therefore, we need to pass our values in that order.</p><h2 id="static-and-instance-the-difference" tabindex="-1"><a class="header-anchor" href="#static-and-instance-the-difference"><span>Static and Instance: The Difference</span></a></h2><p>In Java, a class can have either <strong>static</strong> or <strong>instance</strong> methods/fields, but what is a &quot;static method&quot; or an &quot;instance method&quot;?</p><p>A static method is a method that can be used from the class directly. An example of this is the <code>main()</code> method that we always use.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// ...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A static method is declared using the <code>static</code> modifier. The <code>main()</code> method is a static method. This means that other classes can invoke/call the <code>main()</code> method without having to create a new instance of the <code>Main</code> class.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>An instance method is a method that is used from the class instance.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// ...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, any methods that aren&#39;t declared <code>static</code> are instance methods. The <code>study()</code> method is an instance method. This means that you need to create a <code>new Student()</code> or have an instance/object of the class <code>Student</code> so you can invoke/call the <code>study()</code> method.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Student</span> student1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">student1<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>This rule can also apply to fields.</p><p>Just like a static method, a static field is a field that can be accessed from the class directly.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> rickroll <span class="token operator">=</span> <span class="token string">&quot;Never gonna give you up.&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Just like static methods, static fields need to have the <code>static</code> modifier in order for them to be declared as a static field. The field <code>rickroll</code> is a static field, which means you can access it from the <code>Main</code> class directly.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Main</span><span class="token punctuation">.</span>rickroll<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Just like an instance method, an instance field is a field that is used from the class instance.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Just like instance methods, fields that aren&#39;t declared <code>static</code> are instance fields. The field <code>input</code> is an instance field. This means that you need to create a <code>new Main()</code> or have an instance/object of class <code>Main</code> to access the <code>input</code> field.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Main</span> main <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">main<span class="token punctuation">.</span>input<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-the-this-keyword" tabindex="-1"><a class="header-anchor" href="#using-the-this-keyword"><span>Using the this keyword</span></a></h2><p>In classes, you can use the <code>this</code> keyword to refer to the current class instance. However, you should be careful where you use the <code>this</code> keyword.</p><p>For instance, you cannot use the <code>this</code> keyword in static methods. This is because static methods are declared <code>static</code>, therefore, there is no class instance for <code>this</code> to refer to. Trying to do so gives you a &quot;Cannot use this in a static context&quot; error.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// java.lang.Error: Unresolved compilation problem: Cannot use this in a static context</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// ...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This works similarly to using static methods inside instance methods. Some programmers make the mistake of using <code>this</code> to refer to their static method in the same class. Always remember that the <code>this</code> keyword refers to the current class instance. To call static methods in the same class, just call it like how&#39;d you call it in another class, which is <code>Class.method()</code>.</p>`,30))])}const v=l(r,[["render",k],["__file","classes-extension.html.vue"]]),b=JSON.parse('{"path":"/cs4/2/classes-extension.html","title":"Classes (extended)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Defining class methods","slug":"defining-class-methods","link":"#defining-class-methods","children":[]},{"level":2,"title":"Defining and using class constructors","slug":"defining-and-using-class-constructors","link":"#defining-and-using-class-constructors","children":[]},{"level":2,"title":"Static and Instance: The Difference","slug":"static-and-instance-the-difference","link":"#static-and-instance-the-difference","children":[]},{"level":2,"title":"Using the this keyword","slug":"using-the-this-keyword","link":"#using-the-this-keyword","children":[]}],"git":{"updatedTime":1737561594000},"filePathRelative":"cs4/2/classes-extension.md"}');export{v as comp,b as data};
