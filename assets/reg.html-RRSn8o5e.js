import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as i,a as n,d as s,b as p,e as a}from"./app-SD3SAAIy.js";const l={},u=a(`<p>当你的项目中需要成批量的函数和类，且这些函数和类功能上相似或并行时，为了方便管理，你可以把这些指定的函数和类整合到一个字典，你可以用函数名或类名作为字典的key，也可用使用自定义的名字作为key，对应的函数或类作为value。构建这样一个字典的过程就是注册，Python引入注册器机制保证了这个字典可以自动维护，增加或删除新的函数或类时，不需要手动去修改字典。</p><p>Python注册器机制本质上是用装饰器来实现的。下面将从基本的Python函数出发，逐步介绍装饰器，最后学习注册器。</p><h2 id="python函数" tabindex="-1"><a class="header-anchor" href="#python函数"><span>python函数</span></a></h2><p>首先定义一个函数，然后用不同的方式调用它:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;I love math!&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output: &#39;I love math!&#39;</span>

<span class="token comment"># 这里math后面没有小括号，不是调用math函数</span>
<span class="token comment"># 而是将math函数赋值给变量mathematics</span>
mathematics <span class="token operator">=</span> math

<span class="token keyword">print</span><span class="token punctuation">(</span>mathematics<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output: &#39;I love math!&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数体中还可以定义函数，只是这个函数体内的函数不能在函数体外被直接调用。函数体内的函数虽然不能在函数体外被直接调用，但是可以将它们返回出来。注意到返回的<code>add</code>和<code>multiply</code>后面没有小括号，那它就可以被传递，并且可以赋值给别的变量而被执行，如果有小括号，那它就会被执行。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">math</span><span class="token punctuation">(</span>operation <span class="token operator">=</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;I am in the add() function!&#39;</span> 
    <span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;I am in the multiply() function!&#39;</span>

    <span class="token keyword">if</span> operation <span class="token operator">==</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> add
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> multiply

op <span class="token operator">=</span> math<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span>
<span class="token comment"># output: &lt;function math.&lt;locals&gt;.add at 0x7f0e64c9f560&gt;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>op<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output: I am in the add() function!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以将函数作为参数传递给另一个函数：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">math</span><span class="token punctuation">(</span>operation <span class="token operator">=</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;I love math!&#39;</span>

<span class="token keyword">def</span> <span class="token function">precompute</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I am doing precomputations!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

precompute<span class="token punctuation">(</span>math<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="python装饰器" tabindex="-1"><a class="header-anchor" href="#python装饰器"><span>python装饰器</span></a></h1><h2 id="为什么需要装饰器" tabindex="-1"><a class="header-anchor" href="#为什么需要装饰器"><span>为什么需要装饰器</span></a></h2><p>程序员太“懒”了，基本上什么事情都想少做，追求是DRY，那么什么是DRY，如下： DRY（Don&#39;t repeat yourself ），字面意思来看：&quot;不要重复自己&quot;。强调的意思就是在进行编程时相同的代码不要重复写，最好只写一次，然后可以在其他地方直接引用。如此一来，可以提高代码重用率，缩减代码量，同时也有助于提高代码的可读性和可维护性。当需要做出更改时，只需要更改一个地方即可。</p><p>有了这个指导思想，就很明白了，就是少写代码，装饰器的目的也就是少写代码，复用代码。复用代码有很多种方式，比如面向对象里的继承，虚函数等，但是想在函数层面来复用代码，有什么方法呢？一般情况之下，就是函数中调用另一个函数来达到继承和复用。函数里调用别的函数，如下面的例子：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
 
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sub<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output: 2 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这时，我们想把每个函数添加一行星号打印输出，以便分隔开来，更好看一些，我们往往会这样做修改，每个函数里添加一行星号就行了，修改如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*************************************&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
 
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*************************************&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sub<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们只有两个函数时，这样修改很快的，并且很快就完成工作了，但是如果有1000个这样函数呢？那么是否需要添加1000遍？</p><p>如果你每个函数去添加一个也是可以完成任务的，但是能否不修改原来的函数，即是原来的函数代码一点都不改变，又能增加这样的功能呢？答案是可以的，如下修改：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
 
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
 
<span class="token comment">#定义一个新的函数</span>
<span class="token keyword">def</span> <span class="token function">printStar</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*************************************&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">print</span><span class="token punctuation">(</span>printStar<span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>printStar<span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里增加了一个函数，这个函数接收一个函数对象作为参数，这样就不需要修改原来的函数，达到原来稳定并且测试通过的代码不作任何修改，减少出错的风险，特别已经上线运行的系统，更是如此；或者像8代单传的代码，没有人敢去修改它，否则领导会怪你，怎么样把产品越改越差，本来是请你来做好产品的，结果不行。做到这一步，就结束了吗？还不行啊，因为每个调用这个函数的地方都需要修改，因此再继续修改，结果改成这样：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#定义一个新的函数</span>
<span class="token keyword">def</span> <span class="token function">printStar</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*************************************&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token decorator annotation punctuation">@printStar</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
 
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>printStar<span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里发现调用add方法，还是不一样，继续修改，代码如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#定义一个新的函数</span>
<span class="token keyword">def</span> <span class="token function">printStar</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*************************************&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> f
 
<span class="token decorator annotation punctuation">@printStar</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
 
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
    
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
sub <span class="token operator">=</span> printStar<span class="token punctuation">(</span>sub<span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>sub<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，可以发现使用嵌套函数来实现，就可以返回一个可调用的对象，这样更加完美了。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#定义一个新的函数</span>
<span class="token keyword">def</span> <span class="token function">printStar</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*************************************&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> f
 
<span class="token decorator annotation punctuation">@printStar</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
 
<span class="token decorator annotation punctuation">@printStar</span>
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
    
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sub<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里可以发现这两段代码是相等的：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>

sub <span class="token operator">=</span> printStar<span class="token punctuation">(</span>sub<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@printStar</span>
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见<code>@printStar</code>是一个语法改变，它的目标就是实现不修改原来函数的代码，又可以复用原来的函数并且作出修改，也称作为元编程，并且装饰器函数可以复用，实现共享的目标。</p>`,30),d={href:"https://blog.csdn.net/caimouse/article/details/78078189",target:"_blank",rel:"noopener noreferrer"},r=a(`<h2 id="计算执行时间的例子" tabindex="-1"><a class="header-anchor" href="#计算执行时间的例子"><span>计算执行时间的例子</span></a></h2><p>装饰器是什么？顾名思义，就是增强函数或类的功能的一个函数。</p><p>举个例子：如何计算函数的执行时间？如下，你需要计算 add 函数的执行时间。​​​​​​​</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>        
    res <span class="token operator">=</span> a <span class="token operator">+</span> b        
    <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会这样写：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>    
    start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>    
    res <span class="token operator">=</span> a <span class="token operator">+</span> b    
    exec_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;add函数，花费的时间是：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>exec_time<span class="token punctuation">)</span><span class="token punctuation">)</span>    
    <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，老板又让你计算减法函数（sub）的时间。不用装饰器的话，你又得重复写一段减法的代码。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>    
    start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>    
    res <span class="token operator">=</span> a <span class="token operator">-</span> b    
    exec_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time  
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;sub函数，花费的时间是：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>exec_time<span class="token punctuation">)</span><span class="token punctuation">)</span>    
    <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样显得很麻烦，也不灵活，万一计算时间的代码有改动，你得每个函数都要改动。所以，我们需要引入装饰器。使用装饰器之后的代码是这样的:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token comment"># 定义装饰器</span>
<span class="token keyword">def</span> <span class="token function">time_calc</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span>        
        start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>        
        f <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span>        
        exec_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time        
        <span class="token keyword">return</span> f    
    <span class="token keyword">return</span> wrapper   
    
<span class="token comment"># 使用装饰器</span>
<span class="token decorator annotation punctuation">@time_calc</span>    
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
    
<span class="token decorator annotation punctuation">@time_calc</span>
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">return</span> a <span class="token operator">-</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是看起来清爽多了？</p><p>装饰器的作用：增强函数的功能，确切的说，可以装饰函数，也可以装饰类。</p><p>装饰器的原理：函数是python的一等公民，函数也是对象。</p><h3 id="定义装饰器" tabindex="-1"><a class="header-anchor" href="#定义装饰器"><span>定义装饰器</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        <span class="token comment"># 可以自定义传入的参数        </span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
        <span class="token comment"># 返回传入的方法名参数的调用</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span> 
    <span class="token comment"># 返回内层函数函数名</span>
    <span class="token keyword">return</span> wrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用装饰器" tabindex="-1"><a class="header-anchor" href="#使用装饰器"><span>使用装饰器</span></a></h2><p>假设decorator是定义好的装饰器。</p><p>方法一：不用语法糖@符号​​​​​​​</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 装饰器不传入参数时</span>
f <span class="token operator">=</span> decorator<span class="token punctuation">(</span>函数名<span class="token punctuation">)</span>

<span class="token comment"># 装饰器传入参数时</span>
f <span class="token operator">=</span> <span class="token punctuation">(</span>decorator<span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>函数名<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：采用语法糖@符号​​​​​​​</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 已定义的装饰器</span>
<span class="token decorator annotation punctuation">@decorator</span> 
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    <span class="token keyword">pass</span>

<span class="token comment"># 执行被装饰过的函数 </span>
f<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>装饰器可以传参，也可以不用传参。</p><p>自身不传入参数的装饰器（采用两层函数定义装饰器）:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>        
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span>                
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;函数名:%s&#39;</span><span class="token operator">%</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>                
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span>        
    <span class="token keyword">return</span> wrapper    
    
<span class="token decorator annotation punctuation">@login</span>
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>       
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;inside decorator!&#39;</span><span class="token punctuation">)</span>     

f<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 输出:</span>
<span class="token comment"># &gt;&gt; 函数名:f</span>
<span class="token comment"># &gt;&gt; 函数本身:inside decorator!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自身传入参数的装饰器（采用三层函数定义装饰器）:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span>            
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s----%s&#39;</span><span class="token operator">%</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper
    <span class="token keyword">return</span> decorator

<span class="token comment"># 等价于 ==&gt; (login(text))(f) ==&gt; 返回 wrapper  </span>
<span class="token decorator annotation punctuation">@login</span><span class="token punctuation">(</span><span class="token string">&#39;this is a parameter of decorator&#39;</span><span class="token punctuation">)</span>  
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2019-06-13&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 等价于 ==&gt; (login(text))(f)() ==&gt; 调用 wrapper() 并返回 f()    </span>
f<span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token comment"># 输出:</span>
<span class="token comment"># =&gt; this is a parameter of decorator----f</span>
<span class="token comment"># =&gt; 2019-06-13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置装饰器" tabindex="-1"><a class="header-anchor" href="#内置装饰器"><span>内置装饰器</span></a></h2><p>常见的内置装饰器有三种，@property、@staticmethod、@classmethod</p><h3 id="property" tabindex="-1"><a class="header-anchor" href="#property"><span>@property</span></a></h3><p>把类内方法当成属性来使用，必须要有返回值，相当于getter；</p><p>假如没有定义 <code>@func.setter</code> 修饰方法的话，就是只读属性</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>_price <span class="token operator">=</span> price    
     
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">car_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_name
        
     <span class="token comment"># car_name可以读写的属性   </span>
     <span class="token decorator annotation punctuation">@car_name<span class="token punctuation">.</span>setter</span>
     <span class="token keyword">def</span> <span class="token function">car_name</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
         self<span class="token punctuation">.</span>_name <span class="token operator">=</span> value
         
     <span class="token comment"># car_price是只读属性 </span>
     <span class="token decorator annotation punctuation">@property</span>
     <span class="token keyword">def</span> <span class="token function">car_price</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
         <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_price<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;万&#39;</span>
         
benz <span class="token operator">=</span> Car<span class="token punctuation">(</span><span class="token string">&#39;benz&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>benz<span class="token punctuation">.</span>car_name<span class="token punctuation">)</span>   <span class="token comment"># benz</span>
benz<span class="token punctuation">.</span>car_name <span class="token operator">=</span> <span class="token string">&quot;baojun&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>benz<span class="token punctuation">.</span>car_name<span class="token punctuation">)</span>   <span class="token comment"># baojun</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>benz<span class="token punctuation">.</span>car_price<span class="token punctuation">)</span>  <span class="token comment"># 30万</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="staticmethod-与-classmethod" tabindex="-1"><a class="header-anchor" href="#staticmethod-与-classmethod"><span>@staticmethod 与 @classmethod</span></a></h3><ul><li><p>@staticmethod：静态方法，不需要表示自身对象的self和自身类的cls参数，就跟使用函数一样。</p></li><li><p>@classmethod：类方法，不需要self参数，但第一个参数需要是表示自身类的cls参数。</p></li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    text <span class="token operator">=</span> <span class="token string">&quot;三种方法的比较&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">instance_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;调用实例方法&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">class_method</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;调用类方法&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;在类方法中 访问类属性 text: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>cls<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;在类方法中 调用实例方法 instance_method: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>cls<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>instance_method<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">static_method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;调用静态方法&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;在静态方法中 访问类属性 text: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>Demo<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;在静态方法中 调用实例方法 instance_method: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>Demo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>instance_method<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 实例化对象</span>
    d <span class="token operator">=</span> Demo<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 对象可以访问 实例方法、类方法、静态方法</span>
    <span class="token comment"># 通过对象访问text属性</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    
    <span class="token comment"># 通过对象调用实例方法</span>
    d<span class="token punctuation">.</span>instance_method<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 通过对象调用类方法</span>
    d<span class="token punctuation">.</span>class_method<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 通过对象调用静态方法</span>
    d<span class="token punctuation">.</span>static_method<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 类可以访问类方法、静态方法</span>
    <span class="token comment"># 通过类访问text属性</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>Demo<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    
    <span class="token comment"># 通过类调用类方法</span>
    Demo<span class="token punctuation">.</span>class_method<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 通过类调用静态方法</span>
    Demo<span class="token punctuation">.</span>static_method<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@staticmethod和@classmethod的区别和使用场景：</p><p>区别：</p><ul><li>在定义静态类方法和类方法时，@staticmethod 装饰的静态方法里面，想要访问类属性或调用实例方法，必须需要把类名写上；</li><li>而@classmethod装饰的类方法里面，会传一个cls参数，代表本类，这样就能够避免手写类名的硬编码。</li><li>在调用静态方法和类方法时，实际上写法都差不多，一般都是通过 类名.静态方法() 或 类名.类方法()。</li><li>也可以用实例化对象去调用静态方法和类方法，但为了和实例方法区分，最好还是用类去调用静态方法和类方法。</li></ul><p>使用场景：在定义类的时候，</p><ul><li>假如不需要用到与类相关的属性或方法时，就用静态方法@staticmethod；</li><li>假如需要用到与类相关的属性或方法，然后又想表明这个方法是整个类通用的，而不是对象特异的，就可以使用类方法@classmethod。</li></ul>`,41),k={href:"https://zhuanlan.zhihu.com/p/107917604",target:"_blank",rel:"noopener noreferrer"},v=a(`<h1 id="python注册器" tabindex="-1"><a class="header-anchor" href="#python注册器"><span>python注册器</span></a></h1><h2 id="为什么需要注册器" tabindex="-1"><a class="header-anchor" href="#为什么需要注册器"><span>为什么需要注册器</span></a></h2><p>有了装饰器的基础之后，我们现在要走入注册器的世界了。但是，为什么需要注册器呢？</p><p>当你的项目中需要成批量的函数和类，且这些函数和类功能上相似或并行时，为了方便管理，你可以把这些指定的函数和类整合到一个字典，你可以用函数名或类名作为字典的key，也可用使用自定义的名字作为 key，对应的函数或类作为 value。构建这样一个字典的过程就是注册，Python 引入注册器机制保证了这个字典可以自动维护，增加或删除新的函数或类时，不需要手动去修改字典。</p><h2 id="构建及使用注册器" tabindex="-1"><a class="header-anchor" href="#构建及使用注册器"><span>构建及使用注册器</span></a></h2><p>Python的注册器本质上就是用装饰器的原理实现的。Registry提供了字符串到函数或类的映射，这个映射会被整合到一个字典中，开发者只要输入相应的字符串（为函数或类起的名字）和参数，就能获得一个函数或初始化好的类。 为了说明Registry的好处，我们首先看一下用一个字典存放字符串到函数的映射：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>register <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

f <span class="token operator">=</span> <span class="token keyword">lambda</span> x <span class="token punctuation">:</span> x

<span class="token keyword">class</span> <span class="token class-name">cls</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

register<span class="token punctuation">[</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">]</span> <span class="token operator">=</span> func
register<span class="token punctuation">[</span>f<span class="token punctuation">.</span>__name__<span class="token punctuation">]</span> <span class="token operator">=</span> f
register<span class="token punctuation">[</span>cls<span class="token punctuation">.</span>__name__<span class="token punctuation">]</span> <span class="token operator">=</span> cls

<span class="token keyword">print</span><span class="token punctuation">(</span>register<span class="token punctuation">)</span>
<span class="token comment"># output:</span>
<span class="token comment"># {&#39;func&#39;: &lt;function func at 0x7fec95a1add0&gt;, &#39;&lt;lambda&gt;&#39;: &lt;function &lt;lambda&gt; at 0x7fec95a27a70&gt;, &#39;cls&#39;: &lt;class &#39;__main__.cls&#39;&gt;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的缺点是我们需要手动维护register这个字典，当增加新的函数或类，或者删除某些函数或类时，我们也要手动修改register这个字典，因此我们需要一个可以自动维护的字典，在我们定义一个函数或类的时候就自动把它整合到字典中。为了达到这一目的，这里就使用到了装饰器，在装饰器中将我们新定义的函数或类存放的字典中，这个过程我们称之为注册。</p><p>这里我们需要定义一个装饰器类Register，其中核心部分就是成员函数register，它作为一个装饰器函数：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Register</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Register<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">register</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">add_item</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">callable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Error:</span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token string"> must be callable!&quot;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> key <span class="token keyword">in</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;\\033[31mWarning:\\033[0m </span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> already exists and will be overwritten!&quot;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
            <span class="token keyword">return</span> value

        <span class="token keyword">if</span> <span class="token builtin">callable</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">:</span>    <span class="token comment"># 传入的target可调用 --&gt; 没有给注册名 --&gt; 传入的函数名或类名作为注册名</span>
            <span class="token keyword">return</span> add_item<span class="token punctuation">(</span>target<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>                   <span class="token comment"># 不可调用 --&gt; 传入了注册名 --&gt; 作为可调用对象的注册名 </span>
            <span class="token keyword">return</span> <span class="token keyword">lambda</span> x <span class="token punctuation">:</span> add_item<span class="token punctuation">(</span>target<span class="token punctuation">,</span> x<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__contains__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> key <span class="token keyword">in</span> self<span class="token punctuation">.</span>_dict

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_dict<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">keys</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">values</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">items</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将Register实例化，然后打印验证一下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>register_func <span class="token operator">=</span> Register<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@register_func<span class="token punctuation">.</span>register</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b

<span class="token decorator annotation punctuation">@register_func<span class="token punctuation">.</span>register</span>
<span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b

<span class="token decorator annotation punctuation">@register_func<span class="token punctuation">.</span>register</span><span class="token punctuation">(</span><span class="token string">&#39;matrix multiply&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token decorator annotation punctuation">@register_func<span class="token punctuation">.</span>register</span>
<span class="token keyword">def</span> <span class="token function">minus</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b

<span class="token decorator annotation punctuation">@register_func<span class="token punctuation">.</span>register</span>
<span class="token keyword">def</span> <span class="token function">minus</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b

<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> register_func<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;key: </span><span class="token interpolation"><span class="token punctuation">{</span>k<span class="token punctuation">}</span></span><span class="token string">, value: </span><span class="token interpolation"><span class="token punctuation">{</span>v<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token comment"># output:</span>
<span class="token comment"># Warning: minus already exists and will be overwritten!</span>
<span class="token comment"># key: add, value: &lt;function add at 0x7fd18ee7cb90&gt;</span>
<span class="token comment"># key: multiply, value: &lt;function multiply at 0x7fd18ee95170&gt;</span>
<span class="token comment"># key: matrix multiply, value: &lt;function multiply at 0x7fd18ee95320&gt;</span>
<span class="token comment"># key: minus, value: &lt;function minus at 0x7fd18ee95200&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不想手动调用register()函数，可以在Register类中添加一个__call__()函数：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Register</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Register<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>register<span class="token punctuation">(</span>target<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">register</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">add_item</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">callable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Error:</span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token string"> must be callable!&quot;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> key <span class="token keyword">in</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;\\033[31mWarning:\\033[0m </span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> already exists and will be overwritten!&quot;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
            <span class="token keyword">return</span> value

        <span class="token keyword">if</span> <span class="token builtin">callable</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">:</span>    <span class="token comment"># 传入的target可调用 --&gt; 没有给注册名 --&gt; 传入的函数名或类名作为注册名</span>
            <span class="token keyword">return</span> add_item<span class="token punctuation">(</span>target<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>                   <span class="token comment"># 不可调用 --&gt; 传入了注册名 --&gt; 作为可调用对象的注册名 </span>
            <span class="token keyword">return</span> <span class="token keyword">lambda</span> x <span class="token punctuation">:</span> add_item<span class="token punctuation">(</span>target<span class="token punctuation">,</span> x<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__contains__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> key <span class="token keyword">in</span> self<span class="token punctuation">.</span>_dict

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_dict<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">keys</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">values</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">items</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>


register_func <span class="token operator">=</span> Register<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@register_func</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b

<span class="token decorator annotation punctuation">@register_func</span>
<span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b

<span class="token decorator annotation punctuation">@register_func</span><span class="token punctuation">(</span><span class="token string">&#39;matrix multiply&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token decorator annotation punctuation">@register_func</span>
<span class="token keyword">def</span> <span class="token function">minus</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b

<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> register_func<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;key: </span><span class="token interpolation"><span class="token punctuation">{</span>k<span class="token punctuation">}</span></span><span class="token string">, value: </span><span class="token interpolation"><span class="token punctuation">{</span>v<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token comment"># output:</span>
<span class="token comment"># key: add, value: &lt;function add at 0x7fdedd53cb90&gt;</span>
<span class="token comment"># key: multiply, value: &lt;function multiply at 0x7fdedd540200&gt;</span>
<span class="token comment"># key: matrix multiply, value: &lt;function multiply at 0x7fdedd5403b0&gt;</span>
<span class="token comment"># key: minus, value: &lt;function minus at 0x7fdedd540320&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(b,y){const t=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("本部分内容参考自：CSDN："),n("a",d,[s("python里为什么需要使用装饰器（decorator）"),p(t)])])]),r,n("blockquote",null,[n("p",null,[s("本部分内容参考自：知乎："),n("a",k,[s("一文搞懂什么是Python装饰器？Python装饰器怎么用？"),p(t)])])]),v])}const h=e(l,[["render",m],["__file","reg.html.vue"]]),w=JSON.parse('{"path":"/posts/reg.html","title":"装饰器与注册器","lang":"zh-CN","frontmatter":{"title":"装饰器与注册器","date":"2024-05-10T00:00:00.000Z","author":"Genhiy","order":7,"category":["Python"],"tag":["CodeBook"],"description":"当你的项目中需要成批量的函数和类，且这些函数和类功能上相似或并行时，为了方便管理，你可以把这些指定的函数和类整合到一个字典，你可以用函数名或类名作为字典的key，也可用使用自定义的名字作为key，对应的函数或类作为value。构建这样一个字典的过程就是注册，Python引入注册器机制保证了这个字典可以自动维护，增加或删除新的函数或类时，不需要手动去修改字典。","head":[["meta",{"property":"og:url","content":"https://github.com/Genhiy/Genhiy.github.io/posts/reg.html"}],["meta",{"property":"og:site_name","content":"Genhiy"}],["meta",{"property":"og:title","content":"装饰器与注册器"}],["meta",{"property":"og:description","content":"当你的项目中需要成批量的函数和类，且这些函数和类功能上相似或并行时，为了方便管理，你可以把这些指定的函数和类整合到一个字典，你可以用函数名或类名作为字典的key，也可用使用自定义的名字作为key，对应的函数或类作为value。构建这样一个字典的过程就是注册，Python引入注册器机制保证了这个字典可以自动维护，增加或删除新的函数或类时，不需要手动去修改字典。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Genhiy"}],["meta",{"property":"article:tag","content":"CodeBook"}],["meta",{"property":"article:published_time","content":"2024-05-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰器与注册器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Genhiy\\"}]}"]]},"headers":[{"level":2,"title":"python函数","slug":"python函数","link":"#python函数","children":[]},{"level":2,"title":"为什么需要装饰器","slug":"为什么需要装饰器","link":"#为什么需要装饰器","children":[]},{"level":2,"title":"计算执行时间的例子","slug":"计算执行时间的例子","link":"#计算执行时间的例子","children":[{"level":3,"title":"定义装饰器","slug":"定义装饰器","link":"#定义装饰器","children":[]}]},{"level":2,"title":"使用装饰器","slug":"使用装饰器","link":"#使用装饰器","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]},{"level":2,"title":"内置装饰器","slug":"内置装饰器","link":"#内置装饰器","children":[{"level":3,"title":"@property","slug":"property","link":"#property","children":[]},{"level":3,"title":"@staticmethod 与 @classmethod","slug":"staticmethod-与-classmethod","link":"#staticmethod-与-classmethod","children":[]}]},{"level":2,"title":"为什么需要注册器","slug":"为什么需要注册器","link":"#为什么需要注册器","children":[]},{"level":2,"title":"构建及使用注册器","slug":"构建及使用注册器","link":"#构建及使用注册器","children":[]}],"git":{},"readingTime":{"minutes":13.13,"words":3940},"filePathRelative":"posts/reg.md","localizedDate":"2024年5月10日","excerpt":"<p>当你的项目中需要成批量的函数和类，且这些函数和类功能上相似或并行时，为了方便管理，你可以把这些指定的函数和类整合到一个字典，你可以用函数名或类名作为字典的key，也可用使用自定义的名字作为key，对应的函数或类作为value。构建这样一个字典的过程就是注册，Python引入注册器机制保证了这个字典可以自动维护，增加或删除新的函数或类时，不需要手动去修改字典。</p>\\n<p>Python注册器机制本质上是用装饰器来实现的。下面将从基本的Python函数出发，逐步介绍装饰器，最后学习注册器。</p>\\n<h2>python函数</h2>\\n<p>首先定义一个函数，然后用不同的方式调用它:</p>","autoDesc":true}');export{h as comp,w as data};
