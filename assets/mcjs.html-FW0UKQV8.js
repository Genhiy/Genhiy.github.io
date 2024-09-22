import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as h,e as n}from"./app-SD3SAAIy.js";const s={},p=n('<h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架"><span>框架</span></a></h2><h4 id="hadoop" tabindex="-1"><a class="header-anchor" href="#hadoop"><span>Hadoop</span></a></h4><p>Hadoop 是一个开源的分布式计算框架，它可以在大量计算机上进行分布式计算，以处理大量的数据。Hadoop 由两个主要组件组成：Hadoop Distributed File System（HDFS）和MapReduce。Hadoop 的应用场景非常广泛，包括搜索引擎、数据挖掘、数据分析、机器学习等领域。</p><h4 id="hive" tabindex="-1"><a class="header-anchor" href="#hive"><span>Hive</span></a></h4><p>Hive是一个基于Hadoop的数据仓库工具，它允许用户使用类似于SQL的查询语言（HiveQL）来查询和分析存储在Hadoop上的数据。它可以将结构化的数据文件映射为一张数据库表，并提供简单的 SQL 查询功能，可以将 SQL 语句转换为 MapReduce 任务进行运行。学习成本低，可以通过类SQL语句快速实现简单的 MapReduce 统计，不必开发专门的 MapReduce 应用，适合数据仓库的统计分析。</p><h4 id="spark" tabindex="-1"><a class="header-anchor" href="#spark"><span>Spark</span></a></h4><p>一种快速、通用、可扩展的大数据处理引擎。它扩展了广泛使用的 MapReduce 计算模型。高效的支持更多计算模式，包括交互式查询和流处理。Spark 的一个主要特点是能够在内存中进行计算，及时依赖磁盘进行复杂的运算，比 MapReduce 更加高效。</p><h4 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>Yarn</span></a></h4><p>Yarn（Yet Another Resource Negotiator）是 Apache Hadoop 生态系统中的一个资源调度和管理系统。它被用于分布式计算框架，如Apache Spark、Apache Hive、Apache Flink等，以协调集群上的资源分配和任务执行。</p><h2 id="实验" tabindex="-1"><a class="header-anchor" href="#实验"><span>实验</span></a></h2><h3 id="实验操作" tabindex="-1"><a class="header-anchor" href="#实验操作"><span>实验操作</span></a></h3><h4 id="ab实验" tabindex="-1"><a class="header-anchor" href="#ab实验"><span>AB实验</span></a></h4><p>开发术语。针对同一个目标制定不同的策略，将研究对象（一般指流量）随机均匀分成几组，保证不同组流量的同质性，对不同的分组实时不同的干预、策略，然后根据指标效果，最终选择一个表现最好的组使用的策略全量上线。</p><h4 id="分层实验" tabindex="-1"><a class="header-anchor" href="#分层实验"><span>分层实验</span></a></h4><p>同层互斥（不允许两个实验同时影响一位用户）、不同层正交（实验有相同百分比的重叠用户）。</p><p>不同层正交意为，比如召回层进行10个实验，那么就把用户分为10个桶，每个桶含有10%的用户，其中9个实验桶，1个对照桶。此时，精排层也需要进行10个实验，那么也用户分为10个桶，每个桶含有召回层10个桶各自10%用户，这样就保证了各桶用户相同，不受召回层实验影响。</p><h4 id="holdout" tabindex="-1"><a class="header-anchor" href="#holdout"><span>Holdout</span></a></h4><p>保留10%的用户，完全不受实验影响，用于考察整个部门对业务指标的贡献。</p><h4 id="推全" tabindex="-1"><a class="header-anchor" href="#推全"><span>推全</span></a></h4><p>如果一个实验经过小范围AB测试后发现对系统的重点指标有明显提升，那么此时可以把这个模型/策略用于全体用户，此时叫做推全，推全时新建一个推全层，与其他层正交。</p><h4 id="反转实验" tabindex="-1"><a class="header-anchor" href="#反转实验"><span>反转实验</span></a></h4><p>由于有些模型对用户的影响需要长期观测才能产生，如用户留存率等，也即，我们既希望尽快推全，又希望观测长期影响，此时可以在新的推全层上，保留一个小小的反转桶，使用旧策略，用于长期观测新旧策略的差别。也即将大部分样本作为实验组，小部分样本作为对照组，所以叫做反转实验。</p><h3 id="评估指标" tabindex="-1"><a class="header-anchor" href="#评估指标"><span>评估指标</span></a></h3><h4 id="cpm" tabindex="-1"><a class="header-anchor" href="#cpm"><span>CPM</span></a></h4><p>按照每千次展示计费，以千次为一个计费单位，即广告主投放的链接展示1000次时，系统就收取一次费用。</p><h4 id="cpc" tabindex="-1"><a class="header-anchor" href="#cpc"><span>CPC</span></a></h4><p>Cost Per Click，广告每次被用户点击所需要的广告费用，即如果广告主投放的广告被用户点击时，系统就需要收取费用。</p><h4 id="ocpm" tabindex="-1"><a class="header-anchor" href="#ocpm"><span>OCPM</span></a></h4><p>一种广告出价模式，按照广告千次曝光来进行计费的，是广告系统经过预估点击率和转化率的分析后，向最有可能发生转化的用户展示广告，保证转化成本尽可能或者低于广告主的目标出价。</p><h4 id="tp" tabindex="-1"><a class="header-anchor" href="#tp"><span>TP</span></a></h4><p>Time On Page，页面停留时间：指用户在各个页面的停留时长。TP 时长可以反映出某个网页或活动页对用户的吸引力，也可以通过分析 TP，来研究用户的行为偏好与喜好。</p><p>Tensor Parallel，张量并行：对大模型的每个层，将其参数切开分置于不同GPU上，以实现模型训练或推理。</p><h2 id="模型" tabindex="-1"><a class="header-anchor" href="#模型"><span>模型</span></a></h2><h3 id="召回" tabindex="-1"><a class="header-anchor" href="#召回"><span>召回</span></a></h3><h4 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h4><p>我们可以离线计算所有用户、物品的相似度，建立“用户-&gt;物品“、”物品-&gt;物品“、”用户-&gt;用户“的索引表，用于ItemCF和UserCF，存储于后台之中，索引的意义在于避免枚举所有的物品，离线计算量大，在线计算量小。</p><h4 id="u2i-u2a" tabindex="-1"><a class="header-anchor" href="#u2i-u2a"><span>U2I/U2A</span></a></h4><p>在内容推荐系统中，&quot;U2A&quot; 常常指的是 &quot;User-to-Article&quot;，即用户向文章的推荐。这是一种常见的推荐策略，系统根据用户的历史行为、兴趣偏好等信息，为用户推荐他可能感兴趣的文章。</p><p>这样的系统通常利用机器学习的技术，比如协同过滤（Collaborative Filtering）或者深度学习（Deep Learning）等方法，对用户的行为进行学习，然后预测用户对哪些文章会感兴趣，来生成推荐列表。</p><p>例如，如果在一个新闻推荐系统里，用户A经常点击阅读和科技、人工智能相关的新闻，那么系统就会把新的科技类、AI类新闻推荐给用户A。</p><p>对于业务方来说，这样的系统可以帮助他们更有效地向用户推荐有价值、有用的内容，提高用户满意度和使用时长。对于用户来说，这样的推荐系统也可以有效帮助他们发现和自己相关或感兴趣的信息，节省寻找和筛选信息的时间。</p>',41),r=[p];function d(i,c){return e(),h("div",null,r)}const l=a(s,[["render",d],["__file","mcjs.html.vue"]]),f=JSON.parse('{"path":"/rcmd/ch-1/mcjs.html","title":"推荐系统名词解释","lang":"zh-CN","frontmatter":{"date":"2024-06-19T00:00:00.000Z","title":"推荐系统名词解释","author":"Genhiy","order":2,"category":["推荐系统"],"tag":["无标签"],"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"框架","slug":"框架","link":"#框架","children":[]},{"level":2,"title":"实验","slug":"实验","link":"#实验","children":[{"level":3,"title":"实验操作","slug":"实验操作","link":"#实验操作","children":[]},{"level":3,"title":"评估指标","slug":"评估指标","link":"#评估指标","children":[]}]},{"level":2,"title":"模型","slug":"模型","link":"#模型","children":[{"level":3,"title":"召回","slug":"召回","link":"#召回","children":[]}]}],"git":{},"readingTime":{"minutes":5.12,"words":1536},"filePathRelative":"rcmd/ch-1/mcjs.md","localizedDate":"2024年6月19日"}');export{l as comp,f as data};