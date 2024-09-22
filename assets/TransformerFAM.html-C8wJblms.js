import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as t}from"./app-SD3SAAIy.js";const a="/assets/images/zsk/paper/Snipaste_2024-04-24_15-46-35.png",o={},i=t('<h2 id="基础信息" tabindex="-1"><a class="header-anchor" href="#基础信息"><span>基础信息</span></a></h2><h3 id="_1-研究问题" tabindex="-1"><a class="header-anchor" href="#_1-研究问题"><span>1. 研究问题</span></a></h3><p>这篇论文研究了Transformer模型在处理长序列输入时面临的二次注意力复杂度问题，这限制了它们对无限长输入的处理能力。</p><h3 id="_2-解决模型及架构" tabindex="-1"><a class="header-anchor" href="#_2-解决模型及架构"><span>2. 解决模型及架构</span></a></h3><ul><li><strong>模型名称</strong>: Feedback Attention Memory (FAM)</li><li><strong>架构</strong>: TransformerFAM通过一个反馈循环设计，使网络能够关注自身的潜在表示，从而促进Transformer内部工作记忆的产生。 <ul><li><strong>模块</strong>: 使用了标准的Transformer层，并引入了Block Sliding Window Attention (BSWA)作为处理长上下文输入的两种主要方法之一。</li><li><strong>预训练模型</strong>: 是的，TransformerFAM能够无缝集成与预训练模型，实验中使用了1B, 8B, 和 24B的Flan-PaLM LLMs进行微调。</li><li><strong>预训练模型来源</strong>: Flan-PaLM是构建在预训练PaLM模型之上的，通过指令微调进行训练。</li></ul></li></ul><h3 id="_3-解决结果与验证" tabindex="-1"><a class="header-anchor" href="#_3-解决结果与验证"><span>3. 解决结果与验证</span></a></h3><ul><li><strong>结果</strong>: TransformerFAM在长上下文任务上显著提高了Transformer的性能。</li><li><strong>数据集</strong>: 测试和验证了多个长上下文任务，包括但不限于Isabelle、NarrativeQA、PG-19、ScrollsQasper、ScrollsQuality和XLSum。</li><li><strong>验证指标</strong>: 使用了准确率、ROUGE-L等指标进行评估。</li><li><strong>对比方法</strong>: 与标准的Transformer模型、Transformer with Sliding Window Attention (SWA)、Block Sliding Window Attention (BSWA)等方法进行了对比。</li></ul><h3 id="_4-核心创新点" tabindex="-1"><a class="header-anchor" href="#_4-核心创新点"><span>4. 核心创新点</span></a></h3><ul><li><strong>工作记忆</strong>: 引入了工作记忆的概念，通过反馈循环机制使Transformer能够维持长期依赖关系。</li><li><strong>无需额外权重</strong>: TransformerFAM不需要额外的权重，可以重用预训练的模型权重。</li><li><strong>计算复杂度</strong>: 在推理过程中，TransformerFAM具有线性的计算复杂度O(L)，其中L是处理的token长度。</li></ul><h3 id="_5-未解决问题" tabindex="-1"><a class="header-anchor" href="#_5-未解决问题"><span>5. 未解决问题</span></a></h3><p>论文中提到了尽管TransformerFAM在长上下文任务上取得了进步，但深度学习中的记忆问题仍然是一个开放性挑战，需要进一步的研究来解决。此外，推理和记忆的转移至长期记忆也是未来研究的方向。</p><h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记"><span>笔记</span></a></h2><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看了半天没看懂咋做的，然后看到了附录里的这张图，秒懂，这张图为啥要放附录里！……这篇论文关于将Transformer的推理降到O(n)的方式是类似于滑动窗口（Block Sliding Window Attention, BSWA）的操作，但做的改进是添加了一部分长期记忆（称之为Feedback Loop），其窗口内一部分是短期记忆，一部分是长期记忆，进行了一定的权衡。目前在将推理时间复杂度降低到一次时间复杂度的方法大抵如此，Mamba也是类似于通过了一种记忆模块，随着时间的推移逐步遗忘之前的元素。</p>',14),s=[i];function l(c,h){return e(),n("div",null,s)}const d=r(o,[["render",l],["__file","TransformerFAM.html.vue"]]),g=JSON.parse('{"path":"/zsk/ai/paper/TransformerFAM.html","title":"TransformerFAM","lang":"zh-CN","frontmatter":{"title":"TransformerFAM","date":"2024-04-24T00:00:00.000Z","author":"Genhiy","order":8,"category":["论文笔记"],"tag":["Transformer"],"description":"基础信息 1. 研究问题 这篇论文研究了Transformer模型在处理长序列输入时面临的二次注意力复杂度问题，这限制了它们对无限长输入的处理能力。 2. 解决模型及架构 模型名称: Feedback Attention Memory (FAM) 架构: TransformerFAM通过一个反馈循环设计，使网络能够关注自身的潜在表示，从而促进Trans...","head":[["meta",{"property":"og:url","content":"https://github.com/Genhiy/Genhiy.github.io/zsk/ai/paper/TransformerFAM.html"}],["meta",{"property":"og:site_name","content":"Genhiy"}],["meta",{"property":"og:title","content":"TransformerFAM"}],["meta",{"property":"og:description","content":"基础信息 1. 研究问题 这篇论文研究了Transformer模型在处理长序列输入时面临的二次注意力复杂度问题，这限制了它们对无限长输入的处理能力。 2. 解决模型及架构 模型名称: Feedback Attention Memory (FAM) 架构: TransformerFAM通过一个反馈循环设计，使网络能够关注自身的潜在表示，从而促进Trans..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Genhiy"}],["meta",{"property":"article:tag","content":"Transformer"}],["meta",{"property":"article:published_time","content":"2024-04-24T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TransformerFAM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-24T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Genhiy\\"}]}"]]},"headers":[{"level":2,"title":"基础信息","slug":"基础信息","link":"#基础信息","children":[{"level":3,"title":"1. 研究问题","slug":"_1-研究问题","link":"#_1-研究问题","children":[]},{"level":3,"title":"2. 解决模型及架构","slug":"_2-解决模型及架构","link":"#_2-解决模型及架构","children":[]},{"level":3,"title":"3. 解决结果与验证","slug":"_3-解决结果与验证","link":"#_3-解决结果与验证","children":[]},{"level":3,"title":"4. 核心创新点","slug":"_4-核心创新点","link":"#_4-核心创新点","children":[]},{"level":3,"title":"5. 未解决问题","slug":"_5-未解决问题","link":"#_5-未解决问题","children":[]}]},{"level":2,"title":"笔记","slug":"笔记","link":"#笔记","children":[]}],"git":{},"readingTime":{"minutes":2.39,"words":718},"filePathRelative":"zsk/ai/paper/TransformerFAM.md","localizedDate":"2024年4月24日","excerpt":"<h2>基础信息</h2>\\n<h3>1. 研究问题</h3>\\n<p>这篇论文研究了Transformer模型在处理长序列输入时面临的二次注意力复杂度问题，这限制了它们对无限长输入的处理能力。</p>\\n<h3>2. 解决模型及架构</h3>\\n<ul>\\n<li><strong>模型名称</strong>: Feedback Attention Memory (FAM)</li>\\n<li><strong>架构</strong>: TransformerFAM通过一个反馈循环设计，使网络能够关注自身的潜在表示，从而促进Transformer内部工作记忆的产生。\\n<ul>\\n<li><strong>模块</strong>: 使用了标准的Transformer层，并引入了Block Sliding Window Attention (BSWA)作为处理长上下文输入的两种主要方法之一。</li>\\n<li><strong>预训练模型</strong>: 是的，TransformerFAM能够无缝集成与预训练模型，实验中使用了1B, 8B, 和 24B的Flan-PaLM LLMs进行微调。</li>\\n<li><strong>预训练模型来源</strong>: Flan-PaLM是构建在预训练PaLM模型之上的，通过指令微调进行训练。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,g as data};
