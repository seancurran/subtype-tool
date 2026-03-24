// Simplified Chinese translations — sourced from "Dry Eye Management Map Translation (Chinese) 202603.xlsx"
// Keys marked [MISSING] have no Chinese translation in the spreadsheet and fall back to English.
// See docs/missing-translations-zh.md for the full gap list and queries to send to the client.
export default {
    nav: {
        tearFilmDeficiencies: '泪液分泌不足',
        lipid: '脂质层',
        aqueous: '水液层',
        mucinGlycocalyx: '黏液层/糖萼',
        eyelidAnomalies: '眼睑异常',
        blinkLidClosure: '眨眼 / 眼睑闭合',
        lidMargin: '睑缘',
        ocularSurfaceAbnormalities: '眼表异常',
        anatomicalMisalignment: '眼睑 / 睑缘解剖位置异常',
        neuralDysfunction: '神经功能障碍',
        // Single short phrase — compact enough for one line, no split needed
        ocularSurfaceCellularLine1: '眼表细胞损伤',
        ocularSurfaceCellularLine2: '',
        primaryInflammationLine1: '原发性炎症 /',
        primaryInflammationLine2: '氧化应激',
        howToUseTabLine1: '使用',
        howToUseTabLine2: '方法',
        copyright: '© {year} Alcon Inc. GLBDEOH2600001', // intentionally kept in English (legal text)
    },
    diamonds: {
        dryEyeReliefLine1: '干眼',
        dryEyeReliefLine2: '缓解与管理',
        tearFilmLine1: '泪液',
        tearFilmLine2: '分泌不足',
        eyelidLine1: '眼睑',
        eyelidLine2: '异常',
        ocularLine1: '眼表',
        ocularLine2: '异常',
    },
    panel: {
        standardTesting: '常规检查',
        advancedTesting: '进阶检查/高级检查',
        management: '干眼病管理方案',
        previous: '上一页',
        next: '下一页',
        email: '邮件',
    },
    howToUse: {
        welcome: '欢迎使用',
        intro: '本干眼管理流程图将依据缓解原则与检测结果，为您制定适用的干眼管理方案。',
        howToUseTitle: '干眼管理流程图使用方法',
        step1: '首先，<strong>在左侧选择对应类别</strong> —— 泪膜破坏、眼睑异常或眼表异常。',
        step2: '接着，在所选主类别下<strong>选择子类别</strong>，进一步明确干眼类型；您可同时选择多个子类别，并通过「下一页 / 上一页」按钮，在已选类别间切换查看。',
        step3: '最后，从弹出菜单中，<strong>选定您认为适用的干眼病管理方案</strong>；点击对应选项，即可将诊疗报告发送至您的邮箱。',
    },
    boxes: {
        tearFilmDeficiencies: '泪液分泌不足',
        eyelidAnomalies: '眼睑异常',
        ocularSurfaceAbnormalities: '眼表异常',
        lipid: '脂质层',
        aqueous: '水液层',
        mucinGlycocalyx: '黏液层/糖萼',
        blinkLidClosure: '眨眼 / 眼睑闭合',
        lidMargin: '睑缘',
        anatomicalMisalignment: '眼睑 / 睑缘解剖位置异常',
        neuralDysfunction: '神经功能障碍',
        ocularSurfaceCellular: '眼表细胞损伤',
        primaryInflammation: '原发性炎症 / 氧化应激',
    },
    email: {
        title: '邮件报告',
        emailAddressLabel: '邮箱地址',
        emailPlaceholder: '请输入邮箱地址',
        pxReferenceLabel: '患者编号',
        pxReferenceOptional: '（选填）',
        pxReferencePlaceholder: '请输入患者编号',
        pxReferenceError: '仅允许使用字母、数字、空格、连字符及下划线',
        reportPreview: '报告预览',
        noItems: '未选择任何项目',
        emailSent: '邮件已发送！',
        emailSentConfirmation: '您的报告已发送至 {email}',
        close: '关闭',
        send: '发送邮件',
        sending: '发送中...',
        fromName: '干眼病亚型分类工具',
        subject: '干眼病管理报告',
        pxReferencePrefix: '患者编号：{ref}',
        header: {
            tearFilm: '泪液分泌不足：',
            eyelid: '眼睑异常：',
            ocular: '眼表异常：',
        },
    },
    config: {
        lipid: { category: '泪液分泌不足', title: '脂质层' },
        aqueous: { category: '泪液分泌不足', title: '水液层' },
        'mucin-glycocalyx': { category: '泪液分泌不足', title: '黏液层/糖萼' },
        'blink-lid-closure': { category: '眼睑异常', title: '眨眼 / 眼睑闭合' },
        'lid-margin': { category: '眼睑异常', title: '睑缘' },
        'anatomical-misalignment': {
            category: '眼表异常',
            title: '眼睑 / 睑缘解剖位置异常',
        },
        'neural-dysfunction': {
            category: '眼表异常',
            title: '神经功能障碍',
        },
        'ocular-surface-cellular': {
            category: '眼表异常',
            title: '眼表细胞损伤',
        },
        'primary-inflammation': {
            category: '眼表异常',
            title: '原发性炎症 / 氧化应激',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: '干涉仪检查',
                    description: '分级≤3 级（非无定形或有色形态），或 LipiView 检查＜72 nm',
                },
                {
                    name: '睑板腺分泌物排出性 / 质量',
                    description: '分泌物浑浊，或排出性受限',
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: '泪河高度测量',
                    description: '泪河高度≤0.20 毫米',
                },
            ],
            advanced: [
                {
                    name: '泪液试纸测量',
                    description: '湿润长度 2.5 毫米',
                },
                {
                    name: '泪液蛋白质及其他化学成分检测',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: '苏丹红染色或丽丝胺绿染色',
                    description: '点状着色＞9 个',
                },
            ],
            advanced: [
                {
                    name: '泪膜的免疫组织化学及免疫电镜检查',
                },
                {
                    name: '印迹细胞学',
                    description: '杯状细胞密度与上皮细胞形态',
                },
            ],
        },
        'blink-lid-closure': {
            // Spreadsheet combined both tests into one cell — split on newline (see query Q5)
            standard: [
                {
                    name: '观察到不完全眨眼',
                    description: '发生率＞40%',
                },
                {
                    name: '瞬目 / 眼睑闭合不全',
                    description: '已观察到',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: '前部睑缘炎检查' },
                { name: 'MGD（睑板腺功能障碍）' },
            ],
            advanced: [
                {
                    name: '睑板腺成像',
                    description: '腺体长度＜75%',
                },
                {
                    name: '腺体堵塞',
                    description: '观察',
                },
                {
                    name: '毛细血管扩张',
                    description: '观察',
                },
                { name: '腺体排出功能' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: '裂隙灯生物显微镜检查' }],
            advanced: [{ name: '角膜地形图' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: '喷气或机械刺激',
                    description:
                        '角膜及睑缘敏感度阈值 ≥0.8 mbar（550），但各仪器间结果不具可比性',
                },
            ],
            advanced: [
                {
                    name: '活体共焦显微镜检查',
                    description: '神经长度、分支及密度等指标均有正常参考值',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: '角膜荧光素染色',
                    description: '点状着色＞5 个',
                },
                {
                    name: '结膜丽丝胺绿染色',
                    description: '点状着色＞9 个',
                },
                {
                    name: '睑缘擦拭区染色',
                    description: '长度＞2 mm 且宽度占比＞25%',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: '球结膜充血',
                    description: 'Efron 评分＞1.5 分，或 JENVIS 客观评分＞0.95',
                },
            ],
            advanced: [
                { name: '活体共焦显微镜检查' },
                { name: '泪膜及眼表面分子检测' },
            ],
        },
    },
    management: {
        lipid: [
            { label: '生活方式建议', description: '需酌情评估' },
            { label: '补充泪液 / 稳定泪膜', description: '脂质替代剂' },
            {
                label: '泪液潴留装置',
                description: '湿房镜',
            },
            {
                label: '药物促泪修复治疗',
                description: '局部促泌剂',
            },
            {
                label: '器械辅助促泪 / 泪液修复',
                description: '睑缘内外加热理疗\nIPL:LLLT\nIPL\n热敷',
            },
            { label: '眨眼训练 /治疗', description: '' },
            { label: '局部抗炎药', description: '环孢素 A' },
        ],
        aqueous: [
            { label: '生活方式建议', description: '需酌情评估' },
            { label: '口服营养补充', description: 'Ω‑3 脂肪酸' },
            { label: '补充泪液 / 稳定泪膜', description: '人工泪液' },
            {
                label: '泪液潴留装置',
                description: '湿房镜\n泪点栓，巩膜镜',
            },
            {
                label: '药物促泪修复治疗',
                description: '二硫化硒洗剂\n药物神经调节# 局部促泪药',
            },
            {
                label: '器械辅助促泪 / 泪液修复',
                description: '神经刺激治疗\nLLLT',
            },
            { label: '局部抗炎药', description: '' },
            { label: '眼表修复剂', description: '生物制剂' },
            { label: '手术治疗方案', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: '生活方式建议', description: '需酌情评估' },
            { label: '药物促泪修复治疗', description: '' },
            { label: '器械辅助促泪 / 泪液修复', description: '神经刺激治疗' },
            { label: '局部抗炎药', description: '' },
        ],
        'blink-lid-closure': [
            { label: '生活方式建议', description: '需酌情评估' },
            { label: '泪液潴留装置', description: '湿房镜' },
            { label: '眨眼训练 /治疗', description: '' },
            { label: '手术治疗方案', description: '' },
        ],
        'lid-margin': [
            {
                label: '前睑缘炎',
                description: '',
                subOptions: [
                    { label: '生活方式建议', description: '需酌情评估' },
                    {
                        label: '局部眼睑清洁（如减少细菌数量）',
                        description: '',
                    },
                    { label: '口服抗生素', description: '' },
                ],
            },
            {
                label: '睑板腺功能障碍',
                description: '',
                subOptions: [
                    { label: '生活方式建议', description: '需酌情评估' },
                    { label: '口服营养补充', description: 'Ω‑3 脂肪酸\n维生素D3' },
                    {
                        label: '补充泪液 / 稳定泪膜',
                        description: '脂质替代剂',
                    },
                    {
                        label: '药物促泪修复治疗',
                        description: '外用阿奇霉素：二硫化硒洗剂',
                    },
                    {
                        label: '器械辅助促泪 / 泪液修复',
                        description: '睑缘内外加热理疗\nIPL:LLLT:QMR',
                    },
                    {
                        label: '睑缘清创术',
                        description: '角化明显者',
                    },
                    { label: '眨眼训练 /治疗', description: '' },
                    { label: '局部抗炎药', description: '环孢素 A' },
                    { label: '口服抗生素', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: '生活方式建议', description: '需酌情评估' },
            { label: '手术治疗方案', description: '' },
        ],
        'neural-dysfunction': [
            { label: '生活方式建议', description: '需酌情评估' },
            {
                label: '补充泪液 / 稳定泪膜',
                description: '维 A / 维 B12 / 维 C',
            },
            { label: '眼表修复剂', description: '生物制剂' },
            { label: '手术治疗方案', description: '泪点栓塞' },
        ],
        'ocular-surface-cellular': [
            { label: '生活方式建议', description: '需酌情评估' },
            { label: '口服营养补充', description: '维生素D3' },
            {
                label: '补充泪液 / 稳定泪膜',
                description: '透明质酸、海藻糖、黄原胶、全氟己基辛烷、羟丙基瓜尔胶',
            },
            {
                label: '药物促泪修复治疗',
                description: '口服促泪药\n促泪眼药水\n药物神经调节治疗',
            },
            {
                label: '器械辅助促泪 / 泪液修复',
                description: 'LLLT:QMR:神经刺激治疗\nIPL:探通\n睑缘内外加热理疗\n局部促泌剂',
            },
            {
                label: '眨眼训练 /治疗',
                description: '睑缘内外加热理疗\n局部促泌剂',
            },
            { label: '局部眼睑清洁', description: '' },
            { label: '局部抗炎药', description: '' },
            { label: '眼表修复剂', description: '润滑素\n生物制剂' },
            { label: '手术治疗方案', description: '泪点栓塞' },
        ],
        'primary-inflammation': [
            {
                label: '原发性',
                description: '',
                subOptions: [
                    { label: '生活方式建议', description: '需酌情评估' },
                    { label: '局部抗炎药', description: '' },
                    { label: '眼表修复剂', description: '羊膜生物制剂' },
                ],
            },
            {
                label: '继发性',
                description: '',
                subOptions: [
                    { label: '生活方式建议', description: '需酌情评估' },
                    { label: '口服营养补充', description: 'Ω‑3 脂肪酸，维生素D3' },
                    {
                        label: '补充泪液 / 稳定泪膜',
                        description: '透明质酸、硒蛋白 P、黄原胶、羟丙基瓜尔胶、血清',
                    },
                    {
                        label: '泪液潴留装置',
                        description: '药物治疗',
                    },
                    {
                        label: '药物促泪修复治疗',
                        description: '药物神经调节治疗',
                    },
                    { label: '器械辅助促泪 / 泪液修复', description: 'IPL' },
                    { label: '睑缘清创术', description: '' },
                    { label: '眨眼训练 /治疗', description: '' },
                    {
                        label: '局部眼睑清洁（如减少细菌数量）',
                        description: '',
                    },
                    { label: '局部抗炎药', description: '' },
                    { label: '眼表修复剂', description: '羊膜生物制剂' },
                    { label: '手术治疗方案', description: '泪点栓塞' },
                ],
            },
        ],
    },
}
