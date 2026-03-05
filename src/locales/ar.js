// Arabic translations — sourced from:
// "Dry Eye Management Map Translation (Arabic) 202602.xlsx"
// Sections with no Arabic in spreadsheet stay in English (panel, email, nav.copyright)
export default {
    nav: {
        tearFilmDeficiencies: 'اختلالات طبقة الدموع',
        lipid: 'الدهون',
        aqueous: 'الجزء المائي',
        mucinGlycocalyx: 'الميوسين / الغليكوكاليكس',
        eyelidAnomalies: 'تشوّهات الجفن',
        blinkLidClosure: 'الرمش / إغلاق الجفن',
        lidMargin: 'حافة الجفن',
        ocularSurfaceAbnormalities: 'شذوذات السطح العيني',
        anatomicalMisalignment: 'اختلال تشريحي',
        neuralDysfunction: 'خلل وظيفي عصبي',
        // Flag #6: two-line items — full Arabic string on Line1, empty Line2
        ocularSurfaceCellularLine1: 'تلف خلوي / اضطراب خلوي',
        ocularSurfaceCellularLine2: '',
        primaryInflammationLine1: 'الالتهاب / الإجهاد التأكسدي',
        primaryInflammationLine2: '',
        howToUseTabLine1: 'كيفية الاستخدام',
        howToUseTabLine2: '',
        copyright: '© {year} Alcon Inc. GLBDEOH2600001',
    },
    diamonds: {
        dryEyeReliefLine1: 'تخفيف جفاف العين',
        dryEyeReliefLine2: 'وإدارته',
        tearFilmLine1: 'اختلالات طبقة الدموع',
        tearFilmLine2: '',
        eyelidLine1: 'تشوّهات الجفن',
        eyelidLine2: '',
        ocularLine1: 'شذوذات السطح العيني',
        ocularLine2: '',
    },
    panel: {
        standardTesting: 'الاختبار القياسي',
        advancedTesting: 'الاختبار المتقدّم',
        management: 'إدارة مرض جفاف العين',
        previous: 'السابق',
        next: 'التالي',
        email: 'البريد الإلكتروني',
    },
    howToUse: {
        welcome: 'مرحبًا',
        intro: 'تُولِّد خريطة إدارة جفاف العين تقنيات العلاج المناسبة اعتمادًا على التخفيف من العوامل والقياس.',
        howToUseTitle: 'كيفية استخدام خريطة إدارة جفاف العين',
        step1: '1. أولاً:\nاختر فئة من القائمة الموجودة على اليسار:\n\nنقص طبقة الدموع\nتشوّهات الجفن\nاضطرابات السطح العيني',
        step2: '2. ثانيًا:\nاختر فئة فرعية ضمن الفئة الرئيسية التي قمت بتحديدها لتصنيف نوع جفاف العين بشكل أدق.\nيمكنك اختيار عدة فئات فرعية، واستخدام أزرار التالي / السابق للتنقّل بين الخيارات التي قمت باختيارها.',
        step3: '3. أخيرًا:\nاختر خيارات العلاج المفضّلة لجفاف العين من القائمة المنبثقة.\nيمكنك إرسال تقرير إلى بريدك الإلكتروني من خلال اختيار زر الإرسال.',
    },
    boxes: {
        tearFilmDeficiencies: 'اختلالات طبقة الدموع',
        eyelidAnomalies: 'تشوّهات الجفن',
        ocularSurfaceAbnormalities: 'شذوذات السطح العيني',
        lipid: 'الدهون',
        aqueous: 'الجزء المائي',
        mucinGlycocalyx: 'الميوسين / الغليكوكاليكس',
        blinkLidClosure: 'الرمش / إغلاق الجفن',
        lidMargin: 'حافة الجفن',
        anatomicalMisalignment: 'اختلال تشريحي',
        neuralDysfunction: 'خلل وظيفي عصبي',
        ocularSurfaceCellular: 'تلف خلوي / اضطراب خلوي',
        primaryInflammation: 'الالتهاب / الإجهاد التأكسدي',
    },
    email: {
        title: 'تقرير البريد الإلكتروني',
        emailAddressLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل عنوان البريد الإلكتروني',
        pxReferenceLabel: 'مرجع المريض',
        pxReferenceOptional: '(اختياري)',
        pxReferencePlaceholder: 'أدخل مرجع المريض',
        pxReferenceError: 'يُسمح فقط بالحروف والأرقام والمسافات والشرطات وعلامات التسطير',
        reportPreview: 'معاينة التقرير',
        noItems: 'لم يتم تحديد أي عناصر',
        emailSent: 'تم إرسال البريد الإلكتروني!',
        emailSentConfirmation: 'تم إرسال تقريرك إلى {email}',
        close: 'إغلاق',
        send: 'إرسال البريد الإلكتروني',
        sending: 'جارٍ الإرسال...',
        fromName: 'أداة تحديد نوع جفاف العين',
        subject: 'تقرير إدارة مرض جفاف العين',
        pxReferencePrefix: 'مرجع المريض: {ref}',
        header: {
            tearFilm: 'اختلالات طبقة الدموع:',
            eyelid: 'تشوّهات الجفن:',
            ocular: 'شذوذات السطح العيني:',
        },
    },
    config: {
        lipid: { category: 'اختلالات طبقة الدموع', title: 'الدهون' },
        aqueous: { category: 'اختلالات طبقة الدموع', title: 'الجزء المائي' },
        'mucin-glycocalyx': { category: 'اختلالات طبقة الدموع', title: 'الميوسين / الغليكوكاليكس' },
        'blink-lid-closure': { category: 'تشوّهات الجفن', title: 'الرمش / إغلاق الجفن' },
        'lid-margin': { category: 'تشوّهات الجفن', title: 'حافة الجفن' },
        'anatomical-misalignment': {
            category: 'شذوذات السطح العيني',
            title: 'اختلال تشريحي',
        },
        'neural-dysfunction': {
            category: 'شذوذات السطح العيني',
            title: 'خلل وظيفي عصبي',
        },
        'ocular-surface-cellular': {
            category: 'شذوذات السطح العيني',
            title: 'تلف خلوي / اضطراب خلوي',
        },
        'primary-inflammation': {
            category: 'شذوذات السطح العيني',
            title: 'الالتهاب / الإجهاد التأكسدي',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: 'الإنترفيرومترية',
                    description: 'درجة ≤ 3 (نمط غير متجانس أو ملوّن) أو < 72 نانومتر على جهاز LipiView',
                },
                {
                    name: 'قابلية إفراز المييبوم/جودته',
                    description: 'المييبوم غير صافٍ أو ذو قابلية إفراز محدودة',
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: 'المينيسكومتري',
                    description: 'ارتفاع المنيزكوس الدمعي ≤ 0.20 مم',
                },
            ],
            advanced: [
                {
                    name: 'ستريب مينيسكومتري',
                    description: 'طول التبليل 2.5 مم',
                },
                {
                    name: 'فحص بروتينات الدموع والمكوّنات الكيميائية الأخرى',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: 'صبغة الروز بنغال أو الليسامين الأخضر',
                    description: 'أكثر من 9 نقاط تلوّن نقطية',
                },
            ],
            advanced: [
                {
                    name: 'التحليل المناعي النسيجي والمجهر الإلكتروني المناعي لطبقة الدموع',
                },
                {
                    name: 'الطبعة الخلوية',
                    description: 'كثافة خلايا الكأس ومورفولوجيا الخلايا الظهارية',
                },
            ],
        },
        'blink-lid-closure': {
            standard: [
                {
                    name: 'ملاحظة الرَمش الجزئي',
                    description: 'حدوثه بنسبة تزيد عن 40%',
                },
                {
                    name: 'اللاغوفثالْموس / عدم الإغلاق الكامل للجفن',
                    description: 'مُلاحَظ',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: 'ملاحظة التهاب الجفن الأمامي' },
                { name: 'خلل غدد الميبوميان' },
            ],
            advanced: [
                {
                    name: 'تصوير غدد الميبوميان',
                    description: 'طول الغدة أقل من 75٪',
                },
                {
                    name: 'انسداد الغدد',
                    description: 'مُلاحَظ',
                },
                {
                    name: 'توسّع الشعيرات الدموية',
                    description: 'مُلاحَظ',
                },
                { name: 'قابلية تعبير الغدة' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: 'المجهر البيوميكانيكي بواسطة المصباح الشِقّي' }],
            advanced: [{ name: 'تصوير طبوغرافية القرنية' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: 'نفخة هوائية أو إحساس جسدي',
                    description: 'عتبات حساسية القرنية وحافة الجفن ≥ 0.8 ملي بار (550)، مع العلم أن الأجهزة غير قابلة للمقارنة',
                },
            ],
            advanced: [
                {
                    name: 'التصوير المجهري البؤري الحيّ',
                    description: 'تتوفر قيم معيارية لطول الأعصاب وتفرعاتها وكثافتها',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: 'تلوّن القرنية بالفلوريسئين',
                    description: 'أكثر من 5 نقاط نقطية',
                },
                {
                    name: 'تلوّن الملتحمة بالليسامين الأخضر',
                    description: 'أكثر من 9 نقاط نقطية',
                },
                {
                    name: 'تلوّن حافة الجفن',
                    description: 'بطول يزيد عن 2 مم وبعرض 25٪',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: 'احتقان الملتحمة البصلية',
                    description: 'أكثر من 1.5 على مقياس إفرون أو أكثر من 0.95 وفق قياس JENVIS',
                },
            ],
            advanced: [
                { name: 'التصوير المجهري البؤري الحيّ' },
                { name: 'والاختبارات الجزيئية لطبقة الدموع والسطح العيني' },
            ],
        },
    },
    management: {
        lipid: [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            // Flag #8: TEAR SUPPLEMENTATION/STABILISATION label missing Arabic — stays English
            { label: 'TEAR SUPPLEMENTATION/STABILISATION', description: 'مواد محاكية للدهون' },
            { label: 'أدوات حفظ الدموع', description: 'النظارات ذات الحجرة المرطّبة' },
            // Flag #9: PHARMACOLOGICAL label missing Arabic — stays English
            { label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION', description: 'المحفّزات الإفرازية الموضعية' },
            {
                label: 'تحفيز الدموع بالأجهزة / الاستعادة بالأجهزة',
                description: 'تسخين الجفون بالأجهزة الداخلية والخارجية؛ العلاج بالضوء النبضي المكثّف (IPL)؛ العلاج بالضوء منخفض الشدة (LLLT)\nالعلاج بالضوء النبضي المكثّف\nالكمادات الدافئة',
            },
            { label: 'العلاجات الموجّهة لتحسين الرمش', description: '' },
            // Flag #10: TOPICAL ANTI-INFLAMMATORIES label missing Arabic — stays English
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: 'السيكلوسبورين A' },
        ],
        aqueous: [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            { label: 'التغذية الفموية', description: 'أوميغا 3' },
            { label: 'TEAR SUPPLEMENTATION/STABILISATION', description: 'الدموع الاصطناعية' },
            {
                label: 'أدوات حفظ الدموع',
                description: 'النظارات ذات الحجرة المرطّبة\nسدادات القنوات الدمعية؛ العدسات الصُّلبية',
            },
            {
                label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                description: 'كبريتيد السيلينيوم\nالتنظيم العصبي الدوائي\nالمُحفّزات الإفرازية الموضعية',
            },
            {
                label: 'تحفيز الدموع بالأجهزة / الاستعادة بالأجهزة',
                description: 'التحفيز العصبي\nالعلاج بالضوء منخفض الطاقة',
            },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
            { label: 'عوامل تجديد السطح العيني', description: 'العلاجات البيولوجية' },
            { label: 'الخيارات الجراحية', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            { label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION', description: '' },
            { label: 'تحفيز الدموع بالأجهزة / الاستعادة بالأجهزة', description: 'التحفيز العصبي' },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
        ],
        'blink-lid-closure': [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            { label: 'أدوات حفظ الدموع', description: 'النظارات ذات الحجرة المرطّبة' },
            { label: 'العلاجات الموجّهة لتحسين الرمش', description: '' },
            { label: 'الخيارات الجراحية', description: '' },
        ],
        'lid-margin': [
            {
                label: 'التهاب الجفن الأمامي',
                description: '',
                subOptions: [
                    { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
                    { label: 'نظافة الجفن الموضعية (مثل تقليل الحمل البكتيري)', description: '' },
                    { label: 'المضادات الحيوية الفموية', description: '' },
                ],
            },
            {
                label: 'خلل غدد الميبوميان',
                description: '',
                subOptions: [
                    { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
                    { label: 'التغذية الفموية', description: 'أوميغا 3\nفيتامين د3' },
                    { label: 'TEAR SUPPLEMENTATION/STABILISATION', description: 'المواد المحاكية للدهون' },
                    {
                        label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                        description: 'الأزيثروميسين الموضعي؛ كبريتيد السيلينيوم',
                    },
                    {
                        label: 'تحفيز الدموع بالأجهزة / الاستعادة بالأجهزة',
                        description: 'تسخين الجفون بالأجهزة الداخلية والخارجية؛ العلاج بالضوء النبضي المكثّف (IPL)؛ العلاج بالضوء منخفض الشدة (LLLT)',
                    },
                    {
                        label: 'إزالة التصقات/القشور من حافة الجفن',
                        description: '"في حالات التقرّن الشديد"',
                    },
                    { label: 'العلاجات الموجّهة لتحسين الرمش', description: '' },
                    { label: 'TOPICAL ANTI-INFLAMMATORIES', description: 'السيكلوسبورين A' },
                    { label: 'المضادات الحيوية الفموية', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            { label: 'الخيارات الجراحية', description: '' },
        ],
        'neural-dysfunction': [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            {
                label: 'TEAR SUPPLEMENTATION/STABILISATION',
                description: 'فيتامين أ   فيتامين ب12   حمض الأسكوربيك',
            },
            { label: 'عوامل تجديد السطح العيني', description: 'العلاجات البيولوجية' },
            { label: 'الخيارات الجراحية', description: 'انسداد القنوات الدمعية' },
        ],
        'ocular-surface-cellular': [
            { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
            { label: 'التغذية الفموية', description: 'فيتامين د3' },
            {
                label: 'TEAR SUPPLEMENTATION/STABILISATION',
                description: 'حمض الهيالورونيك، التريهالوز، الزانثان، بيرفلوروهيكسي أوكتان و HP-غوار',
            },
            {
                label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                description: 'المحفّزات الإفرازية الفموية\nالمُحفّزات الإفرازية الموضعية\nالتنظيم العصبي الدوائي',
            },
            {
                label: 'تحفيز الدموع بالأجهزة / الاستعادة بالأجهزة',
                description: 'العلاج بالضوء منخفض الشدة (LLLT)؛ الرنين الكهرومغناطيسي الكمي (QMR)؛ التحفيز العصبي\nالعلاج بالضوء النبضي المكثّف (IPL)؛ تفتيح قنوات الغدد\nتسخين الجفون بالأجهزة الخارجية؛ المُحفّزات الإفرازية الموضعية',
            },
            {
                label: 'العلاجات الموجّهة لتحسين الرمش',
                description: 'تسخين الجفون بالأجهزة الخارجية؛ المُحفّزات الإفرازية الموضعية',
            },
            { label: 'نظافة الجفن الموضعية (مثل تقليل الحمل البكتيري)', description: '' },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
            { label: 'عوامل تجديد السطح العيني', description: 'البروتين المزلِّق\nالعلاجات البيولوجية' },
            { label: 'الخيارات الجراحية', description: 'انسداد القنوات الدمعية' },
        ],
        'primary-inflammation': [
            {
                label: 'أساسي',
                description: '',
                subOptions: [
                    { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
                    { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
                    { label: 'عوامل تجديد السطح العيني', description: 'الغشاء الأمنيوسي' },
                ],
            },
            {
                label: 'ثانوي',
                description: '',
                subOptions: [
                    { label: 'نصائح نمط الحياة', description: 'لأخذها بعين الاعتبار' },
                    { label: 'التغذية الفموية', description: 'أوميغا 3، فيتامين د3' },
                    {
                        label: 'TEAR SUPPLEMENTATION/STABILISATION',
                        description: 'حمض الهيالورونيك، سيلينو بروتين P و الزانثان و المصل و HP-غوار',
                    },
                    { label: 'أدوات حفظ الدموع', description: 'التعديل الدوائي' },
                    {
                        label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                        // Flag #16: Arabic missing from spreadsheet — stays English
                        description: 'التعديل العصبي الدوائي',
                    },
                    { label: 'تحفيز الدموع بالأجهزة / الاستعادة بالأجهزة', description: 'العلاج بالضوء النبضي المكثّف' },
                    { label: 'إزالة التصقات/القشور من حافة الجفن', description: '' },
                    { label: 'العلاجات الموجّهة لتحسين الرمش', description: '' },
                    { label: 'نظافة الجفن الموضعية (مثل تقليل الحمل البكتيري)', description: '' },
                    { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
                    {
                        label: 'عوامل تجديد السطح العيني',
                        // Flag #17: Arabic missing from spreadsheet — stays English
                        description: 'الغشاء الأمنيوسي',
                    },
                    { label: 'الخيارات الجراحية', description: 'انسداد القنوات الدمعية' },
                ],
            },
        ],
    },
}
