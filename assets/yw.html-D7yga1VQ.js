import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,e as s}from"./app-SD3SAAIy.js";const a={},t=s('<h3 id="推荐系统什么时候使用point-wise、pair-wise、list-wise" tabindex="-1"><a class="header-anchor" href="#推荐系统什么时候使用point-wise、pair-wise、list-wise"><span>推荐系统什么时候使用point wise、pair wise、list wise？</span></a></h3><p>推荐系统的设计和实现可以采用不同的方法来优化用户体验和系统性能。Point-wise、Pair-wise和List-wise是三种常见的推荐系统评估方法，它们各自适用于不同的场景：</p><p><strong>Point-wise</strong>:</p><ul><li>这种方法关注于单个推荐项的准确性。</li><li>适用于评估推荐系统在推荐单个项目时的表现，比如点击率（CTR）。</li><li>常用于二分类问题，如预测用户是否会点击某个推荐项。</li><li>适用于广告投放、新闻推荐等场景。</li></ul><p><strong>Pair-wise</strong>:</p><ul><li>这种方法比较两个推荐项之间的相对顺序，通常用于排序问题。</li><li>适用于评估推荐系统在将项目排序时的相对性能，如用户更倾向于点击推荐列表中的哪一项。</li><li>常用于评估推荐列表中项目顺序的优化，如协同过滤算法。</li><li>适用于需要优化推荐列表顺序的场景，例如电子商务网站的商品推荐。</li></ul><p><strong>List-wise</strong>:</p><ul><li>这种方法评估整个推荐列表的性能，考虑列表中所有项目的组合效果。</li><li>适用于评估推荐系统生成的完整推荐列表的整体质量，如列表的多样性、新颖性等。</li><li>常用于评估推荐系统在生成推荐列表时的整体性能，如NDCG（Normalized Discounted Cumulative Gain）。</li><li>适用于需要优化整个推荐列表的场景，例如音乐播放列表、电影推荐等。</li></ul><p>选择使用哪种方法取决于推荐系统的目标和应用场景。例如，如果你的目标是提高用户点击单个推荐项的概率，可能会选择Point-wise方法。如果你更关心推荐列表的整体排序和用户体验，可能会选择Pair-wise或List-wise方法。在实际应用中，这些方法也可以结合使用，以达到最佳的推荐效果。</p><h3 id="推荐系统为什么大多转化为分类问题而不是回归问题" tabindex="-1"><a class="header-anchor" href="#推荐系统为什么大多转化为分类问题而不是回归问题"><span>推荐系统为什么大多转化为分类问题而不是回归问题？</span></a></h3><p>根据经验，回归模型确实更难调优，有时，将样本真值划分为一系列的区间，然后转变为分类问题，可以取得更好的结果。</p><p>拿例子来说：深度估计转化为序数回归问题，3D属性回归问题转化为bin based的问题，都可以一定程度提升性能，而且可以快速收敛。是什么造成了这种现象呢？从网上的讨论来看，可以归纳为以下几个原因：</p><ol><li>回归问题的损失函数更难选取。回归问题的背后是贝叶斯统计学，例如，线性回归的假设是真值服从高斯分布，而现实生活中的问题往往并不满足高斯分布，因此不能简单的使用线性回归中的平方损失来衡量误差。由于很多人在做回归问题时，不加考虑的使用了平方损失，导致最终结果不令人满意。</li><li>分类问题对误差的容忍更大。例如，逻辑回归输出0.6和1.0是一样的，最后都会被转化为同一个类别。而回归则不是，0.1的误差就是0.1。因此，回归问题对结果的要求更严格，同时，这也导致回归问题对离群点更为敏感。</li><li>从优化的角度讲，由于回归问题对离群点敏感，这就导致在梯度下降（或反向传播）时容易发生梯度消失或梯度爆炸的问题。同时，由于回归问题对误差要求比较高，过多的正则会导致结果变差，因此一些在分类问题里面常用的正则化方法无法简单的套用在回归问题中。这使得回归问题调参变得困难。</li><li>从样本的角度看，由于回归问题对误差的要求比较高，因此对样本量的需求也更大。例如，对于两个样本，其真值分别为0.6和1.0，因此它们是属于同一类的，对于分类问题，学习器只要学习到它们属于同一类即可，因此不要求那么多的数据，而对于回归问题，有时0.1的误差都是很大的，因此对样本量的需求也会更大。</li></ol><p>最后，通过划分区间将回归问题转变为分类问题，是一个常见的做法，很多时候也能取得比用回归算法更好的效果。但是，也有人指出，这种做法是不合适的，因为这是将一步解决的问题划分成了两步：划分区间和分类。而且，划分区间以后，也不能简单的使用分类算法，因为这等于忽略了区间之间的大小关系，而应该使用序数回归（ordinal regression）的方法。</p><p>综上可见，回归问题确实比分类问题要困难一些。</p><blockquote><p>参考自：https://www.zhihu.com/question/361458081/answer/2724203424</p></blockquote><h3 id="推荐系统如何平衡结果的相关性和多样性" tabindex="-1"><a class="header-anchor" href="#推荐系统如何平衡结果的相关性和多样性"><span>推荐系统如何平衡结果的相关性和多样性？</span></a></h3><p>面试官为什么要问这么一个问题，难道推荐系统里面推荐结果的相关性和多样性二者不可兼得嘛？首先我们要清楚何为“相关性”，何为“多样性”。</p><p>何为相关性：推荐的结果和用户的兴趣偏好相关度比较高；相关性本身不是一个结果指标，最终能体现相关性的结果指标其实还是点击率（CTR）； 何为多样性：推荐的结果里物料的类型、种类等比较丰富，比如电商里面推荐的商品种类比较多，内容里面推荐的视频风格、题材比较多。多样性本身是一个结果指标，可以在最终结果里进行统计。 推荐系统很多时候推荐结果的相关性和多样性会呈现负相关。因为大部分用户的兴趣比较固定。推荐系统如果一直基于用户本身的兴趣去进行推荐和利用，在电商领域就会出现商品的类目集中度很高，商品多样性较差；在内容领域就会出现都是同一类型同一风格的视频，信息茧房会比较严重。</p><p>所以推荐系统是一定要在用户原有兴趣的基础上做一些探索，一方面是为了探索更多用户的兴趣而不是仅仅基于用户历史的兴趣导致信息茧房严重，另一方面是为了给其他长尾物料更多的露出机会，让所有的物料都有曝光机会，整个场域可健康持续发展。</p><h3 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题"><span>其他问题</span></a></h3><h4 id="推荐系统的流量分为哪些" tabindex="-1"><a class="header-anchor" href="#推荐系统的流量分为哪些"><span>推荐系统的流量分为哪些？</span></a></h4><p>自然流量、商业化流量、电商1pp流量、冷启动流量、直播1pp扶持流量等。</p>',23),n=[t];function r(p,o){return e(),l("div",null,n)}const d=i(a,[["render",r],["__file","yw.html.vue"]]),w=JSON.parse('{"path":"/rcmd/ch-1/yw.html","title":"推荐系统业务相关问题","lang":"zh-CN","frontmatter":{"date":"2024-06-08T00:00:00.000Z","title":"推荐系统业务相关问题","author":"Genhiy","order":1,"category":["推荐系统"],"tag":["无标签"],"feed":false,"seo":false,"head":[]},"headers":[{"level":3,"title":"推荐系统什么时候使用point wise、pair wise、list wise？","slug":"推荐系统什么时候使用point-wise、pair-wise、list-wise","link":"#推荐系统什么时候使用point-wise、pair-wise、list-wise","children":[]},{"level":3,"title":"推荐系统为什么大多转化为分类问题而不是回归问题？","slug":"推荐系统为什么大多转化为分类问题而不是回归问题","link":"#推荐系统为什么大多转化为分类问题而不是回归问题","children":[]},{"level":3,"title":"推荐系统如何平衡结果的相关性和多样性？","slug":"推荐系统如何平衡结果的相关性和多样性","link":"#推荐系统如何平衡结果的相关性和多样性","children":[]},{"level":3,"title":"其他问题","slug":"其他问题","link":"#其他问题","children":[]}],"git":{},"readingTime":{"minutes":6.03,"words":1809},"filePathRelative":"rcmd/ch-1/yw.md","localizedDate":"2024年6月8日"}');export{d as comp,w as data};
