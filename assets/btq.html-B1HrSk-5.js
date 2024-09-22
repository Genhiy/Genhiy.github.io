import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as t,c as r,a,d as i,b as c,e}from"./app-SD3SAAIy.js";const h="/assets/images/ks/arch/btq/image5.png",p="/assets/images/ks/arch/btq/image6.png",o="/assets/images/ks/arch/btq/image7.png",d="/assets/images/ks/arch/btq/image8.png",g="/assets/images/ks/arch/btq/image9.png",f="/assets/images/ks/arch/btq/image10.png",u="/assets/images/ks/arch/btq/image11.png",m="/assets/images/ks/arch/btq/image12.png",k={},b=e('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><h3 id="业务场景" tabindex="-1"><a class="header-anchor" href="#业务场景"><span>业务场景</span></a></h3><p>推荐是最重要的功能之一, 推荐系统中涉及到下面两类业务场景：</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>模型训练场景下, 每个训练都需要读取样本数据, 读取的数据总流量: 样本数据流量×训练数量, 为1TB/s级别</li><li>模型传输场景下, 每个在线推荐服务都需要读取模型, 读取的模型总流量: 模型流量×推荐服务机器数, 为百GB/s至10TB/s级别</li><li>商业化部门, 需要传输广告物料，每个在线广告服务都需要读取广告物料, 读取的总流量: 物料流量×广告服务机器数, 为10TB/s级别</li></ul><p>从上可以看出, 这几种场景下读出流量都是巨大.</p><h3 id="业内方案" tabindex="-1"><a class="header-anchor" href="#业内方案"><span>业内方案</span></a></h3><h4 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka"><span>kafka</span></a></h4><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="dragonfly" tabindex="-1"><a class="header-anchor" href="#dragonfly"><span>Dragonfly</span></a></h4><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11),_={href:"https://d7y.io/",target:"_blank",rel:"noopener noreferrer"},x=e('<p>把样本、模型、广告物料写到文件里面, 然后通过Dragonfly分发文件来完成数据的传输。</p><h3 id="快手方案" tabindex="-1"><a class="header-anchor" href="#快手方案"><span>快手方案</span></a></h3><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>快手解决方案就是BTQ, BTQ首先是一种MQ, 概念模型类似Kafka, 其次BTQ利用P2P的思想来完成数据流的实时分发, 解决超大读写比的问题。</p><h3 id="方案对比" tabindex="-1"><a class="header-anchor" href="#方案对比"><span>方案对比</span></a></h3><p>针对上述的方案, 业内公司使用的情况如下：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>目前只有快手使用的是实时分发的方案, 那文件分发和实时分发的优缺点到底如何呢？</p><h4 id="文件分发" tabindex="-1"><a class="header-anchor" href="#文件分发"><span>文件分发</span></a></h4><p>优点：</p><ul><li>实现相对简单: <ul><li>不需要自己实现存储</li><li>只要有一台机器成功下载过文件后, 别的机器很容易能从这台机器上去下载, P2P利用率非常高</li></ul></li><li>对用户程序非侵入, 用户使用非常简单, 只需要读取分发好的文件即可</li><li>由于非侵入式, 客户端升级非常简单, 不依赖于用户的升级, 可以做到所有的客户端都是同一个版本</li><li>客户端与用户程序完全解耦, 客户端出问题不会影响用户进程</li></ul><p>缺点：</p><ul><li>实时性不够好</li><li>当分发的文件最终需要加载到内存中而且没必要保存到磁盘上时, 多了一次磁盘IO, 性能不够好, 容易造成线上磁盘IO抖动</li><li>分发速度受限于磁盘速度, 比较低</li><li>当一台机器处理不过来整个文件时, 不能增加机器处理, 不太好水平扩展worker</li><li>应用场景有限, 只能用于文件分发场景, 不能使用已有的架构经过封装用于实时数据分发场景</li><li>虽然客户端与用户程序解耦了, 但是复杂的事情需要用户去解决: 用户要在自己的程序内读取分发后的数据比较麻烦点, - 需要自己去磁盘上读文件, 需要知道对应的文件版本, 需要watch是否有新版本的文件下发下来了</li></ul><p>实时分发： 优点：</p><ul><li>实时性非常好, 毫秒级甚至更低</li><li>有了实时分发的能力后, 很容易简单封装下, 就可以支持文件分发</li><li>支持消费者扩容</li><li>性能比较好, 分发速度快, 比较少的磁盘IO</li><li>通过智能消费可以快速的分发大流量topic</li><li>接口友好, 更适合在线服务</li><li>可以开放P2P调度功能, 提供给其他的MQ使用, 解决MQ共有的问题; 甚至可以在其他场景使用: 比如kconf配置下发</li></ul><p>缺点：</p><ul><li>实现非常复杂: <ul><li>需要自己实现存储</li><li>需要实现MQ的各种特性如保序、消费者扩容等</li></ul></li><li>内存缓存较小不太好利用P2P(通过文件缓存解决)</li><li>客户端与用户进程耦合, 客户端出问题会影响用户进程(通过service mesh解决)</li><li>客户端升级依赖用户程序, 新版本全量升级非常难(通过service mesh解决)</li></ul><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h4><ul><li>文件分发耦合度低, 实现相对简单</li><li>实时分发实时性好、分发速度快; 接口友好, 更适合在线服务; 适合更多的场景; 可以简单封装下就能支持文件分发, 拥有文件分发的优点; 唯一的缺点是实现复杂</li></ul><p>综合来说, 实时分发是更优的解决方案。</p><h2 id="架构与功能" tabindex="-1"><a class="header-anchor" href="#架构与功能"><span>架构与功能</span></a></h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构"><span>架构</span></a></h3><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>agent: BTQ Service Mesh agent, 随每个消费者机器部署, 负责BTQ SDK的所有逻辑, 用户消费者通过本地rpc与之通信, 所有的agent构成一个强大的P2P存储网络, 上面缓存了所有消费者所需要的大量数据</li><li>用户消费者通过P2P存储网络获得数据</li></ul><h3 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性"><span>功能特性</span></a></h3><h4 id="数据可靠性" tabindex="-1"><a class="header-anchor" href="#数据可靠性"><span>数据可靠性</span></a></h4><p>如果是关联Kafka的topic, 可靠性由Kafka保证; 对于普通的topic:</p><ul><li>用户可以设置topic保存时长, 当用户没有明确提出topic保存的时长时, 平台侧默认只保证存储10分钟</li><li>由于BTQ为纯内存存储, 所以由于服务升级、机器重启、topic迁移、coredump等原因可能会导致存储的时长不能满足要求</li></ul><h4 id="保序" tabindex="-1"><a class="header-anchor" href="#保序"><span>保序</span></a></h4><ul><li>普通topic会尽可能的进行topic级别保序, 但不能保证</li><li>逻辑topic支持partition级别保序</li></ul><h4 id="消息投递语义" tabindex="-1"><a class="header-anchor" href="#消息投递语义"><span>消息投递语义</span></a></h4><ul><li>普通topic: 没有保证, 可能消费多次, 也可能消费0次</li><li>关联Kafka的topic: 可以设置至少消费一次</li></ul><h4 id="sdk支持" tabindex="-1"><a class="header-anchor" href="#sdk支持"><span>SDK支持</span></a></h4><ul><li>C++ SDK: 所有特性全方位支持</li><li>Java SDK: BTQ最新特性不支持; 支持生产; 消费时不支持P2P功能, 消费者数量一多会导致服务端流量比较大, 所以目前不建议使用Java程序去消费, 2022年我们会基于Service Mesh重构Java SDK, 到时候能支持消费以及C++ SDK基本所有的最新特性, 敬请期待</li><li>Python SDK: 支持BTQ大多数特性, 新特性支持要慢于C++ SDK</li></ul><h4 id="瓜分消费" tabindex="-1"><a class="header-anchor" href="#瓜分消费"><span>瓜分消费</span></a></h4><p>类似Kafka同一个group下的消费者瓜分消费同一个topic里面的数据, 当消费者增加或者减少时, 自动rebalance, 该功能开发中, 敬请期待</p><h4 id="消费kafka-topic" tabindex="-1"><a class="header-anchor" href="#消费kafka-topic"><span>消费Kafka topic</span></a></h4><p>可以把BTQ的topic关联到Kafka的topic, 然后就可以直接消费Kafka topic里面的数据</p><h3 id="选型参考" tabindex="-1"><a class="header-anchor" href="#选型参考"><span>选型参考</span></a></h3><p>BTQ作为一种MQ, 概念模型和Kafka类似, 同时, 我们公司还维护另外一个MQ, RocketMQ, 那作为用户, 在针对MQ进行选型时, 到底该怎么选择呢?</p><p>21年针对MQ领域, MQ相关的同事在一起针对各个MQ擅长的地方, 共同讨论出一套针对业务场景来选型的方案, 供大家参考</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="系统演进" tabindex="-1"><a class="header-anchor" href="#系统演进"><span>系统演进</span></a></h3><p>一年多的时间, 我们对BTQ做了非常多的改进优化, 系统演进时间线如下: <img src="'+m+'" alt="" loading="lazy"></p><p>系统演进分两大主线前进:</p><h4 id="成本优化" tabindex="-1"><a class="header-anchor" href="#成本优化"><span>成本优化</span></a></h4><ul><li>回源流量优化</li><li>建合分离建树算法: 第二代建树算法, 极大的优于第一代的二叉建树算法</li><li>支持压缩: BTQ中存有大量的可压缩的数据, 压缩功能能为我们节省大量的成本</li><li>BTQ on Kafka: 支持消费Kafka的topic, 如前文所述</li><li>支持At-Least-Once语义: 通过关联Kafka来保证</li><li>建合一体建树算法, 第三代建树算法, 在合并多机房的子树上面有比较大的改进</li><li>文件缓存: 彻底解决小流量topic读写比的问题</li><li>志愿消费: 利用BTQ庞大的客户端网络, 彻底解决大流量topic读写比的问题</li></ul><h4 id="架构演进" tabindex="-1"><a class="header-anchor" href="#架构演进"><span>架构演进</span></a></h4><ul><li>支持Service Mesh: BTQ SDK的逻辑下沉到本地的agent, 极大的减少和用户程序的耦合, 加速了新功能的发布, 提高了新功能发布的稳定性</li><li>支持大集群模式: 极大的提高BTQ集群运维效率, 减少大量人工运维的成本</li><li>全新架构: P2P缓存下沉、统一存储模型、存储调度分离, 为文件缓存和智能消费打下基础, 也可以为其他MQ提供强大的流式分发网络。</li></ul>',49);function Q(B,T){const l=n("ExternalLinkIcon");return t(),r("div",null,[b,a("p",null,[i("官网："),a("a",_,[i("https://d7y.io/"),c(l)])]),x])}const P=s(k,[["render",Q],["__file","btq.html.vue"]]),y=JSON.parse('{"path":"/rcmd/ks/arch/btq.html","title":"BTQ","lang":"zh-CN","frontmatter":{"date":"2024-07-06T00:00:00.000Z","title":"BTQ","author":"Genhiy","order":1,"category":["推荐系统"],"tag":["无标签"],"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[{"level":3,"title":"业务场景","slug":"业务场景","link":"#业务场景","children":[]},{"level":3,"title":"业内方案","slug":"业内方案","link":"#业内方案","children":[]},{"level":3,"title":"快手方案","slug":"快手方案","link":"#快手方案","children":[]},{"level":3,"title":"方案对比","slug":"方案对比","link":"#方案对比","children":[]}]},{"level":2,"title":"架构与功能","slug":"架构与功能","link":"#架构与功能","children":[{"level":3,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":3,"title":"功能特性","slug":"功能特性","link":"#功能特性","children":[]},{"level":3,"title":"选型参考","slug":"选型参考","link":"#选型参考","children":[]},{"level":3,"title":"系统演进","slug":"系统演进","link":"#系统演进","children":[]}]}],"git":{},"readingTime":{"minutes":6.95,"words":2085},"filePathRelative":"rcmd/ks/arch/btq.md","localizedDate":"2024年7月6日"}');export{P as comp,y as data};
