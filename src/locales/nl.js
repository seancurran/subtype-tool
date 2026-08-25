// Dutch translations — sourced from "Dry Eye Management Map Translation (Dutch) 202606.xlsx"
export default {
    nav: {
        tearFilmDeficiencies: 'TRAANFILM DEFICIENTIES',
        lipid: 'Lipide',
        aqueous: 'Water',
        mucinGlycocalyx: 'Mucine / glycocalyx',
        eyelidAnomalies: 'OOGLIDAFWIJKINGEN',
        blinkLidClosure: 'Knipperslag/ooglidsluiting',
        lidMargin: 'Ooglidrand',
        ocularSurfaceAbnormalities: 'AFWIJKINGEN VAN HET OOGOPPERVLAK',
        anatomicalMisalignment: 'Verstoorde anatomische uitlijning',
        neuralDysfunction: 'Neurale dysfunctie',
        ocularSurfaceCellularLine1: 'Oogoppervlak celschade /',
        ocularSurfaceCellularLine2: 'verstoring',
        primaryInflammationLine1: 'Primaire ontsteking /',
        primaryInflammationLine2: 'oxidatieve stress',
        howToUseTabLine1: 'Instructies',
        howToUseTabLine2: '',
        copyright: '© {year} Alcon Inc. GLBDEOH2600001',
        menu: 'Menu',
    },
    diamonds: {
        dryEyeReliefLine1: 'VERLICHTING\nDROGE OGEN',
        dryEyeReliefLine2: '&\nBEHANDELING',
        tearFilmLine1: 'TRAANFILM',
        tearFilmLine2: 'DEFICIENTIES',
        eyelidLine1: 'OOGLID',
        eyelidLine2: 'AFWIJKINGEN',
        ocularLine1: 'AFWIJKINGEN VAN HET',
        ocularLine2: 'OOGOPPERVLAK',
    },
    panel: {
        standardTesting: 'STANDAARD ONDERZOEK',
        advancedTesting: 'GEAVANCEERD ONDERZOEK',
        management: 'BEHANDELING VAN DROGE-OOGZIEKTE',
        previous: 'VORIGE',
        next: 'VOLGENDE',
        email: 'E-MAIL',
    },
    howToUse: {
        welcome: 'Welkom.',
        intro: 'De Dry Eye Management Map genereert toepasselijke behandelstrategieën op basis van mitigatie en meting.',
        howToUseTitle: 'HOE GEBRUIK JE DE DRY EYE MANAGEMENT MAP',
        step1: '<strong>Selecteer allereerst links een categorie</strong> - Traanfilmdeficienties, Ooglidafwijkingen of Afwijkingen van het oogoppervlak.',
        step2: '<strong>Selecteer vervolgens een subcategorie</strong> binnen de hoofdcategorie om het type droge ogen verder te classificeren. Je kunt meerdere subcategorieën selecteren en met de knoppen Volgende/Vorige schakelen tussen de geselecteerde opties.',
        step3: 'Tot slot <strong>selecteer je de gewenste behandelingsopties voor droge ogen</strong> in het pop-up menu. Verstuur een rapport naar je e-mail door in het pop-up menu de e-mail knop te selecteren.',
    },
    boxes: {
        tearFilmDeficiencies: 'TRAANFILM DEFICIENTIES',
        eyelidAnomalies: 'OOGLIDAFWIJKINGEN',
        ocularSurfaceAbnormalities: 'AFWIJKINGEN VAN HET OOGOPPERVLAK',
        lipid: 'Lipide',
        aqueous: 'Water',
        mucinGlycocalyx: 'Mucine / glycocalyx',
        blinkLidClosure: 'Knipperslag/ooglidsluiting',
        lidMargin: 'Ooglidrand',
        anatomicalMisalignment: 'Verstoorde anatomische uitlijning',
        neuralDysfunction: 'Neurale dysfunctie',
        ocularSurfaceCellular: 'Oogoppervlak celschade / verstoring',
        primaryInflammation: 'Primaire ontsteking / oxidatieve stress',
    },
    email: {
        title: 'E-mailrapport',
        emailAddressLabel: 'E-mailadres',
        emailPlaceholder: 'Voer e-mailadres in',
        pxReferenceLabel: 'Patiëntreferentie',
        pxReferenceOptional: '(optioneel)',
        pxReferencePlaceholder: 'Voer patiëntreferentie in',
        pxReferenceError: 'Alleen letters, cijfers, spaties, koppeltekens en liggende streepjes zijn toegestaan',
        reportPreview: 'Voorbeeld van rapport',
        noItems: 'Geen items geselecteerd',
        emailSent: 'E-mail verzonden!',
        emailSentConfirmation: 'Uw rapport is verzonden naar {email}',
        close: 'Sluiten',
        send: 'E-mail verzenden',
        sending: 'Verzenden...',
        fromName: 'Hulpmiddel voor subtypering van droge-oogziekte',
        subject: 'Uw resultaten van de Dry Eye Management Map',
        pxReferencePrefix: 'Patiëntreferentie: {ref}',
        header: {
            tearFilm: 'TRAANFILM DEFICIENTIES:',
            eyelid: 'OOGLIDAFWIJKINGEN:',
            ocular: 'AFWIJKINGEN VAN HET OOGOPPERVLAK:',
        },
    },
    config: {
        lipid: { category: 'TRAANFILM DEFICIENTIES', title: 'LIPIDE' },
        aqueous: { category: 'TRAANFILM DEFICIENTIES', title: 'WATER' },
        'mucin-glycocalyx': { category: 'TRAANFILM DEFICIENTIES', title: 'MUCINE / GLYCOCALYX' },
        'blink-lid-closure': { category: 'OOGLIDAFWIJKINGEN', title: 'KNIPPERSLAG/OOGLIDSLUITING' },
        'lid-margin': { category: 'OOGLIDAFWIJKINGEN', title: 'OOGLIDRAND' },
        'anatomical-misalignment': {
            category: 'AANDOENINGEN VAN HET OOGOPPERVLAK',
            title: 'VERSTOORDE ANATOMISCHE UITLIJNING',
        },
        'neural-dysfunction': {
            category: 'AANDOENINGEN VAN HET OOGOPPERVLAK',
            title: 'NEURALE DYSFUNCTIE',
        },
        'ocular-surface-cellular': {
            category: 'AANDOENINGEN VAN HET OOGOPPERVLAK',
            title: 'CELSCHADE/VERSTORING',
        },
        'primary-inflammation': {
            category: 'AANDOENINGEN VAN HET OOGOPPERVLAK',
            title: 'ONTSTEKING/OXIDATIEVE STRESS',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: 'INTERFEROMETRIE',
                    description: 'graad ≤3 (niet-amorfe of gekleurde patronen) of < 72 nm gemeten met Lipiview',
                },
                {
                    name: 'MEIBUM-EXPRESSIE EN -KWALITEIT',
                    description: 'meibum niet helder of beperkt uitdrukbaar',
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: 'METEN VAN DE MENISCUSHOOGTE',
                    description: 'traanmeniscushoogte ≤0.20mm',
                },
            ],
            advanced: [
                {
                    name: 'STRIP-MENISCOMETRIE',
                    description: 'bevochtigingslengte 2.5 mm',
                },
                {
                    name: 'ANALYSE VAN TRAANEIWITTEN EN ANDERE CHEMISCHE BESTANDDELEN',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: 'ROSE BENGAL OF LISSAMINE GROEN STAINING',
                    description: '>9 punctata',
                },
            ],
            advanced: [
                {
                    name: 'IMMUNOHISTOCHEMISCH EN IMMUNO-ELEKTRONENMICROSCOPISCH ONDERZOEK VAN DE TRAANFILM',
                },
                {
                    name: 'IMPRESSIECYTOLOGIE',
                    description: 'dichtheid van gobletcellen en morfologie van epitheelcellen',
                },
            ],
        },
        'blink-lid-closure': {
            standard: [
                {
                    name: 'WAARGENOMEN ONVOLLEDIGE KNIPPERSLAG',
                    description: '>40% van de knipperslagen',
                },
                {
                    name: 'LAGOPHTHALMUS / ONVOLDOENDE OOGLIDSLUITING',
                    description: 'waargenomen',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: 'OBSERVATIE ANTERIEURE BLEFARITIS' },
                { name: 'MGD' },
            ],
            advanced: [
                {
                    name: 'MEIBOGRAFIE',
                    description: 'lengte van de klier <75%',
                },
                {
                    name: 'KLIEROBSTRUCTIE',
                    description: 'waargenomen',
                },
                {
                    name: 'TELEANGIECTASIE',
                    description: 'waargenomen',
                },
                { name: 'KLIER EXPRESSIE' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: 'SPLEETLAMPONDERZOEK' }],
            advanced: [{ name: 'CORNEALE TOPOGRAFIE' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: 'LUCHTPULS- OF TACTIELE SENSIBILITEITSTEST',
                    description:
                        'gevoeligheidsdrempels van de cornea en ooglidrand ≥ 0,8 mbar; instrumenten zijn niet onderling vergelijkbaar',
                },
            ],
            advanced: [
                {
                    name: 'IN VIVO CONFOCALE MICROSCOPIE',
                    description:
                        'normatieve referentiewaarden beschikbaar voor zenuwlengte, vertakkings- en dichtheidsparameters',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: 'CORNEALE FLUORESCEÏNESTAINING',
                    description: '> 5 punctate aankleuringspunten',
                },
                {
                    name: 'CONJUNCTIVALE LISSAMINE GROEN STAINING',
                    description: '> 9 punctate aankleuringspunten',
                },
                {
                    name: 'LID WIPER-KLEURING',
                    description: '> 2mm lengte en 25% breedte',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: 'BULBAIRE CONJUNCTIVALE HYPERAEMIE',
                    description: '> 1,5 op de Efron schaal of >0,95 objectief volgens JENVIS',
                },
            ],
            advanced: [
                { name: 'IN VIVO CONFOCALE MICROSCOPIE' },
                { name: 'MOLECULAIR ONDERZOEK VAN DE TRAANFILM EN HET OOGOPPERVLAK' },
            ],
        },
    },
    management: {
        lipid: [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            { label: 'TRAANSUPPLETIE / STABILISATIE', description: 'Lipomimetische stoffen' },
            {
                label: 'TRAANBEHOUDENDE HULPMIDDELEN',
                description: 'Kappenbrillen',
            },
            {
                label: 'FARMACOLOGISCHE TRAANSTIMULATIE / -HERSTEL',
                description: 'Topische secretagogen',
            },
            {
                label: 'APPARAATGESTUURDE TRAANSTIMULATIE / -HERSTEL',
                description: 'Interne en externe ooglidverwarming; IPL; LNLT\nIPL\nWarme compressen',
            },
            { label: 'KNIPPERTHERAPIEËN', description: '' },
            { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: 'Ciclosporine' },
        ],
        aqueous: [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            { label: 'VOEDING', description: 'Omega 3' },
            { label: 'TRAANSUPPLETIE / STABILISATIE', description: 'Kunsttranen' },
            {
                label: 'TRAANBEHOUDENDE HULPMIDDELEN',
                description: 'Kappenbrillen\nPunctum plugs\nSclerale lenzen',
            },
            {
                label: 'FARMACOLOGISCHE TRAANSTIMULATIE / -HERSTEL',
                description: 'Farmacologische neuromodulatie\nTopische secretagogen',
            },
            {
                label: 'APPARAATGESTUURDE TRAANSTIMULATIE / -HERSTEL',
                description: 'Neurostimulatie\nLNLT',
            },
            { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: '' },
            { label: 'OOGOPPERVLAK-REGENERATOREN', description: 'Biologische geneesmiddelen' },
            { label: 'OPERATIEVE OPTIES', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            { label: 'FARMACOLOGISCHE TRAANSTIMULATIE / -HERSTEL', description: 'Secretagogen' },
            { label: 'APPARAATGESTUURDE TRAANSTIMULATIE / -HERSTEL', description: 'Neurostimulatie' },
            { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: '' },
        ],
        'blink-lid-closure': [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            { label: 'TRAANBEHOUDENDE HULPMIDDELEN', description: 'Kappenbrillen' },
            { label: 'KNIPPERTHERAPIEËN', description: '' },
            { label: 'OPERATIEVE OPTIES', description: '' },
        ],
        'lid-margin': [
            {
                label: 'ANTERIEURE BLEFARITIS',
                description: '',
                subOptions: [
                    { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
                    {
                        label: 'TOPISCHE OOGLIDHYGIËNE (BIJV. VERMINDEREN VAN BACTERIËLE BELASTING)',
                        description: '',
                    },
                    { label: 'ORALE ANTIBIOTICA', description: '' },
                ],
            },
            {
                label: 'MEIBOMKLIERDYSFUNCTIE',
                description: '',
                subOptions: [
                    { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
                    { label: 'VOEDING', description: 'Omega 3\nVitamine D3' },
                    {
                        label: 'TRAANSUPPLETIE / STABILISATIE',
                        description: 'Lipomimetische stoffen',
                    },
                    {
                        label: 'FARMACOLOGISCHE TRAANSTIMULATIE / -HERSTEL',
                        description: 'Topisch azitromycine; Seleensulfide',
                    },
                    {
                        label: 'APPARAATGESTUURDE TRAANSTIMULATIE / -HERSTEL',
                        description: 'Interne en externe ooglidverwarming; IPL; LNLT; QMR',
                    },
                    {
                        label: 'OOGLIDRAND REINIGING',
                        description: 'bij significante keratinisatie',
                    },
                    { label: 'KNIPPERTHERAPIEËN', description: '' },
                    { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: 'Ciclosporine' },
                    { label: 'ORALE ANTIBIOTICA', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            { label: 'OPERATIEVE OPTIES', description: '' },
        ],
        'neural-dysfunction': [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            {
                label: 'TRAANSUPPLETIE / STABILISATIE',
                description: 'Vitamine A/B12/C',
            },
            { label: 'OOGOPPERVLAK-REGENERATOREN', description: 'Biologische geneesmiddelen' },
            { label: 'OPERATIEVE OPTIES', description: 'Punctumocclusie' },
        ],
        'ocular-surface-cellular': [
            { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
            { label: 'VOEDING', description: 'Vitamine D3' },
            {
                label: 'TRAANSUPPLETIE / STABILISATIE',
                description: 'Hyaluronzuur, trehalose, xanthaangom, perfluorohexyloctaan & HP-guar',
            },
            {
                label: 'FARMACOLOGISCHE TRAANSTIMULATIE / -HERSTEL',
                description:
                    'Orale secretagogen\nTopische secretagogen\nFarmacologische neuromodulatie',
            },
            {
                label: 'APPARAATGESTUURDE TRAANSTIMULATIE / -HERSTEL',
                description:
                    'LNLT; QMR; neurostimulatie\nIPL; expressie warmtebehandeling van de oogleden met hulpmiddel; topische secretagogen',
            },
            {
                label: 'KNIPPERTHERAPIEËN',
                description: 'Warmtebehandeling van de oogleden met hulpmiddel; topische secretagogen',
            },
            { label: 'TOPISCHE OOGLIDHYGIËNE', description: '' },
            { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: '' },
            { label: 'OOGOPPERVLAK-REGENERATOREN', description: 'Lubricine\nBiologische geneesmiddelen' },
            { label: 'OPERATIEVE OPTIES', description: 'Punctumocclusie' },
        ],
        'primary-inflammation': [
            {
                label: 'PRIMAIR',
                description: '',
                subOptions: [
                    { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
                    { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: '' },
                    { label: 'OOGOPPERVLAK-REGENERATOREN', description: 'Amnionmembraan' },
                ],
            },
            {
                label: 'SECUNDAIR',
                description: '',
                subOptions: [
                    { label: 'LEEFSTIJLADVIES', description: 'Te overwegen' },
                    { label: 'VOEDING', description: 'Omega 3, vitamine D3' },
                    {
                        label: 'TRAANSUPPLETIE / STABILISATIE',
                        description: 'Hyaluronzuur, selenoproteïne P, xanthaangom & HP-guar, serum',
                    },
                    {
                        label: 'TRAANBEHOUDENDE HULPMIDDELEN',
                        description: 'farmacologische modulatie',
                    },
                    {
                        label: 'FARMACOLOGISCHE TRAANSTIMULATIE / -HERSTEL',
                        description: 'farmacologische neuromodulatie',
                    },
                    { label: 'APPARAATGESTUURDE TRAANSTIMULATIE / -HERSTEL', description: 'IPL' },
                    { label: 'OOGLIDRAND REINIGING', description: '' },
                    { label: 'KNIPPERTHERAPIEËN', description: '' },
                    {
                        label: 'TOPISCHE OOGLIDHYGIËNE (BIJV. VERMINDEREN VAN BACTERIËLE BELASTING)',
                        description: '',
                    },
                    { label: 'TOPISCHE ONTSTEKINGSREMMERS', description: '' },
                    { label: 'OOGOPPERVLAK-REGENERATOREN', description: 'Amnionmembraan' },
                    { label: 'OPERATIEVE OPTIES', description: 'Punctumocclusie' },
                ],
            },
        ],
    },
}
