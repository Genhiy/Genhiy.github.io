import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as a}from"./app-SD3SAAIy.js";const n="/assets/images/Snipaste_2024-05-07_23-18-25.png",r="/assets/images/Snipaste_2024-05-07_23-22-32.png",o="/assets/images/Snipaste_2024-05-07_23-25-01.png",l={},p=a('<h2 id="深度度量学习" tabindex="-1"><a class="header-anchor" href="#深度度量学习"><span>深度度量学习</span></a></h2><p>度量学习是从数据中学习一种度量数据对象间距离的方法。其目标是使得在学得的距离度量下，相似对象间的距离小，不相似对象间的距离大。</p><p>对于传统度量学习而言，由于其处理原始数据的能力有限，因此需要首先使用特征工程的知识对数据进行预处理，然后再用度量学习的算法进行学习。一些传统的度量学习方法只能学习出线性特征，虽然有一些能够提取非线性特征的核方法被提出，但对学习效果也没有明显提升。</p><p>随着深度学习的出现，得益于激活函数学习非线性特征的优秀能力，深度学习方法能够自动地从原始数据中学出高质量的特征。因此深度学习的网络结构与传统的度量学习方法相结合能够带来理想的效果。如图2、所示，采用MNIST作为例子，左侧图中的橙色线条是同类样本之间的距离，蓝色线条是异类样本之间的距离。右侧图是随着训练的进行，这两种距离的变化趋势。可以看出同类样本间距离减小，异类样本间距离增加。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>深度度量学习主要由三方面组成：样本挖掘、模型结构、损失函数；</p><h3 id="样本挖掘" tabindex="-1"><a class="header-anchor" href="#样本挖掘"><span>样本挖掘</span></a></h3><p>最容易能想到的样本挖掘方法是随机采集正负样本对。但是这种方法采集到的样本对不难区分，模型无法从这些数据中学到足够有信息量的知识。因此就需要采用一些样本挖掘方法，从数据集中找到难区分的样本对。</p><p>一组典型的样本由anchor、negative与positive组成。positive是和anchor类别相同的正样本，negative是和anchor类别不同副样本。根据anchor与正样本及负样本之间的距离不同，可以将样本挖掘分为如下3类。</p><ul><li>Hard Negative Mining：使用训练集训练后得到的假阳性样本作为负样本</li><li>Semi-Hard Negative Mining：在某个margin范围内寻找负样本</li><li>Easy Negative Mining：在某个margin范围外找到的负样本</li></ul><p>进行样本挖掘的优点：</p><ul><li>模型更容易学到有用的知识，有利于提升模型的区分能力。</li><li>有利于防止过拟合。如果模型一直看到容易区分的样本，容易使模型发生过拟合，陷入局部最优值。</li><li>有利于降低训练的时间复杂度。遍历数据中的所有(anchor, positive, negative)三元组需要O(n^3)的时间复杂度，而选择少量难以区分的数据对模型进行训练就可以达到同样的效果。</li></ul><h3 id="典型的对比学习模型结构" tabindex="-1"><a class="header-anchor" href="#典型的对比学习模型结构"><span>典型的对比学习模型结构</span></a></h3><p>典型的对比学习模型结构有Siamese Network(孪生网络)和Triplet Network。模型架构图如图所示：</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="损失函数" tabindex="-1"><a class="header-anchor" href="#损失函数"><span>损失函数</span></a></h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),s=[p];function c(h,g){return t(),i("div",null,s)}const u=e(l,[["render",c],["__file","cl.html.vue"]]),_=JSON.parse('{"path":"/posts/cl.html","title":"强化学习","lang":"zh-CN","frontmatter":{"date":"2024-05-08T00:00:00.000Z","title":"强化学习","author":"Genhiy","order":2,"category":["强化学习"],"tag":["无标签"],"description":"深度度量学习 度量学习是从数据中学习一种度量数据对象间距离的方法。其目标是使得在学得的距离度量下，相似对象间的距离小，不相似对象间的距离大。 对于传统度量学习而言，由于其处理原始数据的能力有限，因此需要首先使用特征工程的知识对数据进行预处理，然后再用度量学习的算法进行学习。一些传统的度量学习方法只能学习出线性特征，虽然有一些能够提取非线性特征的核方法被...","head":[["meta",{"property":"og:url","content":"https://github.com/Genhiy/Genhiy.github.io/posts/cl.html"}],["meta",{"property":"og:site_name","content":"Genhiy"}],["meta",{"property":"og:title","content":"强化学习"}],["meta",{"property":"og:description","content":"深度度量学习 度量学习是从数据中学习一种度量数据对象间距离的方法。其目标是使得在学得的距离度量下，相似对象间的距离小，不相似对象间的距离大。 对于传统度量学习而言，由于其处理原始数据的能力有限，因此需要首先使用特征工程的知识对数据进行预处理，然后再用度量学习的算法进行学习。一些传统的度量学习方法只能学习出线性特征，虽然有一些能够提取非线性特征的核方法被..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Genhiy"}],["meta",{"property":"article:tag","content":"无标签"}],["meta",{"property":"article:published_time","content":"2024-05-08T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"强化学习\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-08T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Genhiy\\"}]}"]]},"headers":[{"level":2,"title":"深度度量学习","slug":"深度度量学习","link":"#深度度量学习","children":[{"level":3,"title":"样本挖掘","slug":"样本挖掘","link":"#样本挖掘","children":[]},{"level":3,"title":"典型的对比学习模型结构","slug":"典型的对比学习模型结构","link":"#典型的对比学习模型结构","children":[]},{"level":3,"title":"损失函数","slug":"损失函数","link":"#损失函数","children":[]}]}],"git":{},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"posts/cl.md","localizedDate":"2024年5月8日","excerpt":"<h2>深度度量学习</h2>\\n<p>度量学习是从数据中学习一种度量数据对象间距离的方法。其目标是使得在学得的距离度量下，相似对象间的距离小，不相似对象间的距离大。</p>\\n<p>对于传统度量学习而言，由于其处理原始数据的能力有限，因此需要首先使用特征工程的知识对数据进行预处理，然后再用度量学习的算法进行学习。一些传统的度量学习方法只能学习出线性特征，虽然有一些能够提取非线性特征的核方法被提出，但对学习效果也没有明显提升。</p>\\n<p>随着深度学习的出现，得益于激活函数学习非线性特征的优秀能力，深度学习方法能够自动地从原始数据中学出高质量的特征。因此深度学习的网络结构与传统的度量学习方法相结合能够带来理想的效果。如图2、所示，采用MNIST作为例子，左侧图中的橙色线条是同类样本之间的距离，蓝色线条是异类样本之间的距离。右侧图是随着训练的进行，这两种距离的变化趋势。可以看出同类样本间距离减小，异类样本间距离增加。</p>","autoDesc":true}');export{u as comp,_ as data};