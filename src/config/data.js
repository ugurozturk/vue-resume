export default {
    Brief: {
        name: 'Uğur Öztürk',
        position: 'Full stack developer',
        location: 'İstanbul, TÜRKİYE',
        sex: 'Erkek',
        age: 27
    },
    Contact: [
        { icon: require('@/assets/contact-phone.png'), key: 'phone', value: '507*******' },
        { icon: require('@/assets/contact-mail.png'), key: 'mail', value: 'mail@uozturk.com' }
    ],
    Social: [
        { icon: require('@/assets/social-github.png'), key: 'github', value: 'github.com/ugurozturk' }
    ],
    Skill: [
        { icon: require('@/assets/csharp.png'), key: 'csharp', value: 'C#' },
        { icon: require('@/assets/wcf.png'), key: 'wcf', value: 'Wcf Services' },
        { icon: require('@/assets/skill-mongo.png'), key: 'mvc', value: 'Mvc' },
        { icon: require('@/assets/javascript.png'), key: 'javascript', value: 'Javascript' },
        { icon: require('@/assets/skill-vue.png'), key: 'vue', value: 'Vue' },
        { icon: require('@/assets/angular.png'), key: 'angular', value: 'Angular' },
        { icon: require('@/assets/typescript.png'), key: 'typescript', value: 'Typescript' },
        { icon: require('@/assets/electron.png'), key: 'electron', value: 'Electron Framework' },
        { icon: require('@/assets/sql.png'), key: 'mssql', value: 'MsSql' },
        { icon: require('@/assets/sql.png'), key: 'plsql', value: 'PLSQL' },
        { icon: require('@/assets/bootstrap.png'), key: 'bootstrap', value: 'Bootstrap' },
        { icon: require('@/assets/skill-vue.png'), key: 'vuetify', value: 'Vuetify' }
    ],
    AboutMe: `
        Farklı uygulamalar geliştirmeyi severim. Zamanımı farklı yenilikler öğrenerek geçirmeyi severim. Benim Vcard ıma gönlünüzce bakınabilirsiniz
    `,
    Education: [
        { school: 'Cumhuriyet Üniversitesi', major: 'YBS', date: '2013-2017', description: '' }
    ],
    WorkingExperience: [
        {
            company: 'EnPOS Bilişim Sanayi Ve Ticaret A.Ş.',
            position: 'Software Developer',
            date: '2014-2016',
            description: `
                Teknik Servis projesi üzerinde 2 yıl boyunca geliştirmesiyle ve bakımıyla ilgilendim. 
                Üretim takibi + Teknik Servis e gelişinin takibi otomizasyon şeklinde ilerleyen bir proje.
            `
        },
        {
            company: 'AcerPro Bilişim Teknolojileri A.Ş.',
            position: 'Software Developer',
            date: '2018-2019',
            description: `
                Acerpro bünyesinde Vakıf Katılım bankasının sigorta şirketleriyle bağlantısının 
                kurulabildiği projede sigorta ürünlerinin satışını ve raporlanmasını sağlayan projedeydim.
            `
        },
        {
            company: 'Axa Sigorta',
            position: 'Software Developer',
            date: '2019',
            description: `
                Kafein Yazılım bünyesinde, Outsource olarak başladım. 7 Ay bu şekilde çalıştıktan sonra Kadroya geçtim.
            `
        }
    ]
}
