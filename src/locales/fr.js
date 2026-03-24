// French translations — sourced from "Dry Eye Management Map Translation (French) 202602.xlsx"
// Keys marked [MISSING] have no French translation in the spreadsheet and fall back to English.
// See docs/missing-translations-fr.md for the full gap list to send to the client.
export default {
    nav: {
        tearFilmDeficiencies: 'ANOMALIES DU FILM DE LARMES',
        lipid: 'Lipidique',
        aqueous: 'Aqueuse',
        mucinGlycocalyx: 'Mucinique\nGlycocalyx',
        eyelidAnomalies: 'ANOMALIES DES PAUPIÈRES',
        blinkLidClosure: 'Clignement / fermeture palpébrale',
        lidMargin: 'Bord libre de la paupière',
        ocularSurfaceAbnormalities: 'ALTÉRATIONS DE LA SURFACE OCULAIRE',
        anatomicalMisalignment: 'Malalignement anatomique',
        neuralDysfunction: 'Dysfonctionnement neurologique',
        // Full text: "DOMMAGE CELLULAIRE ET PERTURBATION DE LA SURFACE OCULAIRE"
        // Split position not specified in spreadsheet — see missing-translations-fr.md
        ocularSurfaceCellularLine1: 'Dommage cellulaire et',
        ocularSurfaceCellularLine2: 'perturbation de la surface oculaire',
        // Full text: "INFLAMMATION PRIMAIRE / STRESS OXYDATIF"
        // Split position not specified in spreadsheet — see missing-translations-fr.md
        primaryInflammationLine1: 'Inflammation primaire /',
        primaryInflammationLine2: 'stress oxydatif',
        // Full text: "Instructions d'utilisation"
        // Split position not specified in spreadsheet — see missing-translations-fr.md
        howToUseTabLine1: 'Instructions',
        howToUseTabLine2: "d'utilisation",
        copyright: '© {year} Alcon Inc. GLBDEOH2600001', // [MISSING] not in spreadsheet
    },
    diamonds: {
        dryEyeReliefLine1: 'SÉCHERESSE\nOCULAIRE',
        dryEyeReliefLine2: '& PRISE EN\nCHARGE',
        tearFilmLine1: 'ANOMALIES DU',
        tearFilmLine2: 'FILM DE LARMES',
        eyelidLine1: 'ANOMALIES DES',
        eyelidLine2: 'PAUPIÈRES',
        ocularLine1: 'ALTÉRATIONS DE LA',
        ocularLine2: 'SURFACE<br />OCULAIRE',
    },
    panel: {
        standardTesting: 'EXAMENS DE ROUTINE',
        advancedTesting: 'EXAMENS SPÉCIFIQUES',
        management: 'PRISE EN CHARGE DE LA SÉCHERESSE OCULAIRE',
        previous: 'PRÉCÉDENT',
        next: 'SUIVANT',
        email: 'E-MAIL',
    },
    howToUse: {
        welcome: 'Bienvenue.',
        intro: 'La cartographie de la prise en charge de la sécheresse oculaire produit des modalités de prise en charge adaptées, sur la base de mesures cliniques et du soulagement.',
        howToUseTitle: 'COMMENT UTILISER LA CARTOGRAPHIE DE PRISE EN CHARGE DE LA SÉCHERESSE OCULAIRE',
        step1: 'Commencez par <strong>sélectionner une catégorie dans la colonne de gauche</strong> : Déficiences du film lacrymal, Anomalies palpébrales ou Anomalies de la surface oculaire.',
        step2: "Sélectionnez ensuite <strong>une sous\u2011catégorie</strong> dans la catégorie principale choisie afin d'affiner la classification du type de sécheresse oculaire. Vous pouvez sélectionner plusieurs sous\u2011catégories et utiliser les boutons Suivant / Précédent pour naviguer entre vos choix.",
        step3: "Enfin, <strong>sélectionnez les options de prise en charge préférées de la sécheresse oculaire</strong> dans le menu contextuel. Vous pouvez envoyer un rapport vers votre adresse e\u2011mail en sélectionnant le bouton E-mail dans le menu contextuel.",
    },
    boxes: {
        tearFilmDeficiencies: 'Anomalies du film de larmes',
        eyelidAnomalies: 'Anomalies des paupières',
        ocularSurfaceAbnormalities: 'Altérations de la surface oculaire',
        lipid: 'Lipidique',
        aqueous: 'Aqueuse',
        mucinGlycocalyx: 'Mucinique glycocalyx',
        blinkLidClosure: 'Clignement / fermeture palpébrale',
        lidMargin: 'Bord libre de la paupière',
        anatomicalMisalignment: 'Malalignement anatomique',
        neuralDysfunction: 'Dysfonctionnement neurologique',
        ocularSurfaceCellular: 'Dommage cellulaire et perturbation de la surface oculaire',
        primaryInflammation: 'Inflammation primaire / stress oxydatif',
    },
    email: {
        title: 'Rapport par e-mail',
        emailAddressLabel: 'Adresse e-mail',
        emailPlaceholder: "Saisir l'adresse e-mail",
        pxReferenceLabel: 'Référence patient',
        pxReferenceOptional: '(facultatif)',
        pxReferencePlaceholder: 'Saisir la référence patient',
        pxReferenceError: 'Seuls les lettres, chiffres, espaces, tirets et traits de soulignement sont autorisés',
        reportPreview: 'Aperçu du rapport',
        noItems: 'Aucun élément sélectionné',
        emailSent: 'E-mail envoyé !',
        emailSentConfirmation: 'Votre rapport a été envoyé à {email}',
        close: 'Fermer',
        send: "Envoyer l'e-mail",
        sending: 'Envoi en cours...',
        fromName: 'Outil de sous-typage de la sécheresse oculaire',
        subject: 'Vos résultats de la cartographie de la sécheresse oculaire',
        pxReferencePrefix: 'Référence patient : {ref}',
        header: {
            tearFilm: 'ANOMALIES DU FILM DE LARMES :',
            eyelid: 'ANOMALIES DES PAUPIÈRES :',
            ocular: 'ALTÉRATIONS DE LA SURFACE OCULAIRE :',
        },
    },
    config: {
        lipid: { category: 'ANOMALIES DU FILM DE LARMES', title: 'LIPIDIQUE' },
        aqueous: { category: 'ANOMALIES DU FILM DE LARMES', title: 'AQUEUSE' },
        'mucin-glycocalyx': { category: 'ANOMALIES DU FILM DE LARMES', title: 'MUCINIQUE\nGLYCOCALYX' },
        'blink-lid-closure': { category: 'ANOMALIES DES PAUPIÈRES', title: 'CLIGNEMENT FERMETURE\nPALPÉBRALE' },
        'lid-margin': { category: 'ANOMALIES DES PAUPIÈRES', title: 'BORD LIBRE DE LA PAUPIÈRE' },
        'anatomical-misalignment': {
            category: 'ALTÉRATIONS DE LA\nSURFACE OCULAIRE',
            title: 'MALALIGNEMENT ANATOMIQUE',
        },
        'neural-dysfunction': {
            category: 'ALTÉRATIONS DE LA\nSURFACE OCULAIRE',
            title: 'DYSFONCTIONNEMENT NEUROLOGIQUE',
        },
        'ocular-surface-cellular': {
            category: 'ALTÉRATIONS DE LA\nSURFACE OCULAIRE',
            title: 'DOMMAGE CELLULAIRE',
        },
        'primary-inflammation': {
            category: 'ALTÉRATIONS DE LA\nSURFACE OCULAIRE',
            title: 'INFLAMMATION',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: 'INTERFÉROMÉTRIE',
                    description: 'grade ≤ 3 (non-amorphe ou trame colorée) ou <72nm au LipiView',
                },
                {
                    name: 'EXPRESSION/QUALITÉ DU MEIBUM',
                    description: "meibum non claire ou limité à l'expression",
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: 'MESURE DU PRISME LACRYMALE',
                    description: 'hauteur du ménisque ≤0.20mm',
                },
            ],
            advanced: [
                {
                    name: 'MESUREE PAR BANDELETTE',
                    description: 'longueur mouillée de 2,5 mm',
                },
                {
                    name: 'ANALYSE DES PROTÉINES LACRYMALES ET DES AUTRES COMPOSANTS CHIMIQUES',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: 'COLORATION AU ROSE BENGAL OU VERT DE LISSAMINE',
                    description: '> 9 points de piqueté',
                },
            ],
            advanced: [
                {
                    name: 'IMMUNOHISTOCHIMIE ET IMMUNOMICROSCOPIE ÉLECTRONIQUE DU FILM LACRYMAL',
                },
                {
                    name: "CYTOLOGIE D'IMPRESSION",
                    description: 'densité des cellules caliciformes et caractéristiques des cellules épithéliales',
                },
            ],
        },
        'blink-lid-closure': {
            standard: [
                {
                    name: "OBSERVATION D'UN CLIGNEMENT PARTIEL",
                    description: 'occurrence > 40 %',
                },
                {
                    name: 'LAGOPHTALMIE / OCCLUSION PALPÉBRALE INADÉQUATE',
                    description: 'observée',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: 'OBSERVATION DE BLÉPHARITE ANTÉRIEURE' },
                { name: 'DGM' },
            ],
            advanced: [
                {
                    name: 'MEIBOGRAPHIE',
                    description: 'longueur glandulaire < 75 %',
                },
                {
                    name: 'OBSTRUCTION GLANDULAIRE',
                    description: 'observée',
                },
                {
                    name: 'TÉLANGIECTASIES',
                    description: 'observées',
                },
                { name: 'EXPRESSIBILITÉ DES GLANDES' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: 'BIOMICROSCOPIE À LA LAMPE À FENTE' }],
            advanced: [{ name: 'TOPOGRAPHIE CORNÉENNE' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: 'SENSIBILITÉ AU VENT OU SENSATION PHYSIQUE',
                    description:
                        'seuils de sensibilité cornéenne et du bord palpébral ≥ 0,8 mbar550, bien que les instruments ne soient pas comparables.',
                },
            ],
            advanced: [
                {
                    name: 'MICROSCOPIE CONFOCALE IN VIVO',
                    description:
                        'valeurs normatives disponibles pour la longueur nerveuse, le nombre de ramifications et les paramètres de densité.',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: 'COLORATION CORNÉENNE À LA FLUORESCÉINE',
                    description: 'plus de 5 points de piqueté',
                },
                {
                    name: 'COLORATION CONJONCTIVALE AU VERT DE LISSAMINE',
                    description: 'plus de 9 points de piqueté',
                },
                {
                    name: 'COLORATION DU LID WIPER',
                    description: '> 2 mm de longueur et 25 % de la largeur',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: 'HYPERHÉMIE CONJONCTIVALE BULBAIRE',
                    description: "> 1,5 sur l'échelle d'Efron ou > 0,95 selon la mesure objective JENVIS",
                },
            ],
            advanced: [
                { name: 'MICROSCOPIE CONFOCALE IN VIVO' },
                { name: 'ANALYSES MOLÉCULAIRES DU FILM LACRYMAL ET DE LA SURFACE OCULAIRE' },
            ],
        },
    },
    management: {
        lipid: [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            { label: 'SUPPLÉMENTATION / STABILISATION LACRYMAL', description: 'Lipomimétiques' },
            {
                label: 'DISPOSITIFS DE PRÉSERVATION DES LARMES',
                description: 'Lunettes à chambre humide',
            },
            {
                label: 'STIMULATION / RÉGÉNÉRATION LACRYMALE PHARMACOLOGIQUE',
                description: 'Sécrétagogues locaux',
            },
            {
                label: 'DISPOSITIF DE STIMULATION / RESTAURATION LACRYMALE',
                description: 'Dispositifs de chauffage interne et externe des paupières ; IPL ; Photobiomodulation.\nIPL\nCompresses chaudes',
            },
            { label: 'THÉRAPIES DU CLIGNEMENT', description: '' },
            { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: 'Cyclosporine A' },
        ],
        aqueous: [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            { label: 'NUTRIMENTS ORAUX', description: 'Oméga 3' },
            { label: 'SUPPLÉMENTATION / STABILISATION LACRYMAL', description: 'Larmes artificielles' },
            {
                label: 'DISPOSITIFS DE PRÉSERVATION DES LARMES',
                description: 'Lunettes à chambre humide\nBouchons méatiques ; lentilles de contact sclérales',
            },
            {
                label: 'STIMULATION / RÉGÉNÉRATION LACRYMALE PHARMACOLOGIQUE',
                description: 'Disulfure de sélénium\nNeuromodulation pharmacologique # sécrétagogues locaux',
            },
            {
                label: 'DISPOSITIF DE STIMULATION / RESTAURATION LACRYMALE',
                description: 'Neurostimulation\nLLLT',
            },
            { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: '' },
            { label: 'TRAITEMENTS RÉGÉNÉRATEURS DE LA SURFACE OCULAIRE', description: 'Biothérapies' },
            { label: 'OPTIONS CHIRURGICALES', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            { label: 'STIMULATION / RÉGÉNÉRATION LACRYMALE PHARMACOLOGIQUE', description: '' },
            { label: 'DISPOSITIF DE STIMULATION / RESTAURATION LACRYMALE', description: 'Neurostimulation' },
            { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: '' },
        ],
        'blink-lid-closure': [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            { label: 'DISPOSITIFS DE PRÉSERVATION DES LARMES', description: 'Lunettes à chambre humide' },
            { label: 'THÉRAPIES DU CLIGNEMENT', description: '' },
            { label: 'OPTIONS CHIRURGICALES', description: '' },
        ],
        'lid-margin': [
            {
                label: 'BLÉPHARITE ANTÉRIEURE',
                description: '',
                subOptions: [
                    { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
                    {
                        label: 'HYGIÈNE PALPÉBRALE LOCALE (ex. : réduction de la charge bactérienne)',
                        description: '',
                    },
                    { label: 'ANTIBIOTIQUES ORAUX', description: '' },
                ],
            },
            {
                label: 'DYSFONCTIONNEMENT DES GLANDES DE MEIBOMIUS',
                description: '',
                subOptions: [
                    { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
                    { label: 'NUTRIMENTS ORAUX', description: 'Oméga 3\nVitamine D3' },
                    {
                        label: 'SUPPLÉMENTATION / STABILISATION LACRYMAL',
                        description: 'Lipomimétiques',
                    },
                    {
                        label: 'STIMULATION / RÉGÉNÉRATION LACRYMALE PHARMACOLOGIQUE',
                        description: 'Azithromycine locale, Disulfure de sélénium',
                    },
                    {
                        label: 'DISPOSITIF DE STIMULATION / RESTAURATION LACRYMALE',
                        description: 'Dispositifs de chauffage interne et externe des paupières ; IPL ; LLLT ; Résonance moléculaire quantique (QMR)',
                    },
                    {
                        label: 'DÉBRIDEMENT DU BORD LIBRE',
                        description: 'Quand la kératinisation est significative',
                    },
                    { label: 'THÉRAPIES DU CLIGNEMENT', description: '' },
                    { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: 'Cyclosporine A' },
                    { label: 'ANTIBIOTIQUES ORAUX', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            { label: 'OPTIONS CHIRURGICALES', description: '' },
        ],
        'neural-dysfunction': [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            {
                label: 'SUPPLÉMENTATION / STABILISATION LACRYMAL',
                description: 'Vitamines A/B12/C',
            },
            { label: 'TRAITEMENTS RÉGÉNÉRATEURS DE LA SURFACE OCULAIRE', description: 'Biothérapies' },
            { label: 'OPTIONS CHIRURGICALES', description: 'Occlusion méatique' },
        ],
        'ocular-surface-cellular': [
            { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
            { label: 'NUTRIMENTS ORAUX', description: 'Vitamine D3' },
            {
                label: 'SUPPLÉMENTATION / STABILISATION LACRYMAL',
                description: 'Acide hyaluronique, tréhalose, gomme xanthane, perfluorohexyloctane et HP-guar',
            },
            {
                label: 'STIMULATION / RÉGÉNÉRATION LACRYMALE PHARMACOLOGIQUE',
                description: 'Sécrétagogues oraux\nSécrétagogues locaux\nNeuromodulation pharmacologique',
            },
            {
                label: 'DISPOSITIF DE STIMULATION / RESTAURATION LACRYMALE',
                description: 'LLLT ; QMR ; neurostimulation\nIPL ; sondage\nDispositifs de chauffage externe des paupières ; sécrétagogues locaux',
            },
            {
                label: 'THÉRAPIES DU CLIGNEMENT',
                description: 'Dispositifs de chauffage externe des paupières, sécrétagogues locaux',
            },
            { label: 'HYGIÈNE PALPÉBRALE LOCALE', description: '' },
            { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: '' },
            { label: 'TRAITEMENTS RÉGÉNÉRATEURS DE LA SURFACE OCULAIRE', description: 'Lubricine\nBiothérapies' },
            { label: 'OPTIONS CHIRURGICALES', description: 'Occlusion méatique' },
        ],
        'primary-inflammation': [
            {
                label: 'PRIMAIRE',
                description: '',
                subOptions: [
                    { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
                    { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: '' },
                    { label: 'TRAITEMENTS RÉGÉNÉRATEURS DE LA SURFACE OCULAIRE', description: 'Membrane amniotique' },
                ],
            },
            {
                label: 'SECONDAIRE',
                description: '',
                subOptions: [
                    { label: 'CONSEILS HYGIÉNO-DIÉTÉTIQUE', description: 'À considérer' },
                    { label: 'NUTRIMENTS ORAUX', description: 'Oméga 3, vitamine D3' },
                    {
                        label: 'SUPPLÉMENTATION / STABILISATION LACRYMAL',
                        description: 'Acide hyaluronique, sélénoprotéine P, gomme xanthane et HP-guar, sérum',
                    },
                    {
                        label: 'DISPOSITIFS DE PRÉSERVATION DES LARMES',
                        description: 'Régulation pharmacologique',
                    },
                    {
                        label: 'STIMULATION / RÉGÉNÉRATION LACRYMALE PHARMACOLOGIQUE',
                        description: 'Neuromodulation pharmacologique',
                    },
                    { label: 'DISPOSITIF DE STIMULATION / RESTAURATION LACRYMALE', description: 'IPL' },
                    { label: 'LID MARGIN DEBRIDEMENT', description: '' }, // [MISSING] label not in spreadsheet
                    { label: 'THÉRAPIES DU CLIGNEMENT', description: '' },
                    {
                        label: 'HYGIÈNE PALPÉBRALE LOCALE (ex. : réduction de la charge bactérienne)',
                        description: '',
                    },
                    { label: 'ANTI-INFLAMMATOIRES LOCAUX', description: '' },
                    { label: 'TRAITEMENTS RÉGÉNÉRATEURS DE LA SURFACE OCULAIRE', description: 'Membrane amniotique' },
                    { label: 'OPTIONS CHIRURGICALES', description: 'Occlusion méatique' },
                ],
            },
        ],
    },
}
