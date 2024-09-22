import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as n,c as i,a as e,d as t,b as l,e as p}from"./app-SD3SAAIy.js";const s={},c=e("h2",{id:"论文基本信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#论文基本信息"},[e("span",null,"论文基本信息")])],-1),d={href:"https://arxiv.org/pdf/2404.06773.pdf",target:"_blank",rel:"noopener noreferrer"},L=p('<p><strong>要点：</strong></p><ul><li>LLaMA 解码器适配</li><li>视觉转换器 (ViT)</li><li>因果自关注</li><li>软掩码策略</li></ul><p><strong>目标：</strong> 本研究旨在将最初为大型语言模型设计的 LLaMA 纯解码器架构应用于计算机视觉领域。目标是探索将这一架构用于图像分类等任务的潜力，并实现与纯编码器架构相比具有竞争力的性能。</p><p><strong>方法：</strong> 本研究引入了一系列修改，以使标准 ViT 架构与 LLaMA 架构保持一致。主要修改包括</p><ul><li>使用后序列类别标记技术，将类别标记重新定位在图像标记之后，以解决注意力崩溃问题。</li><li>采用软掩码策略，逐步将因果掩码引入自我注意，促进优化。</li><li>利用因果自我注意提高计算效率，学习复杂表征。</li></ul><p><strong>指标：</strong> 定制模型 iLLaMA 在 ImageNet-1K 数据集上进行了评估，在使用 570 万个参数的情况下，最高准确率达到 75.1%。在ImageNet-21K上进行扩展和预训练后，该模型的准确率进一步提高到86.0%。广泛的实验证明了 iLLaMA 的可靠特性，包括校准、形状-纹理偏差、量化兼容性、ADE20K 分割和 CIFAR 转移学习，其性能可与纯编码器模型相媲美。</p><h2 id="评价与记录" tabindex="-1"><a class="header-anchor" href="#评价与记录"><span>评价与记录</span></a></h2><p>作者先用旋转位置编码RoPE替换了绝对位置编码LPE，效果有所提升（71.9-72.6），之后作者又把LPE加了回来，效果仍有提升（72.6-73.2）。作者在视觉任务上也使用了SwiGLU，其在视觉任务上也有效。使用RMSNorm替换了所有LN。</p>',8);function h(g,m){const r=a("ExternalLinkIcon");return n(),i("div",null,[c,e("p",null,[t("标题："),e("a",d,[t("Adapting LLaMA Decoder to Vision Transformer"),l(r)])]),L])}const u=o(s,[["render",h],["__file","ALDVT.html.vue"]]),T=JSON.parse('{"path":"/zsk/ai/paper/ALDVT.html","title":"Adapting LLaMA Decoder to Vision Transformer","lang":"zh-CN","frontmatter":{"date":"2024-04-17T00:00:00.000Z","title":"Adapting LLaMA Decoder to Vision Transformer","shortTitle":"ALDVT","author":"Genhiy","order":6,"category":["论文笔记"],"tag":["LLM"],"description":"论文基本信息 标题：Adapting LLaMA Decoder to Vision Transformer 要点： LLaMA 解码器适配 视觉转换器 (ViT) 因果自关注 软掩码策略 目标： 本研究旨在将最初为大型语言模型设计的 LLaMA 纯解码器架构应用于计算机视觉领域。目标是探索将这一架构用于图像分类等任务的潜力，并实现与纯编码器架构相比具...","head":[["meta",{"property":"og:url","content":"https://github.com/Genhiy/Genhiy.github.io/zsk/ai/paper/ALDVT.html"}],["meta",{"property":"og:site_name","content":"Genhiy"}],["meta",{"property":"og:title","content":"Adapting LLaMA Decoder to Vision Transformer"}],["meta",{"property":"og:description","content":"论文基本信息 标题：Adapting LLaMA Decoder to Vision Transformer 要点： LLaMA 解码器适配 视觉转换器 (ViT) 因果自关注 软掩码策略 目标： 本研究旨在将最初为大型语言模型设计的 LLaMA 纯解码器架构应用于计算机视觉领域。目标是探索将这一架构用于图像分类等任务的潜力，并实现与纯编码器架构相比具..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Genhiy"}],["meta",{"property":"article:tag","content":"LLM"}],["meta",{"property":"article:published_time","content":"2024-04-17T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Adapting LLaMA Decoder to Vision Transformer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-17T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Genhiy\\"}]}"]]},"headers":[{"level":2,"title":"论文基本信息","slug":"论文基本信息","link":"#论文基本信息","children":[]},{"level":2,"title":"评价与记录","slug":"评价与记录","link":"#评价与记录","children":[]}],"git":{},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"zsk/ai/paper/ALDVT.md","localizedDate":"2024年4月17日","excerpt":"<h2>论文基本信息</h2>\\n<p>标题：<a href=\\"https://arxiv.org/pdf/2404.06773.pdf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Adapting LLaMA Decoder to Vision Transformer</a></p>\\n<p><strong>要点：</strong></p>\\n<ul>\\n<li>LLaMA 解码器适配</li>\\n<li>视觉转换器 (ViT)</li>\\n<li>因果自关注</li>\\n<li>软掩码策略</li>\\n</ul>\\n<p><strong>目标：</strong>\\n本研究旨在将最初为大型语言模型设计的 LLaMA 纯解码器架构应用于计算机视觉领域。目标是探索将这一架构用于图像分类等任务的潜力，并实现与纯编码器架构相比具有竞争力的性能。</p>","autoDesc":true}');export{u as comp,T as data};
