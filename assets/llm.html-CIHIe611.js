import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as i}from"./app-SD3SAAIy.js";const n={},r=i('<h3 id="transformer-基础篇" tabindex="-1"><a class="header-anchor" href="#transformer-基础篇"><span>Transformer 基础篇</span></a></h3><h4 id="transformer-的优势是什么" tabindex="-1"><a class="header-anchor" href="#transformer-的优势是什么"><span>Transformer 的优势是什么</span></a></h4><p>相比于 RNN：</p><ul><li>并行化能力更强: RNN 每个步骤的输入依赖于前一个步骤的输出，只能顺序处理序列数据。相比之下，Transformer 可以同时处理序列中的所有元素，提高了训练过程的效率。</li><li>更好的处理长距离依赖:随着序列长度的增加，RNN 需要更多的步骤传递信息，可能导致信息丢失（梯度消失/爆炸）。Transformer 通过自注意力机制直接对序列中任意两个位置的元素进行相关性建模，获取长程信息。</li><li>灵活的上下文捕获: RNN 只能以单向或双向（Bi-RNNs）的形式捕获上下文。相比之下,Transformer 的自注意力机制可以为每个元素提供全局上下文信息。</li></ul><p>相比于 CNN：</p><ul><li>全局注意力: CNN 通过固定大小的卷积核在局部邻域内提取特征，这限制了它捕获全局依赖的能力，需要多层堆叠。而Transformer 的自注意力机制关注输入序列中的任何部分，访问全局信息。</li><li>灵活性和可扩展性: 在处理长序列时，CNN 需要更多层的网络来捕捉长距离的依赖，这会导致参数数量增加，或者引入池化等下采样操作，损失了图像重要的位置信息。Transformer模型则具有处理长距离依赖的能力，而且不需要随着输入长度的增加而显著增加模型大小。</li></ul><h4 id="为什么-q-和-k-要使用不同的权重矩阵进行线性变换" tabindex="-1"><a class="header-anchor" href="#为什么-q-和-k-要使用不同的权重矩阵进行线性变换"><span>为什么 Q 和 K 要使用不同的权重矩阵进行线性变换?</span></a></h4><ul><li>如果 Q 和 K 一样，矩阵乘积的结果是一个对称矩阵，表达能力不强</li><li>对角线上的值比较大，导致每个位置过分关注自己，忽略了上下文</li><li>增加参数量，增强模型表达能力</li></ul><h4 id="为什么要多头" tabindex="-1"><a class="header-anchor" href="#为什么要多头"><span>为什么要多头?</span></a></h4><ul><li>多头注意力使用多个维度较低的子空间分别进行学习，多个头可以分别关注到不同的特征，增强了表达能力，例如有的头关注语法信息，有的头关注知识内容，有的关注近距离，这样会减少信息的损失，提升模型容量</li><li>减少了注意力权重对角线值（局部信息）过大的情况，分散了注意力，防止只关注局部而忽略了上下文</li></ul><h4 id="为什么要进行-scale" tabindex="-1"><a class="header-anchor" href="#为什么要进行-scale"><span>为什么要进行 scale</span></a></h4><p>处理长序列时，输入信息维度 d 比较大，点积有比较大的方差，导致 softmax 函数的梯度 比较小；通过切分之后，缩小方差，防止梯度消失。</p><h3 id="大模型架构篇" tabindex="-1"><a class="header-anchor" href="#大模型架构篇"><span>大模型架构篇</span></a></h3><h4 id="bert-和-gpt-的区别" tabindex="-1"><a class="header-anchor" href="#bert-和-gpt-的区别"><span>Bert 和 GPT 的区别：</span></a></h4><ul><li>训练方法：BERT 的训练目标是遮蔽语言模型（MLM: Masked Language Model）和下一句预测（NSP:Next Sentence Prediction）。在 MLM 中，随机抽取输入句子中 15%文本，选中的文本中，80%被替换为 mask，10%的文本被替换为其它 token，10%不变。得到最后一层每个 token 的隐状态，在[mask]头部添加 mlp 映射词表上的概率分布。在 NSP 中，输入为两个句子，取 [cls]的隐状态，通过 mlp 做 3 分类（蕴含、矛盾、中性关系）。GPT 的训练目标是基于之前的单词来预测下一个单词。</li><li>方向性：BERT 使用双向上下文来进行训练。GPT 使用单向（从左到右）的上下文来进行训练。</li><li>架构设计：BERT 主要是一个编码器架构，它只使用了 Transformer 的编码器部分。GPT 是一个解码器架构，使用了 Transformer 的解码器部分，但不使用编码器-解码器注意力机制。</li><li>应用场景：BERT 更擅长理解上下文，因此在需要文本理解的下游任务，如情感分析、命名实体识别等任务上表现出色。GPT 更擅长生成文本，因此在需要生成连贯文本的应用上更为擅长，如文本生成、对话系统、甚至某些创造性写作的任务上。Encoder-Decoder 模型包括 Seq2Seq 模型，它在机器翻译、文本摘要等领域被广泛应用。</li></ul><h4 id="gpt1-gpt4-的主要技术要点" tabindex="-1"><a class="header-anchor" href="#gpt1-gpt4-的主要技术要点"><span>GPT1-GPT4 的主要技术要点</span></a></h4><ul><li>GPT1 <ul><li>基于 Transformer 架构，可以捕捉长距离依赖性，并且具有高效的并行性。</li><li>训练 GPT1 分为两个阶段：预训练和微调（fine-tuning）。在预训练阶段，GPT-1 使用了大量的无标注文本数据集，例如维基百科和网页文本等。通过最大化预训练数据集上的 log likelihood 来训练模型参数。在微调阶段，GPT-1 将预训练模型的参数用于特定的自然语言处理任务，如文本分类和问答系统等。</li></ul></li><li>GPT2 <ul><li>输入：Task conditioning</li><li>数据：只爬取人工筛选过的 web 数据，且数据量更大</li><li>输入表征：GPT-2 综合考虑了 OOV 问题和词表过大的问题，使用了 BPE 算法</li><li>模型结构：调整 Transformer 的 decoder（将 LN 层移动到 block 的输入位置并且在最后一个 self-attention 之后加了一层 LN）、layer 增加。</li><li>训练：去掉了 Fine-tune 部分，使用了完全的无监督训练。GPT-2 具备了零样本学习的能力</li></ul></li><li>GPT3 <ul><li>更多的训练数据量和模型参数量</li><li>引入了稀疏注意力机制和自适应注意力跨度（根据不同的任务和场景灵活地调整自己的注意力机制）。稀疏注意力机制的基本思想是，不需要计算每个位置与其他所有位置的相关性，而是只选择一部分重要或者相关的位置进行计算。稀疏模式包括滑动窗口、空洞卷积、局部区域等，来确定每个位置需要关注的其他位置。自适应注意力跨度的主要思想是，对于较短或较简单的文本，模型可以使用较大的注意力跨度来捕捉全局的语义信息；而对于较长或较复杂的文本，模型可以使用较小的注意力跨度来关注局部的语法结构和细节</li></ul></li></ul><p>InstructGPT：RLHF：（1）SFT （2）RM （3）PPO</p><h4 id="llama-的技术改进" tabindex="-1"><a class="header-anchor" href="#llama-的技术改进"><span>LLaMA 的技术改进</span></a></h4><ul><li>使用 SwiGLU 激活函数替换 ReLU 以提高性能：它由 GLU 和 Swish 函数两个部分组成，GLU 的输入向量 x 分别经过两个 linear 层，其中一个需要经过非线性激活函数，然后将两者对应元素相乘。SwiGLU 是采用 Swish 作为激活函数的 GLU 变体。</li><li>使用了旋转位置编码（RoPE）替换正余弦位置编码：RoPE 是一种相对位置编码方法，核心思想是利用旋转矩阵乘法来模拟序列中元素的位置偏移。对于每个位置 pos，构造一个旋转矩阵，该矩阵在多维空间中对应于维度成对的旋转。相比于绝对位置编码，RoPE 的优势在于：(a) 保持线性关系：RoPE 保留了位置偏移的线性关系，这有助于模型更有效地捕捉序列中元素的相对位置关系。(b)泛化能力：RoPE 依赖于相对位置而非绝对位置，它能够更好地处理训练时未见过的序列长度，提供更好的泛化能力。</li><li>前置层归一化（Pre-normalization）并使用 RMSNorm 归一化函数：LN 计算特征的均值和标准差，而均方根(RMS)归一化直接使用均方根（RMS）进行归一化，去掉了均值计算，优势在于提高了计算效率、某些模型中训练更稳定</li><li>AdamW 优化器：AdamW 引入了额外的权重衰减项，明确地在梯度更新步骤中加入了权重衰减，从而避免了 Adam 优化器对权重衰减的不准确估计问题。</li><li>更长的上下文长度 4k</li><li>Grouped-Query Attention</li></ul><h3 id="模型训练与评估篇" tabindex="-1"><a class="header-anchor" href="#模型训练与评估篇"><span>模型训练与评估篇</span></a></h3><h4 id="rlhf-的几个阶段的-loss" tabindex="-1"><a class="header-anchor" href="#rlhf-的几个阶段的-loss"><span>RLHF 的几个阶段的 Loss</span></a></h4><p>RM:</p><p>PPO:一般 PPO 阶段需要 4 个模型：两个训练两个推理</p><ul><li>Actor 模型：由 SFT 初始化，参数训练，进行强化学习的主模型，也是我们想要最终 获得的模型，它不断产生 action 并被 Critic 模型所评价，计算 loss 并训练。</li><li>Reference 模型，来自于 SFT 模型，不更新参数，约束 KL 项，防止 Actor 过度偏离</li><li>Reward 模型，来自于 RM 模型，不更新参数，用于打分</li><li>Critic 模型，由 RM 模型初始化，参数训练，用于预测 Actor 模型的收益</li></ul><p>DPO:</p><p>上面的 loss 可以简化为：</p><p>优化目标是让本简化公式最大，即我们希望左半部分和右半部分的 margin 越大越好，左半部分的含义是 good response 相较于没训练之前的累积概率差值，右半部分代表 bad response 相较于没训练之前的累计概率差值，如果这个差值，即 margin 变大了，就意味着：</p><ul><li>左边变大，右边变小，理想情况，good response 概率提升，bad response 概率下降</li><li>左边变小，右边更小，good response 概率下降，但是 bad response 概率下降的更多，生成 的时候还是倾向于 good response</li><li>左边变的更大，右边只大了一点点，</li></ul><h4 id="rlhf-过程中-rm-随着训练过程得分越来越高-效果就一定好吗-有没有极端情况" tabindex="-1"><a class="header-anchor" href="#rlhf-过程中-rm-随着训练过程得分越来越高-效果就一定好吗-有没有极端情况"><span>RLHF 过程中 RM 随着训练过程得分越来越高，效果就一定好吗？有没有极端情况？</span></a></h4><p>这里有几种可能的极端情况：</p><ul><li>过拟合：如果 RM 过度拟合于训练数据，它可能在训练集上得到很高的得分，但在未见过的数据上表现不佳。这意味着虽然 RM 得分很高，模型的泛化能力却可能很差。</li><li>奖励函数的误导：如果 RM 的设计或训练过程中引入了偏差，它可能会引导策略模型（Policy Model）学习错误的行为。例如，如果人类反馈中系统性地偏好某种行为，即使这种行为并不理想，RM 也可能学会高估这些行为的价值。</li><li>探索不足：在 RL 中，充分的探索对于发现最优策略至关重要。如果 RL 过程过于依赖 RM得分而减少了探索，可能导致策略收敛于次优解。</li></ul><h4 id="在训练语言大模型时-除了-loss-之外-如何在训练过程中监控模型能力" tabindex="-1"><a class="header-anchor" href="#在训练语言大模型时-除了-loss-之外-如何在训练过程中监控模型能力"><span>在训练语言大模型时，除了 loss 之外，如何在训练过程中监控模型能力？</span></a></h4><p>在训练语言模型时，监控模型能力的方式不仅限于观察 loss 下降。以下是一些其他可以监控以了解模型性能的关键指标和方法：</p><ul><li>验证集上的性能：除了训练集的 loss，还应该定期在验证集上计算模型的 loss 和其他性能指标（如准确率、BLEU 得分等，具体取决于任务）。这有助于监控模型是否出现过拟合。</li><li>样本推理：定期从验证集或测试集中选取样本进行推理，并检查模型的输出。这可以帮助直观地了解模型在实际任务上的表现。</li><li>设计对抗样本并测试：在了解模型的一般输出后，针对模型的已知弱点或典型错误，手动设计对抗样本，例如在文本中引入歧义、干扰信息或语法错误等，然后将对抗样本输入到语言模型中，查看模型在哪些类型的对抗攻击下更容易失败，针对缺陷改进模型。</li><li>A/B 测试：如果条件允许，可以在线上环境中对比新旧模型的表现，看看实际应用中哪个模型更胜一筹。</li><li>困惑度(Perplexity)：困惑度衡量了语言模型预测下一个词的不确定性，困惑度越低，表明模型能够正确预测出下一个词概率越高，表明模型越好。</li><li>自定义评估指标：根据模型的应用场景，可能需要定义特定的评估指标来更好地衡量模型的性能。</li></ul><h3 id="模型微调篇" tabindex="-1"><a class="header-anchor" href="#模型微调篇"><span>模型微调篇</span></a></h3><h4 id="lora" tabindex="-1"><a class="header-anchor" href="#lora"><span>LoRA</span></a></h4><ul><li>背景：全量参数 Fine-tune 需要调整模型全部参数，随着预训练模型规模的不断扩大，全量Fine-tune 的资源压力也倍增。</li><li>原理：预训练模型拥有极小的内在维度(instrisic dimension)，即存在一个极低维度的参数，微调它和全量微调能起到相同的效果。</li><li>做法：冻结原始模型的参数，插入两个低秩矩阵，把大矩阵拆成两个小矩阵的乘法，仅训练新插入的参数。将可微调参数分配到多种类型权重矩阵中，而不应该用更大的秩单独微调某种类型的权重矩阵。</li><li>优缺点：优势：减少了需要更新的参数量、保留预训练知识避免灾难性遗忘；缺点：可能在需要大幅度模型调整的任务上表现不佳、依赖于预训练模型的质量</li></ul><h4 id="lora-相比于全参数训练-为什么可以提升训练效率" tabindex="-1"><a class="header-anchor" href="#lora-相比于全参数训练-为什么可以提升训练效率"><span>LoRA 相比于全参数训练，为什么可以提升训练效率？</span></a></h4><ul><li>计算量上，LoRA 在主干部分全连接层增加了 LoRA 旁路，参数量略有增加</li><li>显存上，参数、梯度、激活值也略有增加，但是优化器不需要存储原模型的参数，优化器状态节省显存较多。因此，LoRA 提升训练效率是因为：（1）优化器部分需要显存减少。（2）主干网络不用更 新，可以量化到 int8 等</li></ul><h4 id="dora" tabindex="-1"><a class="header-anchor" href="#dora"><span>DoRA</span></a></h4><ul><li>DoRA 的主要思想是将预训练权重分解为幅度（magnitude）和方向（direction），并利用 LoRA 来微调方向矩阵。</li><li>DoRA 的优势：LoRA 通常会等比例增减幅度和方向，DoRA 通过将预训练权重矩阵分解为 幅度和方向，能够更接近全量微调的效果。</li></ul><h3 id="模型加速篇" tabindex="-1"><a class="header-anchor" href="#模型加速篇"><span>模型加速篇</span></a></h3><h4 id="估计全量微调一个-7b-参数量的大模型-需要多少显存" tabindex="-1"><a class="header-anchor" href="#估计全量微调一个-7b-参数量的大模型-需要多少显存"><span>估计全量微调一个 7B 参数量的大模型，需要多少显存</span></a></h4><ul><li>模型的参数通常需要存储为 32 位浮点数（float32），每个参数占用 4 字节。参数: 28 GB</li><li>激活值: 取决于具体模型和批处理大小，假设为参数的 2 倍，则为 56 GB。梯度: 28 GB</li><li>优化器状态: 56 GB (如果使用 Adam)</li><li>总计 168G</li></ul><h4 id="解决显存不够的方法有哪些" tabindex="-1"><a class="header-anchor" href="#解决显存不够的方法有哪些"><span>解决显存不够的方法有哪些？</span></a></h4><ul><li>减小 batch：降低 batch 可以直接减少每次迭代所需的显存量。虽然这可能会影响训练的收敛速度和稳定性，但它是最直接的减少显存使用的方法。</li><li>梯度累积：梯度累积允许你使用小批次执行多个前向和反向传播，累积梯度，然后一次性更新权重。</li><li>混合精度训练：同时使用 FP16 和 FP32 进行计算，可以减少显存使用。</li><li>模型并行：将模型的不同部分放在不同的 GPU 上。</li><li>数据并行：数据并行保持模型在每个设备上完整复制，但将不同的数据批次发送到不同的设备。每个设备独立计算前向和后向传递，然后跨设备聚合梯度。这不仅可以扩展训练过程，还可以通过多个 GPU 分摊显存负担。</li><li>优化器状态分片：对于使用像 Adam 这样的优化器，优化器状态（如一阶和二阶矩估计）可以占用大量显存。通过分片优化器状态，每个 GPU 只存储并更新模型参数的一个子集的状态，可以减少每个 GPU 的显存使用</li></ul><h4 id="flash-attention-机制" tabindex="-1"><a class="header-anchor" href="#flash-attention-机制"><span>flash attention 机制</span></a></h4><p>Motivation: 大模型不能处理长 token，计算复杂度和空间复杂度随 token 长度 N 呈二次方增长。</p><p>模拟 attention 的时间复杂度：</p><p>(1)计算 QKV 矩阵：O(n<em>d</em>d) (2)计算 QKT：O(n<em>d</em>n) (3)计算 att×V：O(n<em>n</em>d)，因此注意力机制的总时间复杂度为 O(n<em>d2+n2</em>d)，随 n 二次增长</p><p>Flash Attention：旨在提高注意力的计算效率，Flash Attention 的核心思想是避免显式地计算和存储整个注意力矩阵。具体操作包括：</p><ul><li>分块处理：Flash Attention 将输入序列分成更小的块，然后在这些块上并行计算自注意力。减少了同时需要保持在内存中的数据量，允许更高效的硬件加速。</li><li>逐元素计算：采用逐元素的计算方法。在传统的自注意力机制中，我们通常会计算完整的注意力矩阵，然后再与 Value 矩阵相乘。而 Flash Attention 在计算过程中逐步累积最终的加权 Value 结果。对于每一个输出位置，Flash Attention 立即使用其对应的注意力得分来更新加权 Value，而不是先计算整个得分矩阵。</li></ul><h4 id="fp32-和-fp16-的区别-混合精度的原理" tabindex="-1"><a class="header-anchor" href="#fp32-和-fp16-的区别-混合精度的原理"><span>fp32 和 fp16 的区别，混合精度的原理</span></a></h4><p>FP32 是一种使用 32 位来存储一个浮点数的格式，提供了广泛的动态范围和较高的精度，FP16 是一种使用 16 位来存储一个浮点数的格式，相较于 FP32，FP16 有更小的动态范围和精度，但占用的存储和计算资源更少。</p><p>混合精度训练结合了 FP32 和 FP16，旨在利用 FP16 计算的高效性和 FP32 计算的高精度性。在混合精度训练中，大部分前向和后向传播的计算使用 FP16 进行，这样可以减少计算所需的时间和内存。但是，为了维持训练的稳定性和模型的最终精度，关键的部分，比如权重更新，仍然使用 FP32 执行。</p><p>具体的说：</p><ul><li>fp16: 激活值、前向计算中的参数、反向计算中的梯度</li><li>fp32: Adam 状态、参数更新时的参数、梯度</li><li>参数（权重）：参数通常在 FP32 精度下维护和更新。但是在计算前向激活值和反向梯度计算时，使用权重的 FP16 副本</li><li>梯度：梯度在反向传播中首先以 FP16 计算，因为激活值和权重在前向传播中使用 FP16。为了避免梯度过小而在 FP16 表示中下溢到 0，通常会应用梯度缩放（loss scaling）。之后，在更新权重之前，这些梯度会被转换回 FP32，确保更新的精度。</li><li>激活值：激活值在前向传播时以 FP16 计算以减少内存使用和加速计算。</li><li>Adam 状态（即优化器状态）：Adam 优化器维护每个参数的一阶和二阶矩估计，这些状态对于稳定和准确的权重更新非常关键。因此，这些状态通常以 FP32 来存储的，以避免数值不稳定性。</li></ul><h3 id="模型优化篇" tabindex="-1"><a class="header-anchor" href="#模型优化篇"><span>模型优化篇</span></a></h3><h4 id="什么是-llms-复读机问题" tabindex="-1"><a class="header-anchor" href="#什么是-llms-复读机问题"><span>什么是 LLMs 复读机问题？</span></a></h4><p>LLMs 复读机问题指的是大型语言模型（LLMs）在生成文本时倾向于以过度频繁的方式重复相同的句子或短语，输出缺乏多样性和创造性。 复读机问题可能出现的原因包括：</p><ol><li>数据偏差：大型语言模型通常是通过预训练阶段使用大规模无标签数据进行训练的。如果训练数据中存在大量的重复文本或者某些特定的句子或短语出现频率较高，模型在生成文本时可能会倾向于复制这些常见的模式。</li><li>训练目标的限制：大型语言模型的训练通常是基于自监督学习的方法，通过预测下一个词或掩盖词来学习语言模型。这样的训练目标可能使得模型更倾向于生成与输入相似的文本，导致复读机问题的出现。</li><li>训练数据缺乏多样性：虽然大型语言模型可以处理大规模的数据，但如果训练数据中缺乏多样性的语言表达和语境，模型可能无法学习到足够的多样性和创造性，导致复读机问题的出现。</li></ol><p>为了解决复读机问题，可以采取以下策略：</p><ol><li>增强训练数据的多样性：尽量使用多样性的语料库来训练模型、注意数据来源配比</li><li>引入噪声：在生成文本时，可以引入一些随机性或噪声，例如通过采样不同的词或短语，或者引入随机的变换操作，以增加生成文本的多样性。</li><li>增大温度参数：温度参数控制生成文本的多样性。当 T &gt; 1 时，logits 被除以一个大于 1的数，减少了不同概率之间的差异，概率分布变得更“平坦”,使得低概率词被选中的机会增加，生成的文本多样性更高，但可能牺牲一些连贯性或准确性。当 T&lt;1 时，概率分布变得更“尖锐”，即模型更倾向于选择概率较高的词，从而生成更确定性和一致性的文本。当 T=1 时，不改变原始概率分布，模型按照训练时学到的分布进行预测。</li><li>后处理和过滤：对生成的文本进行后处理和过滤，去除重复的句子或短语。</li></ol>',64),s=[r];function t(o,h){return e(),a("div",null,s)}const c=l(n,[["render",t],["__file","llm.html.vue"]]),m=JSON.parse('{"path":"/posts/llm.html","title":"大模型常见问题及回答","lang":"zh-CN","frontmatter":{"date":"2024-06-28T00:00:00.000Z","title":"大模型常见问题及回答","author":"Genhiy","order":9,"category":["大模型"],"tag":["无标签"],"description":"Transformer 基础篇 Transformer 的优势是什么 相比于 RNN： 并行化能力更强: RNN 每个步骤的输入依赖于前一个步骤的输出，只能顺序处理序列数据。相比之下，Transformer 可以同时处理序列中的所有元素，提高了训练过程的效率。 更好的处理长距离依赖:随着序列长度的增加，RNN 需要更多的步骤传递信息，可能导致信息丢失（...","head":[["meta",{"property":"og:url","content":"https://github.com/Genhiy/Genhiy.github.io/posts/llm.html"}],["meta",{"property":"og:site_name","content":"Genhiy"}],["meta",{"property":"og:title","content":"大模型常见问题及回答"}],["meta",{"property":"og:description","content":"Transformer 基础篇 Transformer 的优势是什么 相比于 RNN： 并行化能力更强: RNN 每个步骤的输入依赖于前一个步骤的输出，只能顺序处理序列数据。相比之下，Transformer 可以同时处理序列中的所有元素，提高了训练过程的效率。 更好的处理长距离依赖:随着序列长度的增加，RNN 需要更多的步骤传递信息，可能导致信息丢失（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Genhiy"}],["meta",{"property":"article:tag","content":"无标签"}],["meta",{"property":"article:published_time","content":"2024-06-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大模型常见问题及回答\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Genhiy\\"}]}"]]},"headers":[{"level":3,"title":"Transformer 基础篇","slug":"transformer-基础篇","link":"#transformer-基础篇","children":[]},{"level":3,"title":"大模型架构篇","slug":"大模型架构篇","link":"#大模型架构篇","children":[]},{"level":3,"title":"模型训练与评估篇","slug":"模型训练与评估篇","link":"#模型训练与评估篇","children":[]},{"level":3,"title":"模型微调篇","slug":"模型微调篇","link":"#模型微调篇","children":[]},{"level":3,"title":"模型加速篇","slug":"模型加速篇","link":"#模型加速篇","children":[]},{"level":3,"title":"模型优化篇","slug":"模型优化篇","link":"#模型优化篇","children":[]}],"git":{},"readingTime":{"minutes":17.98,"words":5395},"filePathRelative":"posts/llm.md","localizedDate":"2024年6月28日","excerpt":"<h3>Transformer 基础篇</h3>\\n<h4>Transformer 的优势是什么</h4>\\n<p>相比于 RNN：</p>\\n<ul>\\n<li>并行化能力更强: RNN 每个步骤的输入依赖于前一个步骤的输出，只能顺序处理序列数据。相比之下，Transformer 可以同时处理序列中的所有元素，提高了训练过程的效率。</li>\\n<li>更好的处理长距离依赖:随着序列长度的增加，RNN 需要更多的步骤传递信息，可能导致信息丢失（梯度消失/爆炸）。Transformer 通过自注意力机制直接对序列中任意两个位置的元素进行相关性建模，获取长程信息。</li>\\n<li>灵活的上下文捕获: RNN 只能以单向或双向（Bi-RNNs）的形式捕获上下文。相比之下,Transformer 的自注意力机制可以为每个元素提供全局上下文信息。</li>\\n</ul>","autoDesc":true}');export{c as comp,m as data};