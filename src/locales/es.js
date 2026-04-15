// Spanish translations — sourced from "Dry Eye Management Map Translation (Spanish) 202604.xlsx"
// Keys marked [MISSING] have no Spanish translation in the spreadsheet and fall back to English.
// See docs/missing-translations-es.md for the full gap list to send to the client.
export default {
    nav: {
        tearFilmDeficiencies: 'DEFICIENCIAS DE LA PELÍCULA LAGRIMAL',
        lipid: 'Lípidos',
        aqueous: 'Acuoso',
        mucinGlycocalyx: 'Mucina / glicocálix',
        eyelidAnomalies: 'ANOMALÍAS PALPEBRALES',
        blinkLidClosure: 'Parpadeo / cierre palpebral',
        lidMargin: 'Borde palpebral',
        ocularSurfaceAbnormalities: 'ANOMALÍAS DE LA SUPERFICIE OCULAR',
        anatomicalMisalignment: 'Desalineación anatómica',
        neuralDysfunction: 'Disfunción neural',
        // Full text: "Daño / alteración celular de la superficie ocular"
        // Split position not confirmed in spreadsheet — see missing-translations-es.md
        ocularSurfaceCellularLine1: 'Daño / alteración celular',
        ocularSurfaceCellularLine2: 'de la superficie ocular',
        // Full text: "Inflamación primaria / estrés oxidativo"
        // Split position not confirmed in spreadsheet — see missing-translations-es.md
        primaryInflammationLine1: 'Inflamación primaria /',
        primaryInflammationLine2: 'estrés oxidativo',
        // Full text: "Cómo usar." from Intro Translation sheet
        // Split position not confirmed in spreadsheet — see missing-translations-es.md
        howToUseTabLine1: 'CÓMO',
        howToUseTabLine2: 'USAR',
        copyright: '© {year} Alcon Inc. GLBDEOH2600001', // [MISSING] kept in English per convention
    },
    diamonds: {
        dryEyeReliefLine1: 'ALIVIO DEL OJO',
        dryEyeReliefLine2: 'SECO Y MANEJO',
        tearFilmLine1: 'DEFICIENCIAS DE',
        tearFilmLine2: 'LA PELÍCULA<br />LAGRIMAL',
        eyelidLine1: 'ANOMALÍAS',
        eyelidLine2: 'PALPEBRALES',
        ocularLine1: 'ANOMALÍAS DE LA',
        ocularLine2: 'SUPERFICIE<br />OCULAR',
    },
    panel: {
        standardTesting: 'PRUEBAS ESTÁNDAR',
        advancedTesting: 'PRUEBAS AVANZADAS',
        management: 'MANEJO DE LA ENFERMEDAD DEL OJO SECO',
        previous: 'ANTERIOR',
        next: 'SIGUIENTE',
        email: 'EMAIL',
    },
    howToUse: {
        welcome: 'Bienvenido.',
        intro: 'El Mapa de Manejo del Ojo Seco genera técnicas de manejo aplicables basadas en la mitigación y la medición.',
        howToUseTitle: 'CÓMO UTILIZAR EL MAPA DE MANEJO DEL OJO SECO',
        step1: 'Primero, <strong>selecciona una categoría en la parte izquierda</strong>: Deficiencias de la película lagrimal, Anomalías palpebrales o Anomalías de la superficie ocular.',
        step2: 'Luego, <strong>selecciona una subcategoría</strong> dentro de la categoría principal seleccionada para clasificar más detalladamente el tipo de ojo seco. Puedes seleccionar múltiples subcategorías y usar los botones Siguiente/Anterior para desplazarte entre tus elecciones.',
        step3: 'Finalmente, <strong>selecciona las opciones preferidas de manejo de la enfermedad de ojo seco</strong> desde el menú emergente. Envía un informe a tu correo electrónico seleccionando el botón EMAIL en el menú emergente.',
    },
    boxes: {
        tearFilmDeficiencies: 'DEFICIENCIAS DE LA PELÍCULA LAGRIMAL',
        eyelidAnomalies: 'ANOMALÍAS PALPEBRALES',
        ocularSurfaceAbnormalities: 'ANOMALÍAS DE LA SUPERFICIE OCULAR',
        lipid: 'Lípidos',
        aqueous: 'Acuoso',
        mucinGlycocalyx: 'Mucina / glicocálix',
        blinkLidClosure: 'Parpadeo / cierre palpebral',
        lidMargin: 'Borde palpebral',
        anatomicalMisalignment: 'Desalineación anatómica',
        neuralDysfunction: 'Disfunción neural',
        ocularSurfaceCellular: 'Daño / alteración celular de la superficie ocular',
        primaryInflammation: 'Inflamación primaria / estrés oxidativo',
    },
    email: {
        title: 'Informe por correo electrónico',
        emailAddressLabel: 'Dirección de correo electrónico',
        emailPlaceholder: 'Introduce la dirección de correo electrónico',
        pxReferenceLabel: 'Referencia del paciente',
        pxReferenceOptional: '(opcional)',
        pxReferencePlaceholder: 'Introduce la referencia del paciente',
        pxReferenceError: 'Solo se permiten letras, números, espacios, guiones y guiones bajos',
        reportPreview: 'Vista previa del informe',
        noItems: 'No hay elementos seleccionados',
        emailSent: '¡Correo enviado!',
        emailSentConfirmation: 'Tu informe ha sido enviado a {email}',
        close: 'Cerrar',
        send: 'Enviar correo',
        sending: 'Enviando...',
        fromName: 'Herramienta de subtipificación de la enfermedad del ojo seco',
        subject: 'Tus resultados del Mapa de Manejo del Ojo Seco',
        pxReferencePrefix: 'Referencia del paciente: {ref}',
        header: {
            tearFilm: 'DEFICIENCIAS DE LA PELÍCULA LAGRIMAL:',
            eyelid: 'ANOMALÍAS PALPEBRALES:',
            ocular: 'ANOMALÍAS DE LA SUPERFICIE OCULAR:',
        },
    },
    config: {
        lipid: { category: 'DEFICIENCIAS DE LA PELÍCULA LAGRIMAL', title: 'LÍPIDO' },
        aqueous: { category: 'DEFICIENCIAS DE LA PELÍCULA LAGRIMAL', title: 'ACUOSO' },
        'mucin-glycocalyx': { category: 'DEFICIENCIAS DE LA PELÍCULA LAGRIMAL', title: 'MUCINA / GLICOCÁLIX' },
        'blink-lid-closure': { category: 'ANOMALÍAS PALPEBRALES', title: 'PARPADEO / CIERRE PALPEBRAL' },
        'lid-margin': { category: 'ANOMALÍAS PALPEBRALES', title: 'BORDE PALPEBRAL' },
        'anatomical-misalignment': {
            category: 'ANOMALÍAS DE LA SUPERFICIE OCULAR',
            title: 'DESALINEACIÓN ANATÓMICA',
        },
        'neural-dysfunction': {
            category: 'ANOMALÍAS DE LA SUPERFICIE OCULAR',
            title: 'DISFUNCIÓN NEURAL',
        },
        'ocular-surface-cellular': {
            category: 'ANOMALÍAS DE LA SUPERFICIE OCULAR',
            title: 'DAÑO CELULAR',
        },
        'primary-inflammation': {
            category: 'ANOMALÍAS DE LA SUPERFICIE OCULAR',
            title: 'INFLAMACIÓN',
        },
    },
    testing: {
        lipid: {
            standard: [
                {
                    name: 'INTERFEROMETRÍA',
                    description: 'grado ≤ 3 (patrón no amorfo o coloreado) o <72 nm en LipiView',
                },
                {
                    name: 'EXPRESIBILIDAD/CALIDAD DEL MEIBUM',
                    description: 'meibum no claro o expresibilidad limitada',
                },
            ],
            advanced: null,
        },
        aqueous: {
            standard: [
                {
                    name: 'MENISCOMETRÍA',
                    description: 'altura del menisco lagrimal ≤ 0,20 mm',
                },
            ],
            advanced: [
                {
                    name: 'MENISCOMETRÍA CON TIRA',
                    description: 'longitud de humectación de 2,5 mm',
                },
                {
                    name: 'PRUEBAS DE PROTEÍNAS LAGRIMALES Y OTROS COMPONENTES QUÍMICOS',
                },
            ],
        },
        'mucin-glycocalyx': {
            standard: [
                {
                    name: 'TINCIÓN CON ROSA DE BENGALA O VERDE LISAMINA',
                    description: '>9 puntos punteados',
                },
            ],
            advanced: [
                {
                    name: 'INMUNOHISTOQUÍMICA Y MICROSCOPÍA INMUNOELECTRÓNICA DE LA PELÍCULA LAGRIMAL',
                },
                {
                    name: 'CITOLOGÍA DE IMPRESIÓN',
                    description: 'densidad de células caliciformes y morfología epitelial',
                },
            ],
        },
        'blink-lid-closure': {
            standard: [
                {
                    name: 'OBSERVACIÓN DE PARPADEO PARCIAL',
                    description: '>40% de ocurrencia',
                },
                {
                    name: 'LAGOFTALMOS / SELLADO PALPEBRAL INADECUADO',
                    description: 'Observado',
                },
            ],
            advanced: null,
        },
        'lid-margin': {
            standard: [
                { name: 'OBSERVACIÓN DE BLEFARITIS ANTERIOR' },
                { name: 'DGM' },
            ],
            advanced: [
                {
                    name: 'MEIBOGRAFÍA',
                    description: 'Longitud glandular <75%',
                },
                {
                    name: 'OBSTRUCCIÓN GLANDULAR',
                    description: 'Observada',
                },
                {
                    name: 'TELANGIECTASIA',
                    description: 'Observada',
                },
                { name: 'EXPRESIBILIDAD GLANDULAR' },
            ],
        },
        'anatomical-misalignment': {
            standard: [{ name: 'BIOMICROSCOPÍA CON LÁMPARA DE HENDIDURA' }],
            advanced: [{ name: 'TOPOGRAFÍA CORNEAL' }],
        },
        'neural-dysfunction': {
            standard: [
                {
                    name: 'SENSACIÓN AL SOPLO O ESTÍMULO FÍSICO',
                    description:
                        'umbrales de sensibilidad corneal y del borde palpebral ≥0,8 mbar (aunque los instrumentos no son comparables)',
                },
            ],
            advanced: [
                {
                    name: 'MICROSCOPÍA CONFOCAL IN VIVO',
                    description:
                        'valores normativos disponibles para longitud, ramificación y densidad nerviosa',
                },
            ],
        },
        'ocular-surface-cellular': {
            standard: [
                {
                    name: 'TINCIÓN CORNEAL CON FLUORESCEÍNA',
                    description: '>5 manchas punteadas',
                },
                {
                    name: 'TINCIÓN CONJUNTIVAL CON VERDE LISAMINA',
                    description: '>9 manchas punteadas',
                },
                {
                    name: 'TINCIÓN DEL LID WIPER',
                    description: '>2 mm de longitud y 25% de anchura',
                },
            ],
            advanced: null,
        },
        'primary-inflammation': {
            standard: [
                {
                    name: 'HIPEREMIA CONJUNTIVAL BULBAR',
                    description: '>1,5 en escala Efron o >0,95 en la medición objetiva JENVIS',
                },
            ],
            advanced: [
                { name: 'MICROSCOPÍA CONFOCAL IN VIVO' },
                { name: 'PRUEBAS MOLECULARES DE LA PELÍCULA LAGRIMAL Y LA SUPERFICIE OCULAR' },
            ],
        },
    },
    management: {
        lipid: [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            { label: 'ESTABILIZACIÓN DE LA PELÍCULA LAGRIMAL', description: 'Lipomiméticos' },
            {
                label: 'DISPOSITIVOS DE CONSERVACIÓN DE LA LÁGRIMA',
                description: 'Gafas de cámara húmeda',
            },
            {
                label: 'ESTIMULACIÓN / RESTAURACIÓN FARMACOLÓGICA DE LA LÁGRIMA',
                description: 'Secretagogos tópicos',
            },
            {
                label: 'ESTIMULACIÓN / RESTAURACIÓN DE LA LÁGRIMA MEDIANTE DISPOSITIVOS',
                description: 'Calentamiento palpebral con dispositivos internos y externos; IPL; LLLT\nIPL\nCompresas calientes',
            },
            { label: 'TERAPIAS DE PARPADEO', description: '' },
            { label: 'ANTIINFLAMATORIOS TÓPICOS', description: 'Ciclosporina A' },
        ],
        aqueous: [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            { label: 'NUTRICIÓN ORAL', description: 'Omega 3' },
            { label: 'ESTABILIZACIÓN DE LA PELÍCULA LAGRIMAL', description: 'Lágrimas artificiales' },
            {
                label: 'DISPOSITIVOS DE CONSERVACIÓN DE LA LÁGRIMA',
                description: 'Gafas de cámara húmeda\nTapones lagrimales; lentes de contacto esclerales',
            },
            {
                label: 'ESTIMULACIÓN / RESTAURACIÓN FARMACOLÓGICA DE LA LÁGRIMA',
                description: 'Sulfuro de selenio\nNeuromodulación farmacológica / Secretagogos tópicos',
            },
            {
                label: 'ESTIMULACIÓN / RESTAURACIÓN DE LA LÁGRIMA MEDIANTE DISPOSITIVOS',
                description: 'Neuroestimulación\nLLLT',
            },
            { label: 'ANTIINFLAMATORIOS TÓPICOS', description: '' },
            { label: 'REGENERADORES DE LA SUPERFICIE OCULAR', description: 'Biológicos' },
            { label: 'OPCIONES QUIRÚRGICAS', description: '' },
        ],
        'mucin-glycocalyx': [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            { label: 'ESTIMULACIÓN / RESTAURACIÓN FARMACOLÓGICA DE LA LÁGRIMA', description: '' },
            { label: 'ESTIMULACIÓN / RESTAURACIÓN DE LA LÁGRIMA MEDIANTE DISPOSITIVOS', description: 'Neuroestimulación' },
            { label: 'ANTIINFLAMATORIOS TÓPICOS', description: '' },
        ],
        'blink-lid-closure': [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            { label: 'DISPOSITIVOS DE CONSERVACIÓN DE LA LÁGRIMA', description: 'Gafas de cámara húmeda' },
            { label: 'TERAPIAS DE PARPADEO', description: '' },
            { label: 'OPCIONES QUIRÚRGICAS', description: '' },
        ],
        'lid-margin': [
            {
                label: 'BLEFARITIS ANTERIOR',
                description: '',
                subOptions: [
                    { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
                    {
                        label: 'HIGIENE PALPEBRAL TÓPICA (p. ej., reducción de carga bacteriana)',
                        description: '',
                    },
                    { label: 'ANTIBIÓTICOS ORALES', description: '' },
                ],
            },
            {
                label: 'DGM (DISFUNCIÓN DE GLÁNDULAS DE MEIBOMIO)',
                description: '',
                subOptions: [
                    { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
                    { label: 'NUTRICIÓN ORAL', description: 'Omega 3\nVitamina D3' },
                    {
                        label: 'ESTABILIZACIÓN DE LA PELÍCULA LAGRIMAL',
                        description: 'Lipomiméticos',
                    },
                    {
                        label: 'ESTIMULACIÓN / RESTAURACIÓN FARMACOLÓGICA DE LA LÁGRIMA',
                        description: 'Azitromicina tópica; sulfuro de selenio',
                    },
                    {
                        label: 'ESTIMULACIÓN / RESTAURACIÓN DE LA LÁGRIMA MEDIANTE DISPOSITIVOS',
                        description: 'Calentamiento palpebral con dispositivos internos y externos; IPL; LLLT; QMR',
                    },
                    {
                        label: 'DESBRIDAMIENTO DEL BORDE PALPEBRAL',
                        description: 'Cuando existe queratinización significativa',
                    },
                    { label: 'TERAPIAS DE PARPADEO', description: '' },
                    { label: 'ANTIINFLAMATORIOS TÓPICOS', description: 'Ciclosporina A' },
                    { label: 'ANTIBIÓTICOS ORALES', description: '' },
                ],
            },
        ],
        'anatomical-misalignment': [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            { label: 'OPCIONES QUIRÚRGICAS', description: '' },
        ],
        'neural-dysfunction': [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            {
                label: 'ESTABILIZACIÓN DE LA PELÍCULA LAGRIMAL',
                description: 'Vitamina A / B12 / ácido ascórbico',
            },
            { label: 'REGENERADORES DE LA SUPERFICIE OCULAR', description: 'Biológicos' },
            { label: 'OPCIONES QUIRÚRGICAS', description: 'Oclusión puntal' },
        ],
        'ocular-surface-cellular': [
            { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
            { label: 'NUTRICIÓN ORAL', description: 'Vitamina D3' },
            {
                label: 'ESTABILIZACIÓN DE LA PELÍCULA LAGRIMAL',
                description: 'Ácido hialurónico, trehalosa, xantano, perfluorohexiloctano y HP-guar',
            },
            {
                label: 'ESTIMULACIÓN / RESTAURACIÓN FARMACOLÓGICA DE LA LÁGRIMA',
                description: 'Secretagogos orales\nSecretagogos tópicos\nNeuromodulación farmacológica',
            },
            {
                label: 'ESTIMULACIÓN / RESTAURACIÓN DE LA LÁGRIMA MEDIANTE DISPOSITIVOS',
                description: 'LLLT; QMR; Neuroestimulación\nIPL; sondaje\nCalentamiento palpebral mediante dispositivo externo; secretagogos tópicos',
            },
            {
                label: 'TERAPIAS DE PARPADEO',
                description: 'Calentamiento palpebral mediante dispositivo externo, secretagogos tópicos',
            },
            { label: 'HIGIENE PALPEBRAL TÓPICA', description: '' },
            { label: 'ANTIINFLAMATORIOS TÓPICOS', description: '' },
            { label: 'REGENERADORES DE LA SUPERFICIE OCULAR', description: 'Lubricina\nBiológicos' },
            { label: 'OPCIONES QUIRÚRGICAS', description: 'Oclusión puntal' },
        ],
        'primary-inflammation': [
            {
                label: 'PRIMARIO',
                description: '',
                subOptions: [
                    { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
                    { label: 'ANTIINFLAMATORIOS TÓPICOS', description: '' },
                    { label: 'REGENERADORES DE LA SUPERFICIE OCULAR', description: 'Membrana amniótica' },
                ],
            },
            {
                label: 'SECUNDARIO',
                description: '',
                subOptions: [
                    { label: 'RECOMENDACIONES DE ESTILO DE VIDA', description: 'A tener en cuenta' },
                    { label: 'NUTRICIÓN ORAL', description: 'Omega 3, Vitamina D3' },
                    {
                        label: 'ESTABILIZACIÓN DE LA PELÍCULA LAGRIMAL',
                        description: 'Ácido hialurónico, selenoproteína P, xantano y HP-guar, suero',
                    },
                    {
                        label: 'DISPOSITIVOS DE CONSERVACIÓN DE LA LÁGRIMA',
                        description: 'Modulación farmacológica',
                    },
                    {
                        label: 'ESTIMULACIÓN / RESTAURACIÓN FARMACOLÓGICA DE LA LÁGRIMA',
                        description: 'Neuromodulación farmacológica',
                    },
                    { label: 'ESTIMULACIÓN / RESTAURACIÓN DE LA LÁGRIMA MEDIANTE DISPOSITIVOS', description: 'IPL' },
                    { label: 'DESBRIDAMIENTO DEL BORDE PALPEBRAL', description: '' },
                    { label: 'TERAPIAS DE PARPADEO', description: '' },
                    {
                        label: 'HIGIENE PALPEBRAL TÓPICA (p. ej., reducción de carga bacteriana)',
                        description: '',
                    },
                    { label: 'ANTIINFLAMATORIOS TÓPICOS', description: '' },
                    { label: 'REGENERADORES DE LA SUPERFICIE OCULAR', description: 'Membrana amniótica' },
                    { label: 'OPCIONES QUIRÚRGICAS', description: 'Oclusión puntal' },
                ],
            },
        ],
    },
}
