const Pages = {
    'fr/faq':{
        'title': 'CIA - Faq',
    },
    'fr/terms-and-conditions':{
        'title': 'CIA - Terms and conditions',
    },
    'fr/services':{
        'title': 'CIA - Services',
    },
    'fr/trainings-and-certifications':{
        'title': 'CIA - Trainings and certifications',
    },
    'fr/article':{
        'title': 'CIA - Article',
    },
    'fr/about':{
        'title': 'CIA - About',
    },
    'fr/home':{
        'title': 'CIA - Home',
    },
    'fr/blog':{
        'title': 'CIA - Blog',
    },
    'fr/trainings-and-certifications/training-service':{
        'title': 'CIA - Training service',
    },
    'fr/trainings-and-certifications/trainings':{
        'title': 'CIA - Trainings',
    },
    'fr/trainings-and-certifications/certification-training':{
        'title': 'CIA - Certification training',
    },
    'fr/services/digital-transformation-consulting':{
        'title': 'CIA - Digital transformation consulting',
    },
    'fr/services/web-marketing':{
        'title': 'CIA - Web marketing',
    },
    'fr/services/mobile-web-custom-application-development':{
        'title': 'CIA - Mobile web custom application development',
    },
    'fr/services/search-engine-optimization':{
        'title': 'CIA - Search engine optimization',
    },
    'fr/services/it-solution-consulting':{
        'title': 'CIA - It solution consulting',
    },
    'fr/contacts':{
        'title': 'CIA - Contacts',
    },
    'en/faq':{
        'title': 'CIA - Faq',
    },
    'en/terms-and-conditions':{
        'title': 'CIA - Terms and conditions',
    },
    'en/services':{
        'title': 'CIA - Services',
    },
    'en/trainings-and-certifications':{
        'title': 'CIA - Trainings and certifications',
    },
    'en/article':{
        'title': 'CIA - Article',
    },
    'en/about':{
        'title': 'CIA - About',
    },
    'en/home':{
        'title': 'CIA - Home',
    },
    'en/blog':{
        'title': 'CIA - Blog',
    },
    'en/trainings-and-certifications/training-service':{
        'title': 'CIA - Training service',
    },
    'en/trainings-and-certifications/trainings':{
        'title': 'CIA - Trainings',
    },
    'en/trainings-and-certifications/certification-training':{
        'title': 'CIA - Certification training',
    },
    'en/maintenace':{
        'title': 'CIA - Maintenace',
    },
    'en/services/digital-transformation-consulting':{
        'title': 'CIA - Digital transformation consulting',
    },
    'en/services/web-marketing':{
        'title': 'CIA - Web marketing',
    },
    'en/services/mobile-web-custom-application-development':{
        'title': 'CIA - Mobile web custom application development',
    },
    'en/services/search-engine-optimization':{
        'title': 'CIA - Search engine optimization',
    },
    'en/services/it-solution-consulting':{
        'title': 'CIA - It solution consulting',
    },
    'en/contacts':{
        'title': 'CIA - Contacts',
    },
    'fr/blog/services':{
        'title': 'CIA - Services',
    },
    'fr/blog/services/search-engine-optimization':{
        'title': 'CIA - Search engine optimization',
    },
    'fr/blog/services/training':{
        'title': 'CIA - Training',
    },
    'fr/blog/services/app_web_mobile':{
        'title': 'CIA - App web mobile',
    },
    'fr/blog/services/it_solution':{
        'title': 'CIA - It solution',
    },
    'fr/blog/services/web_marketing':{
        'title': 'CIA - Web marketing',
    },
    'fr/blog/training':{
        'title': 'CIA - Training',
    },
    'fr/blog/training/initiation-au-traitement-de-texte-avec-ms-word':{
        'title': 'CIA - Initiation au traitement de texte avec ms word',
    },
    'fr/blog/training/traitement-de-texte-avec-ms-word-avance':{
        'title': 'CIA - Traitement de texte avec ms word avance',
    },
    'fr/blog/training/initiation-au-tableur-avec-ms-excel':{
        'title': 'CIA - Initiation au tableur avec ms excel',
    },
    'fr/blog/training/tableur-avec-ms-excel-avance':{
        'title': 'CIA - Tableur avec ms excel avance',
    },
    'fr/blog/training/secretariat-bureautique':{
        'title': 'CIA - Secretariat bureautique',
    },
    'fr/blog/training/design-graphique':{
        'title': 'CIA - Design graphique',
    },
    'fr/blog/training/developpement-mobile-android':{
        'title': 'CIA - Developpement mobile android',
    },
    'fr/blog/training/developpement-de-sites-web':{
        'title': 'CIA - Developpement de sites web',
    },
    'fr/blog/les-profils-it-les-plus-demandees-en-2022':{
        'title': 'CIA - Les profils it les plus demandees en 2022',
    },
    'fr/post/app_web_mobile':{
        'title': 'CIA - App web mobile',
    },
};

function hasSlug(pages, slug){
    return pages.hasOwnProperty(slug);
}

 function titleBySlug(slug){
    let title = Pages[slug].title;
    if(title){
        return title;
    }else{
        return 'CIA - Welcome';
    }
 }
  const langs = [
    'fr',
    'en'
  ];

  const requirePage =(path) => {
    return require(`../pages/${path}.js`).default;
}

const getPage = (slug, lang = 'en') => {
    if( hasSlug(Pages, slug)){
        return requirePage(slug);
    }else{
        const langPath = `${lang}/${slug}`;
        if( hasSlug(Pages, langPath)){
            return requirePage(langPath);
        }else{
            for (let index in langs) {
                const lg = langs[index];
                const fallbackPat = `${lg}/${slug}`;
                if( hasSlug(Pages, fallbackPat)){
                    return requirePage(fallbackPat);
                }
            }
        }
    }
    // Fallback path
    return requirePage(`${lang}/404`);
 }

 const getTitle = (slug, lang = 'en') => {
    if( hasSlug(Pages, slug)){
        return titleBySlug(slug);
    }else{
        const langPath = `${lang}/${slug}`;
        if( hasSlug(Pages, langPath)){
            return titleBySlug(langPath);
        }else{
            for (let index in langs) {
                const lg = langs[index];
                const fallbackPat = `${lg}/${slug}`;
                if( hasSlug(Pages, fallbackPat)){
                    return titleBySlug(fallbackPat);
                }
            }
        }
    }
    return 'CIA - Welcome';
 }

 function getUrls(){
    return Object.keys(Pages);
 }

  export {Pages, getPage, getTitle, getUrls}