// Czech translations — sourced from "Dry Eye Management Map Translation (Czech) 202605.xlsx"
export default {
    nav: {
        tearFilmDeficiencies: 'DEFICIT SLZNÉHO FILMU',
        lipid: 'Lipidová složka',
        aqueous: 'Vodná složka',
        mucinGlycocalyx: 'Mucin/glykokalyx',
        eyelidAnomalies: 'ANOMÁLIE OČNÍCH VÍČEK',
        blinkLidClosure: 'Mrkání/ dovření víček',
        lidMargin: 'Okraj víčka',
        ocularSurfaceAbnormalities: 'ABNORMALITY OČNÍHO POVRCHU',
        anatomicalMisalignment: 'Anatomická malalignace (chybé postavení)',
        neuralDysfunction: 'Neurální dysfunkce',
        ocularSurfaceCellularLine1: 'Buněčné poškození /',
        ocularSurfaceCellularLine2: 'narušení povrchu oka',
        primaryInflammationLine1: 'Primární zánět /',
        primaryInflammationLine2: 'ocidativní stres',
        howToUseTabLine1: 'NÁVOD K',
        howToUseTabLine2: 'POUŽITÍ',
        copyright: '© {year} Alcon Inc. GLBDEOH2600001',
        menu: 'Nabídka',
    },
    diamonds: {
        dryEyeReliefLine1: 'ÚLEVA OD\nSUCHÉHO OKA',
        dryEyeReliefLine2: 'A\nMANAGEMENT',
        tearFilmLine1: 'DEFICIT',
        tearFilmLine2: 'SLZNÉHO FILMU',
        eyelidLine1: 'ANOMÁLIE',
        eyelidLine2: 'OČNÍCH VÍČEK',
        ocularLine1: 'ABNORMALITY',
        ocularLine2: 'OČNÍHO POVRCHU',
    },
    panel: {
        standardTesting: 'ZÁKLADNÍ DIAGNOSTIKA',
        advancedTesting: 'POKROČILÁ DIAGNOSTIKA',
        management: 'MANAGEMENT ONEMOCNĚNÍ SUCHÉHO OKA',
        previous: 'PŘEDCHOZÍ',
        next: 'DALŠÍ',
        email: 'E-MAIL',
    },
    howToUse: {
        welcome: 'Vítejte.',
        intro: 'Mapa managementu suchého oka generuje příslušné léčebné postupy na základě zmírňování projevů a měření.',
        howToUseTitle: 'JAK MAPU MANAGEMENTU SUCHÉHO OKA POUŽÍVAT',
        step1: 'Nejprve <strong>vyberte kategorii vlevo</strong> - Deficity slzného filmu, Anomálie očních víček nebo Abnormality očního povrchu.',
        step2: 'Poté v rámci hlavní vybrané kategorie <strong>zvolte podkategorii</strong> pro blížší klasifikaci typu suchého oka. Můžete vybrat více podkategorií najednou a k přepínání mezi zvolenými možnostmi použít tlačítka Další/Předchozí.',
        step3: 'Nakonec z vyskakovacího menu <strong>zvolte preferované možnosti léčby a zvládání onemocnění suchého oka</strong>. Výslednou zprávu si můžete odeslat na e-mail kliknutím na tlačítko E-mail ve vyskakovací nabídce.',
    },
    boxes: {
        tearFilmDeficiencies: 'DEFICIT SLZNÉHO FILMU',
        eyelidAnomalies: 'ANOMÁLIE OČNÍCH VÍČEK',
        ocularSurfaceAbnormalities: 'ABNORMALITY OČNÍHO POVRCHU',
        lipid: 'Lipidová složka',
        aqueous: 'Vodná složka',
        mucinGlycocalyx: 'Mucin/glykokalyx',
        blinkLidClosure: 'Mrkání/ dovření víček',
        lidMargin: 'Okraj víčka',
        anatomicalMisalignment: 'Anatomická malalignace (chybé postavení)',
        neuralDysfunction: 'Neurální dysfunkce',
        ocularSurfaceCellular: 'Buněčné poškození/ narušení povrchu oka',
        primaryInflammation: 'Primární zánět/ocidativní stres',
    },
    email: {
        title: 'E-mailová zpráva',
        emailAddressLabel: 'E-mailová adresa',
        emailPlaceholder: 'Zadejte e-mailovou adresu',
        pxReferenceLabel: 'Reference pacienta',
        pxReferenceOptional: '(volitelné)',
        pxReferencePlaceholder: 'Zadejte referenci pacienta',
        pxReferenceError: 'Povolena jsou pouze písmena, čísla, mezery, spojovníky a podtržítka',
        reportPreview: 'Náhled zprávy',
        noItems: 'Nejsou vybrány žádné položky',
        emailSent: 'E-mail byl odeslán!',
        emailSentConfirmation: 'Vaše zpráva byla odeslána na adresu {email}',
        close: 'Zavřít',
        send: 'Odeslat e-mail',
        sending: 'Odesílání...',
        fromName: 'Nástroj pro určení podtypu onemocnění suchého oka',
        subject: 'Vaše výsledky z Mapy managementu suchého oka',
        pxReferencePrefix: 'Reference pacienta: {ref}',
        header: {
            tearFilm: 'DEFICIT SLZNÉHO FILMU:',
            eyelid: 'ANOMÁLIE OČNÍCH VÍČEK:',
            ocular: 'ABNORMALITY OČNÍHO POVRCHU:',
        },
    },
    config: {
        lipid: { category: 'NEDOSTATEK SLZNÉHO FILMU', title: 'LIPIDOVÁ SLOŽKA' },
        aqueous: { category: 'NEDOSTATEK SLZNÉHO FILMU', title: 'VODNÁ SLOŽKA' },
        'mucin-glycocalyx': { category: 'NEDOSTATEK SLZNÉHO FILMU', title: 'MUCIN/GLYKOKALYX' },
        'blink-lid-closure': { category: 'ANOMÁLIE VÍČEK', title: 'MRKÁNÍ/ DOVŘENÍ VÍČEK' },
        'lid-margin': { category: 'ANOMÁLIE VÍČEK', title: 'OKRAJ VÍČKA' },
        'anatomical-misalignment': {
            category: 'ABNORMALITY OČNÍHO POVRCHU',
            title: 'ANATOMICKÁ MALALIGNACE (CHYBÉ POSTAVENÍ)',
        },
        'neural-dysfunction': {
            category: 'ABNORMALITY OČNÍHO POVRCHU',
            title: 'NEURÁLNÍ DYSFUNKCE',
        },
        'ocular-surface-cellular': {
            category: 'ABNORMALITY OČNÍHO POVRCHU',
            title: 'BUNĚČNÉ POŠKOZENÍ',
        },
        'primary-inflammation': {
            category: 'ABNORMALITY OČNÍHO POVRCHU',
            title: 'ZÁNĚT',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: 'INTERFEROMETRIE',
                    description: 'stupeň ≤ 3 (neamorfní nebo barevný vzorek) nebo <72nm na LipiView',
                },
                {
                    name: 'EXPRESE MEIBOMSKÝCH ŽLAZ/KVALITA',
                    description: 'meibum není čiré nebo je omezená exprese',
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: 'MENISKOMETRIE',
                    description: 'výška slzného menisku ≤0.20mm',
                },
            ],
            advanced: [
                {
                    name: 'PROUŽKOVÁ MENISKOMETRIE',
                    description: 'délka zvlhčení 2,5 mm',
                },
                {
                    name: 'TESTOVÁNÍ SLZNÝCH PROTEINŮ A DALŠÍCH CHEMICKÝCH SLOŽEK',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: 'BARVENÍ BENGÁLSKOU ČERVENÍ NEBO LISSAMINOVOU ZELENÍ',
                    description: '>9 barvených teček',
                },
            ],
            advanced: [
                {
                    name: 'IMUNOHISTOCHEMIE A IMUNOELEKTRONOVÁ MIKROSKOPIE SLZNÉHO FILMU',
                },
                {
                    name: 'IMPRESNÍ CYTOLOGIE',
                    description: 'hustota pohárkových buněk a epitelové buňky',
                },
            ],
        },
        'blink-lid-closure': {
            standard: [
                {
                    name: 'POZOROVÁNÍ NEÚPLNÉHO MRKÁNÍ',
                    description: 'výskyt >40%',
                },
                {
                    name: 'LAGOFTALMUS / NEDOSTATEČNÉ DOVŘENÍ VÍČEK',
                    description: 'Pozorováno',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: 'POZOROVÁNÍ PŘEDNÍ BLEFARITIDY' },
                { name: 'MGD = DYSFUNKCE MEIBOMSKÝCH ŽLAZ' },
            ],
            advanced: [
                {
                    name: 'MEIBOGRAFIE',
                    description: 'délka žlaz <75%',
                },
                {
                    name: 'UCPÁNÍ MEIBOMSKÝCH ŽLAZ',
                    description: 'Pozorováno',
                },
                {
                    name: 'TELANGIEKTÁZIE',
                    description: 'Pozorováno',
                },
                { name: 'EXPRESE ŽLAZ' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: 'BIOMIKROSKOPIE NA ŠTĚRBINOVÉ LAMPĚ' }],
            advanced: [{ name: 'ROHOVKOVÁ TOPOGRAFIE' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: 'ZÁVAN VZDUCHU NEBO FYZICKÝ VJEM',
                    description:
                        'prahy citlivosti rohovky a okraje víčka ≥0.8 mbar 550, ačkoliv přístroje nejsou srovnatelné',
                },
            ],
            advanced: [
                {
                    name: 'CONFOKÁLNÍ MIKROSKOPIE IN VIVO',
                    description:
                        'normativní hodnoty pro délku, větvení a hustotu nervových vláken',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: 'BARVENÍ ROHOVKY FLUORESCEINEM',
                    description: '>5 teček',
                },
                {
                    name: 'BARVENÍ SPOJIVKY LISSAMINOVOU ZELENÍ',
                    description: '>9 teček',
                },
                {
                    name: 'BARVENÍ "STĚRAČE VÍČKA"',
                    description: '>2mm délky a 25% šířky',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: 'BULBÁRNÍ HYPERÉMIE SPOJIVKY',
                    description: '>1,5 Efronova škála nebo >0.95 objektivně JENVIS',
                },
            ],
            advanced: [
                { name: 'CONFOKÁLNÍ MIKROSKOPIE IN VIVO' },
                { name: 'MOLEKULÁRNÍ TESTOVÁNÍ SLZNÉHO FILMU A POVRCHU OKA' },
            ],
        },
    },
    management: {
        lipid: [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            { label: 'SUBSTITUCE/ STABILITA SLZNÉHO FILMU', description: 'Lipomimetika' },
            {
                label: 'PROSTŘEDKY PRO ZACHOVÁNÍ SLZNÉHO FILMU',
                description: 'Brýle s vlhkou komorou',
            },
            {
                label: 'FARMAKOLIGICKÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                description: 'Lokální sekretagogy',
            },
            {
                label: 'PŘÍSTROJOVÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                description: 'Vnitřní a vnější ohřev víčka, IPL, LLLT\nIPL\nTeplé obklady',
            },
            { label: 'TERAPIE MRKÁNÍ', description: '' },
            { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: 'Cyklosporin A' },
        ],
        aqueous: [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            { label: 'PEROORÁLNÍ VÝŽIVA', description: 'Omega 3' },
            { label: 'SUBSTITUCE/ STABILITA SLZNÉHO FILMU', description: 'Umělé slzy' },
            {
                label: 'PROSTŘEDKY PRO ZACHOVÁNÍ SLZNÉHO FILMU',
                description: 'Brýle s vlhkou komorou\nUzávěry slzných bodů\nSklérální kontaktní čočky',
            },
            {
                label: 'FARMAKOLIGICKÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                description: 'Farmakologická neuromodelace\nLokální sekretagogy',
            },
            {
                label: 'PŘÍSTROJOVÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                description: 'Neurostimulace\nLLLT',
            },
            { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: '' },
            { label: 'REGENERÁTORY OČNÍHO POVRCHU', description: 'Biologika' },
            { label: 'CHIRURGICKÉ MOŽNOSTI', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            { label: 'FARMAKOLIGICKÁ STIMULACE/ OBNOVA SLZNÉHO FILMU', description: 'Sekretagogy' },
            { label: 'PŘÍSTROJOVÁ STIMULACE/ OBNOVA SLZNÉHO FILMU', description: 'Neurostimulace' },
            { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: '' },
        ],
        'blink-lid-closure': [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            { label: 'PROSTŘEDKY PRO ZACHOVÁNÍ SLZNÉHO FILMU', description: 'Brýle s vlhkou komorou' },
            { label: 'TERAPIE MRKÁNÍ', description: '' },
            { label: 'CHIRURGICKÉ MOŽNOSTI', description: '' },
        ],
        'lid-margin': [
            {
                label: 'PŘEDNÍ BLEFARITIDA',
                description: '',
                subOptions: [
                    { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
                    {
                        label: 'LOKÁLNÍ HYGIENA VÍČEK (NAPŘ. SNÍŽENÍ BAKTERIÁLNÍ ZÁTĚŽE)',
                        description: '',
                    },
                    { label: 'PERORÁLNÍ ANTIBIOTIKA', description: '' },
                ],
            },
            {
                label: 'DYSFUNKCE MEIBOMSKÝCH ŽLAZ',
                description: '',
                subOptions: [
                    { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
                    { label: 'PEROORÁLNÍ VÝŽIVA', description: 'Omega 3\nVitamín D3' },
                    {
                        label: 'SUBSTITUCE/ STABILITA SLZNÉHO FILMU',
                        description: 'Lipomimetika',
                    },
                    {
                        label: 'FARMAKOLIGICKÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                        description: 'Lokálně azithromycin, disulfid selenu',
                    },
                    {
                        label: 'PŘÍSTROJOVÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                        description: 'Zařízení pro vnitřní a vnější ohřev víčka, IPL, LLLT, QMR',
                    },
                    {
                        label: 'DEBRIDEMENT OKRAJŮ VÍČEK',
                        description: 'Při významné keratinizaci',
                    },
                    { label: 'TERAPIE MRKÁNÍ', description: '' },
                    { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: 'Cyklosporin A' },
                    { label: 'PERORÁLNÍ ANTIBIOTIKA', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            { label: 'CHIRURGICKÉ MOŽNOSTI', description: '' },
        ],
        'neural-dysfunction': [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            {
                label: 'SUBSTITUCE/ STABILITA SLZNÉHO FILMU',
                description: 'VitA/B12/ kyselina askorbová',
            },
            { label: 'REGENERÁTORY OČNÍHO POVRCHU', description: 'Biologika' },
            { label: 'CHIRURGICKÉ MOŽNOSTI', description: 'Okluze slzných bodů' },
        ],
        'ocular-surface-cellular': [
            { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
            { label: 'PEROORÁLNÍ VÝŽIVA', description: 'Vitamín D3' },
            {
                label: 'SUBSTITUCE/ STABILITA SLZNÉHO FILMU',
                description: 'Kyselina Hyaluronová, trehalóza, xanthan, perfluorohexyloctane a HP-guar',
            },
            {
                label: 'FARMAKOLIGICKÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                description: 'Orální sekretagogy\nLokální sekretagogy\nFarmokologická neuromodulace',
            },
            {
                label: 'PŘÍSTROJOVÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                description:
                    'LLLT, QMR, Neurostimulace\nIPL, sondáž zařízení pro vnější ohřev víčka, lokální sekretagogy',
            },
            {
                label: 'TERAPIE MRKÁNÍ',
                description: 'Zařízení pro vnější ohřev víčka, lokální sekretagogy',
            },
            { label: 'LOKÁLNÍ HYGIENA VÍČEK', description: '' },
            { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: '' },
            { label: 'REGENERÁTORY OČNÍHO POVRCHU', description: 'Lubricin Biologika' },
            { label: 'CHIRURGICKÉ MOŽNOSTI', description: 'Okluze slzných bodů' },
        ],
        'primary-inflammation': [
            {
                label: 'PRIMÁRNÍ',
                description: '',
                subOptions: [
                    { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
                    { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: '' },
                    { label: 'REGENERÁTORY OČNÍHO POVRCHU', description: 'Amniová membrána' },
                ],
            },
            {
                label: 'SEKUNDÁRNÍ',
                description: '',
                subOptions: [
                    { label: 'DOPORUČENÍ OHLEDNĚ ŽIVOTNÍHO STYLU', description: 'K zvážení' },
                    { label: 'PEROORÁLNÍ VÝŽIVA', description: 'Omega 3, vitamín D3' },
                    {
                        label: 'SUBSTITUCE/ STABILITA SLZNÉHO FILMU',
                        description: 'Kyselina hyaluronová, selenoprotein P, Xanthan a HP-guar, sérum',
                    },
                    {
                        label: 'PROSTŘEDKY PRO ZACHOVÁNÍ SLZNÉHO FILMU',
                        description: 'Farmakologická stimulace',
                    },
                    {
                        label: 'FARMAKOLIGICKÁ STIMULACE/ OBNOVA SLZNÉHO FILMU',
                        description: 'Farmakologická neuromodulace',
                    },
                    { label: 'PŘÍSTROJOVÁ STIMULACE/ OBNOVA SLZNÉHO FILMU', description: 'IPL' },
                    { label: 'DEBRIDEMENT OKRAJŮ VÍČEK', description: '' },
                    { label: 'TERAPIE MRKÁNÍ', description: '' },
                    {
                        label: 'LOKÁLNÍ HYGIENA VÍČEK (NAPŘ. SNÍŽENÍ BAKTERIÁLNÍ ZÁTĚŽE)',
                        description: '',
                    },
                    { label: 'LOKÁLNÍ ANTIFLOGISTIKA', description: '' },
                    { label: 'REGENERÁTORY OČNÍHO POVRCHU', description: 'Amniová membrána' },
                    { label: 'CHIRURGICKÉ MOŽNOSTI', description: 'Okluze slzných bodů' },
                ],
            },
        ],
    },
}
