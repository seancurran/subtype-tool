// Arabic translations — placeholder (same structure as en.js, values to be filled by translator)
export default {
    nav: {
        tearFilmDeficiencies: 'TEAR FILM DEFICIENCIES',
        lipid: 'Lipid',
        aqueous: 'Aqueous',
        mucinGlycocalyx: 'Mucin / glycocalyx',
        eyelidAnomalies: 'EYELID ANOMALIES',
        blinkLidClosure: 'Blink / lid closure',
        lidMargin: 'Lid margin',
        ocularSurfaceAbnormalities: 'OCULAR SURFACE ABNORMALITIES',
        anatomicalMisalignment: 'Anatomical misalignment',
        neuralDysfunction: 'Neural dysfunction',
        ocularSurfaceCellularLine1: 'Ocular surface cellular',
        ocularSurfaceCellularLine2: 'damage / disruption',
        primaryInflammationLine1: 'Primary inflammation /',
        primaryInflammationLine2: 'oxidative stress',
        copyright: '© {year} Alcon Inc. GLBDEOH2600001',
    },
    diamonds: {
        dryEyeReliefLine1: 'DRY EYE RELIEF',
        dryEyeReliefLine2: '& MANAGEMENT',
        tearFilmLine1: 'TEAR FILM',
        tearFilmLine2: 'DEFICIENCIES',
        eyelidLine1: 'EYELID',
        eyelidLine2: 'ANOMALIES',
        ocularLine1: 'OCULAR SURFACE',
        ocularLine2: 'ABNORMALITIES',
    },
    panel: {
        standardTesting: 'STANDARD TESTING',
        advancedTesting: 'ADVANCED TESTING',
        management: 'DRY EYE DISEASE MANAGEMENT',
        previous: 'PREVIOUS',
        next: 'NEXT',
        email: 'EMAIL',
    },
    howToUse: {
        welcome: 'Welcome.',
        intro: 'The Dry Eye Management Map generates applicable management techniques based on mitigation and measurement.',
        howToUseTitle: 'HOW TO USE THE DRY EYE MANAGEMENT MAP',
        step1: 'First, <strong>select a category on the left</strong> – Tear Film Deficiencies, Eyelid Anomalies, or Ocular Surface Abnormalities.',
        step2: 'Then, <strong>select a sub-category</strong> within the main selected category to further classify the dry eye type. You can select multiple sub-categories and use the Next/Previous buttons to flip between your selected choices.',
        step3: 'Finally, <strong>select the preferred dry eye disease management options</strong> from the pop-up menu. Send a report to your email by selecting the Email button in the pop-up menu.',
    },
    boxes: {
        tearFilmDeficiencies: 'TEAR FILM DEFICIENCIES',
        eyelidAnomalies: 'EYELID ANOMALIES',
        ocularSurfaceAbnormalities: 'OCULAR SURFACE ABNORMALITIES',
        lipid: 'Lipid',
        aqueous: 'Aqueous',
        mucinGlycocalyx: 'Mucin/glycocalyx',
        blinkLidClosure: 'Blink / lid closure',
        lidMargin: 'Lid margin',
        anatomicalMisalignment: 'Anatomical misalignment',
        neuralDysfunction: 'Neural dysfunction',
        ocularSurfaceCellular: 'Ocular surface cellular damage/disruption',
        primaryInflammation: 'Primary inflammation/oxidative stress',
    },
    email: {
        title: 'Email Report',
        emailAddressLabel: 'Email Address',
        emailPlaceholder: 'Enter email address',
        pxReferenceLabel: 'Px Reference',
        pxReferenceOptional: '(optional)',
        pxReferencePlaceholder: 'Enter patient reference',
        pxReferenceError: 'Only letters, numbers, spaces, hyphens, and underscores are allowed',
        reportPreview: 'Report Preview',
        noItems: 'No items selected',
        emailSent: 'Email Sent!',
        emailSentConfirmation: 'Your report has been sent to {email}',
        close: 'Close',
        send: 'Send Email',
        sending: 'Sending...',
        fromName: 'Dry Eye Disease Subtype Tool',
        subject: 'Dry Eye Disease Management Report',
        pxReferencePrefix: 'Px Reference: {ref}',
        header: {
            tearFilm: 'TEAR FILM DEFICIENCIES:',
            eyelid: 'EYELID ANOMALIES:',
            ocular: 'OCULAR SURFACE ABNORMALITIES:',
        },
    },
    config: {
        lipid: { category: 'TEAR FILM DEFICIENCIES', title: 'LIPID' },
        aqueous: { category: 'TEAR FILM DEFICIENCIES', title: 'AQUEOUS' },
        'mucin-glycocalyx': { category: 'TEAR FILM DEFICIENCIES', title: 'MUCIN GLYCOCALYX' },
        'blink-lid-closure': { category: 'EYELID ANOMALIES', title: 'BLINK / LID CLOSURE' },
        'lid-margin': { category: 'EYELID ANOMALIES', title: 'LID MARGIN' },
        'anatomical-misalignment': {
            category: 'OCULAR SURFACE ABNORMALITIES',
            title: 'ANATOMICAL MISALIGNMENT',
        },
        'neural-dysfunction': {
            category: 'OCULAR SURFACE ABNORMALITIES',
            title: 'NEURAL DYSFUNCTION',
        },
        'ocular-surface-cellular': {
            category: 'OCULAR SURFACE ABNORMALITIES',
            title: 'CELLULAR DAMAGE',
        },
        'primary-inflammation': {
            category: 'OCULAR SURFACE ABNORMALITIES',
            title: 'INFLAMMATION',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: 'INTERFEROMETRY',
                    description: 'grade ≤ 3 (non-amorphous or colored pattern) or <72nm on LipiView',
                },
                {
                    name: 'MEIBUM EXPRESSIBILITY/QUALITY',
                    description: 'meibum not clear or limited expressibility',
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: 'MENISCOMETRY',
                    description: 'tear meniscus height ≤0.20mm',
                },
            ],
            advanced: [
                {
                    name: 'STRIP MENISCOMETRY',
                    description: '2.5mm wetting length',
                },
                {
                    name: 'TEAR PROTEINS AND OTHER CHEMICAL COMPONENTS TESTING',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: 'ROSE BENGAL OR LISSAMINE GREEN STAINING',
                    description: '>9 punctate spots',
                },
            ],
            advanced: [
                {
                    name: 'IMMUNOHISTOCHEMISTRY AND IMMUNOELECTRON MICROSCOPY OF TEAR FILM',
                },
                {
                    name: 'IMPRESSION CYTOLOGY',
                    description: 'Goblet cell density and epithelial cell morphology',
                },
            ],
        },
        'blink-lid-closure': {
            standard: [
                {
                    name: 'PARTIAL BLINKING OBSERVATION',
                    description: '>40% occurrence',
                },
                {
                    name: 'LAGOPHTHALMOS / INADEQUATE LID SEAL',
                    description: 'Observed',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: 'ANTERIOR BLEPHARITIS OBSERVATION' },
                { name: 'MGD' },
            ],
            advanced: [
                {
                    name: 'MEIBOGRAPHY',
                    description: 'Gland length <75%',
                },
                {
                    name: 'GLAND PLUGGING',
                    description: 'Observed',
                },
                {
                    name: 'TELANGIECTASIA',
                    description: 'Observed',
                },
                { name: 'GLAND EXPRESSIBILITY' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: 'SLIT-LAMP BIOMICROSCOPY' }],
            advanced: [{ name: 'CORNEAL TOPOGRAPHY' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: 'PUFF OR PHYSICAL SENSATION',
                    description:
                        'Corneal and lid margin sensitivity thresholds ≥0.8 mbar although instruments are not comparable',
                },
            ],
            advanced: [
                {
                    name: 'IN VIVO CONFOCAL MICROSCOPY',
                    description:
                        'Normative values available for nerve length, branch and density metrics',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: 'CORNEAL FLUORESCEIN STAINING',
                    description: '>5 punctate spots',
                },
                {
                    name: 'CONJUNCTIVAL LISSAMINE GREEN STAINING',
                    description: '>9 punctate spots',
                },
                {
                    name: 'LID WIPER STAINING',
                    description: '>2mm length and 25% width',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: 'BULBAR CONJUNCTIVAL HYPERAEMIA',
                    description: '>1.5 Efron scale or >0.95 objective JENVIS',
                },
            ],
            advanced: [
                { name: 'IN VIVO CONFOCAL MICROSCOPY' },
                { name: 'TEAR FILM AND OCULAR SURFACE MOLECULAR TESTING' },
            ],
        },
    },
    management: {
        lipid: [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            { label: 'TEAR SUPPLEMENTATION/STABILISATION', description: 'Lipomimetics' },
            {
                label: 'TEAR CONSERVATION DEVICES',
                description: 'Moisture chamber spectacles',
            },
            {
                label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                description: 'Topical secretagogues',
            },
            {
                label: 'DEVICE TEAR STIMULATION/RESTORATION',
                description: 'Internal and external device lid heating; IPL, LLLT\nIPL\nWarm compress',
            },
            { label: 'BLINK THERAPIES', description: '' },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: 'Cyclosporine A' },
        ],
        aqueous: [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            { label: 'ORAL NUTRITION', description: 'Omega 3' },
            { label: 'TEAR SUPPLEMENTATION/STABILISATION', description: 'Artificial tears' },
            {
                label: 'TEAR CONSERVATION DEVICES',
                description: 'Moisture chamber spectacles\nPunctal plugs\nScleral contact lenses',
            },
            {
                label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                description:
                    'Selenium sulfide\nPharmacological neurostimulation\nTopical neurostimulation',
            },
            {
                label: 'DEVICE TEAR STIMULATION/RESTORATION',
                description: 'Neurostimulation\nLLLT',
            },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
            { label: 'OCULAR SURFACE REGENERATORS', description: 'Biologics' },
            { label: 'SURGICAL OPTIONS', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            { label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION', description: '' },
            { label: 'DEVICE TEAR STIMULATION/RESTORATION', description: 'Neurostimulation' },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
        ],
        'blink-lid-closure': [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            { label: 'TEAR CONSERVATION DEVICES', description: 'Moisture chamber spectacles' },
            { label: 'BLINK THERAPIES', description: '' },
            { label: 'SURGICAL OPTIONS', description: '' },
        ],
        'lid-margin': [
            {
                label: 'ANTERIOR BLEPHARITIS',
                description: '',
                subOptions: [
                    { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
                    {
                        label: 'TOPICAL LID HYGIENE (e.g. reducing bacterial load)',
                        description: '',
                    },
                    { label: 'ORAL ANTIBIOTICS', description: '' },
                ],
            },
            {
                label: 'MEIBOMIAN GLAND DYSFUNCTION',
                description: '',
                subOptions: [
                    { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
                    { label: 'ORAL NUTRITION', description: 'Omega 3\nVitamin D3' },
                    {
                        label: 'TEAR SUPPLEMENTATION/STABILISATION',
                        description: 'Lipomimetics',
                    },
                    {
                        label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                        description: 'Topical azithromycin, Selenium sulfide',
                    },
                    {
                        label: 'DEVICE TEAR STIMULATION/RESTORATION',
                        description: 'Internal and external device lid heating; IPL, LLLT; QMR',
                    },
                    {
                        label: 'LID MARGIN DEBRIDEMENT',
                        description: 'When significant keratinization',
                    },
                    { label: 'BLINK THERAPIES', description: '' },
                    { label: 'TOPICAL ANTI-INFLAMMATORIES', description: 'Cyclosporine A' },
                    { label: 'ORAL ANTIBIOTICS', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            { label: 'SURGICAL OPTIONS', description: '' },
        ],
        'neural-dysfunction': [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            {
                label: 'TEAR SUPPLEMENTATION/STABILISATION',
                description: 'Vit A/B12 ascorbic acid',
            },
            { label: 'OCULAR SURFACE REGENERATORS', description: 'Biologics' },
            { label: 'SURGICAL OPTIONS', description: 'Punctal occlusion' },
        ],
        'ocular-surface-cellular': [
            { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
            { label: 'ORAL NUTRITION', description: 'Vitamin D3' },
            {
                label: 'TEAR SUPPLEMENTATION/STABILISATION',
                description: 'Hyaluronic acid, trehalose, xanthan, perfluorohexyloctane & HP-guar',
            },
            {
                label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                description:
                    'Oral secretagogues\nTopical secretagogues\nPharmacological neuromodulation',
            },
            {
                label: 'DEVICE TEAR STIMULATION/RESTORATION',
                description:
                    'LLLT; QMR; neurostimulation\nIPL; probing external device lid heating; topical secretagogues',
            },
            {
                label: 'BLINK THERAPIES',
                description: 'External device lid heating, topical secretagogues',
            },
            { label: 'TOPICAL LID HYGIENE', description: '' },
            { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
            { label: 'OCULAR SURFACE REGENERATORS', description: 'Lubricin Biologics' },
            { label: 'SURGICAL OPTIONS', description: 'Punctal occlusion' },
        ],
        'primary-inflammation': [
            {
                label: 'PRIMARY',
                description: '',
                subOptions: [
                    { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
                    { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
                    { label: 'OCULAR SURFACE REGENERATORS', description: 'Amniotic membrane' },
                ],
            },
            {
                label: 'SECONDARY',
                description: '',
                subOptions: [
                    { label: 'LIFESTYLE ADVICE', description: 'To be considered' },
                    { label: 'ORAL NUTRITION', description: 'Omega 3, vitamin D3' },
                    {
                        label: 'TEAR SUPPLEMENTATION/STABILISATION',
                        description: 'Hyaluronic acid, selenoprotein P, xanthan & HP-guar, serum',
                    },
                    {
                        label: 'TEAR CONSERVATION DEVICES',
                        description: 'Pharmacological modulation',
                    },
                    {
                        label: 'PHARMACOLOGICAL TEAR STIMULATION/RESTORATION',
                        description: 'Pharmacological neuromodulation',
                    },
                    { label: 'DEVICE TEAR STIMULATION/RESTORATION', description: 'IPL' },
                    { label: 'LID MARGIN DEBRIDEMENT', description: '' },
                    { label: 'BLINK THERAPIES', description: '' },
                    {
                        label: 'TOPICAL LID HYGIENE (e.g. reducing bacterial load)',
                        description: '',
                    },
                    { label: 'TOPICAL ANTI-INFLAMMATORIES', description: '' },
                    { label: 'OCULAR SURFACE REGENERATORS', description: 'Amniotic membrane' },
                    { label: 'SURGICAL OPTIONS', description: 'Punctal occlusion' },
                ],
            },
        ],
    },
}
