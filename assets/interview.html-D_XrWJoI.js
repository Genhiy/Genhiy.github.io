import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as p,a as n,d as s,b as e,e as i}from"./app-SD3SAAIy.js";const c={},u=i(`<h2 id="字节跳动" tabindex="-1"><a class="header-anchor" href="#字节跳动"><span>字节跳动</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 2024.4.19 16:00-16:52 推荐算法团队-通知栏推荐 一面 16:53 通过✅</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 2024.4.19 16:55 约二面</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 2024.4.19 17:00-18:00 二面</label></li></ul><h3 id="一面" tabindex="-1"><a class="header-anchor" href="#一面"><span>一面</span></a></h3><p>3分钟自我介绍，20分钟聊所做过的东西，聊天氛围还挺好的，很随意的氛围，主要是面试官很好奇自动驾驶融合的相关任务。然后是一些专业知识的问答：</p><ul><li>我看你在参加比赛的时候用了很多样本侧和损失函数相关的trick，可以简单聊聊你对这些trick的看法吗？</li><li>batch norm的做法？</li><li>优化器有哪些？是怎么选择的？对动量怎么看？</li><li>忘完了……下次面试得录音，不然面完就忘完了……</li></ul><p>然后就是代码题部分，题目是从M个已排序的长为N的数组中找出最大的K个数字（TopK问题）。</p><p>我的解决思路就是冒泡，手里拿一个长为K的数组，然后对于每个数组，从大往小看，如果我手里的数组还没满，或者看到的数字大于我手里数组的最小值（最后一位）我就把他加进来，然后如果手里数组的最小值已经大于看到的数字了，就可以看下一个数组了。</p><p>实现：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">topK</span><span class="token punctuation">(</span>lists<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> l <span class="token keyword">in</span> lists<span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> l<span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">&lt;</span> k<span class="token punctuation">:</span>
                res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> res<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;</span> i<span class="token punctuation">:</span>
                    res<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> i
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">continue</span>
            res<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r={href:"https://leetcode.cn/problems/smallest-k-lcci/description/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zhuanlan.zhihu.com/p/76734219",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"反问：部门的工作内容以及希望看到实习生什么样的能力和潜质。面试官说的是比较相似的是算法能力、分析问题的能力以及表达是否充分、清晰，其余的因人而异，每个面试官看重的和每个面试者所展现的亮点都不尽相同。",-1),h=n("h3",{id:"二面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二面"},[n("span",null,"二面")])],-1),b=n("p",null,"同样是20分钟聊所做的东西，不过是面试官问的，你这几个项目、实习经历里你最想介绍的是哪一个，仔细介绍一下。然后也是一些问题：",-1),m=n("li",null,[n("p",null,"二分类问题有哪些评价指标？"),n("p",null,"笑死当时就只想到了，准确度，精准率召回率F1 score，然后面试官提醒了AOC，然后问怎么算的，我说是PR曲线下面积，如果画不出来PR曲线也能计算，但我忘记计算方法了……记得查一下，还有了解一下工业界在大规模数据的情况下怎么计算的。"),n("p",null,"正确答案："),n("ul",null,[n("li",null,"一级指标：混淆矩阵、TP、FN、FP、TN"),n("li",null,"二级指标：准确率、精确率、召回率、灵敏度、特异度"),n("li",null,"三级指标：F1-Score、Fb-Score、P-R曲线、ROC和AUC、代价错误率和代价曲线")])],-1),_=n("li",null,[n("p",null,"如果一个模型在训练时表现很好，落地测试时却表现不好，你认为发生了什么问题？怎么解决？"),n("p",null,"过拟合的问题；out of distribution的问题；具体的查看负样本，看看是哪些样本在训练时被正确处理但是落地时没被正确处理，然后具体问题具体分析；另外测试时也尽量不要只用测试集去测试，可以抽0.1%的用户做盲测，对这些用户尝试修改后的算法，根据用户实际反馈测试模型表现。")],-1),v=n("p",null,"如果需要做一个抽奖池，你如何保证先抽的人和后抽的人抽到的概率相同？",-1),f=n("p",null,"抽奖的公平性问题，可以参考微信红包，但抽奖是个分类问题，红包是个回归问题，还略有不同。从数学角度上思考就是如何使得条件概率能尽可能和先验概率分布相同。",-1),y={href:"https://blog.csdn.net/qq_37043811/article/details/123782528",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.zhihu.com/question/22625187",target:"_blank",rel:"noopener noreferrer"},w=n("li",null,[n("p",null,"如果你是leader主导完成一个推荐系统，你有四个小团队：产品、数据分析、算法、工程，你如何考虑这四个团队的工作关系？"),n("p",null,"我的回答：产品更关注搜广推的策略，更关注公司如何能产生更高的收益，所以产品团队会对算法提出要求，由另三个团队实现。数据分析团队更关注人们如何做出决策，做出了什么决策，也就是更关注用户端，那么数据分析就能对算法的实现形成辅助，而算法团队要根据产品团队给出的目标、数据分析团队提供的用户偏好进行算法设计，最后由工程团队集成到技术栈里。")],-1),x=n("li",null,[n("p",null,"你看过的别人做过的东西里面，你最感到眼前一亮的是什么？"),n("p",null,"我的回答主要关注在领域间的迁移，比如fisher线性判别分析中的“类内聚集，类间离散”和软件工程中的“高内聚，低耦合”；何恺明ResNet、Unet中的skip connection和自动控制理论中的“前馈”；Mamba中的S4和现代控制理论中的状态空间方程；模糊集理论相对于集合所做的改变之于贝叶斯估计和最大似然估计的区别等等……所以学习一定不能只关注自己眼前的事情，而同时也要关注别人做的事情、别的领域的东西。")],-1),N=n("li",null,[n("p",null,"别人做的东西里，有什么是你觉得如果让你做你能做的更好的？"),n("p",null,"我的回答：携程的大数据杀熟事件，如果是我做我会选择用发优惠券的形式进行大数据杀熟和价格歧视，而且将这个行为包装为抽奖，那些系统认为应该杀熟的人，将无法抽到大额优惠券，但是那些价格敏感的人可以。")],-1),T=n("p",null,"代码题：",-1),C=n("p",null,"第一道是斐波那契数列的计算，主要是看能想到多少方法，我想到的就是循环、递归、按数学公式计算，然后面试官还提醒了可以按通项公式计算（类似动态规划）。",-1),K={href:"https://leetcode.cn/problems/0i0mDW/description/",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"复盘",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#复盘"},[n("span",null,"复盘")])],-1),R=n("p",null,"存一下希望以后搞明白的问题：",-1),S=n("ul",null,[n("li",null,"粗排和召回、精拍有什么不同，为什么要做粗排？"),n("li",null,"NLP的数据增强和CV里面有什么不同，你觉得它为什么有效？"),n("li",null,"了解过的损失函数和评价指标？")],-1);function z(F,V){const a=l("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[s("看小红书面经的时候看到别人说这道题的方法是，维护堆，是这样的，不过更多是数组没有事先排序的时候这样做。不过字节确实挺喜欢考TopK的……回头把堆看一下，leetcode："),n("a",r,[s("面试题 17.14. 最小K个数"),e(a)]),s("；知乎："),n("a",k,[s("面试官最喜爱的TopK问题算法详解"),e(a)])]),d,h,b,n("ol",null,[m,_,n("li",null,[v,f,n("p",null,[s("参考CSDN："),n("a",y,[s("最全微信红包分配算法,不只是二倍均值那么简单"),e(a)])]),n("p",null,[s("参考知乎问题："),n("a",g,[s("微信红包的随机算法是怎样实现的？"),e(a)])])]),w,x,N]),T,C,n("p",null,[s("第二道是一个矩阵，从左上角走到右下角，把所经过的数字加和，怎么过去和最小？这也是个搜索问题，深搜广搜之类，我当时回答的是剪枝。这道题在leetcode上有原题："),n("a",K,[s("LCR 099. 最小路径和"),e(a)]),s("。")]),P,R,S])}const L=t(c,[["render",z],["__file","interview.html.vue"]]),q=JSON.parse('{"path":"/essay/interview.html","title":"字节跳动面经","lang":"zh-CN","frontmatter":{"title":"字节跳动面经","date":"2024-04-15T00:00:00.000Z","author":"Genhiy","index":false,"article":false,"category":["AI"],"tag":["AI"],"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"字节跳动","slug":"字节跳动","link":"#字节跳动","children":[{"level":3,"title":"一面","slug":"一面","link":"#一面","children":[]},{"level":3,"title":"二面","slug":"二面","link":"#二面","children":[]},{"level":3,"title":"复盘","slug":"复盘","link":"#复盘","children":[]}]}],"git":{},"readingTime":{"minutes":6.12,"words":1836},"filePathRelative":"essay/interview.md","localizedDate":"2024年4月15日"}');export{L as comp,q as data};