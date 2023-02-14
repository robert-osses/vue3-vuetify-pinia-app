<script lang="ts" setup>import { computed, ref, watchEffect } from 'vue';

    import avatar1 from '@/assets/images/avatars/avatar-1.png'
    import avatar2 from '@/assets/images/avatars/avatar-2.png'
    import avatar3 from '@/assets/images/avatars/avatar-3.png'
    import avatar4 from '@/assets/images/avatars/avatar-4.png'
    import avatar5 from '@/assets/images/avatars/avatar-5.png'
    import avatar6 from '@/assets/images/avatars/avatar-6.png'
    import avatar7 from '@/assets/images/avatars/avatar-7.png'
    import avatar8 from '@/assets/images/avatars/avatar-8.png'

    
    // 👉 Store
    //const userListStore = useUserListStore()
    const searchQuery = ref('')
    const selectedRole = ref()
    const selectedPlan = ref()
    const selectedStatus = ref()
    const rowPerPage = ref(10)
    const currentPage = ref(1)
    const totalPage = ref(1)
    const totalUsers = ref(0)
    //const users = ref<UserProperties[]>([])

    // 👉 Fetching users

    // const fetchUsers = () => {
    // userListStore.fetchUsers({
    //     q: searchQuery.value,
    //     status: selectedStatus.value,
    //     plan: selectedPlan.value,
    //     role: selectedRole.value,
    //     perPage: rowPerPage.value,
    //     currentPage: currentPage.value,
    // }).then(response => {
    //     users.value = response.data.users
    //     totalPage.value = response.data.totalPage
    //     totalUsers.value = response.data.totalUsers
    // }).catch(error => {
    //     console.error(error)
    // })
    // }

    // watchEffect(fetchUsers)

    interface UserProperties {
        id: number
        fullName: string
        company: string
        role: string
        country: string
        contact: string
        email: string
        currentPlan: string
        status: string
        billing:string
        avatar: string
    }
    
    interface HeadersProperties {
        title: string
        key: string
        align?: string
        sortable?: boolean
    }
    
    const header: HeadersProperties[] = [
        { title: 'Nombre', key: 'fullName' },
        { title: 'Rol', key: 'role' },
        { title: 'Plan', key: 'currentPlan' },
        { title: 'Facturación', key: 'billing' },
        { title: 'estado', key: 'status' },
        { title: 'Acciones', key: 'actions', sortable: false },
    ]

    const users: UserProperties[] = [
    {
        id: 1,
        fullName: 'Galen Slixby',
        company: 'Yotz PVT LTD',
        role: 'editor',
        country: 'El Salvador',
        contact: '(479) 232-9151',
        email: 'gslixby0@abc.net.au',
        currentPlan: 'enterprise',
        status: 'inactive',
        billing: 'Auto Debit',
        avatar: avatar7,
    },
    {
        id: 2,
        fullName: 'Halsey Redmore',
        company: 'Skinder PVT LTD',
        role: 'author',
        country: 'Albania',
        contact: '(472) 607-9137',
        email: 'hredmore1@imgur.com',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar1,
        billing: 'Manual - Paypal',
    },
    {
        id: 3,
        fullName: 'Marjory Sicely',
        company: 'Oozz PVT LTD',
        role: 'maintainer',
        country: 'Russia',
        contact: '(321) 264-4599',
        email: 'msicely2@who.int',
        currentPlan: 'enterprise',
        status: 'active',
        avatar: avatar1,
        billing: 'Manual - Cash',
    },
    {
        id: 4,
        fullName: 'Cyrill Risby',
        company: 'Oozz PVT LTD',
        role: 'maintainer',
        country: 'China',
        contact: '(923) 690-6806',
        email: 'crisby3@wordpress.com',
        currentPlan: 'team',
        status: 'inactive',
        avatar: avatar3,
        billing: 'Manual - Credit Card',
    },
    {
        id: 5,
        fullName: 'Maggy Hurran',
        company: 'Aimbo PVT LTD',
        role: 'subscriber',
        country: 'Pakistan',
        contact: '(669) 914-1078',
        email: 'mhurran4@yahoo.co.jp',
        currentPlan: 'enterprise',
        status: 'pending',
        avatar: avatar1,
        billing: 'Auto Debit',
    },
    {
        id: 6,
        fullName: 'Silvain Halstead',
        company: 'Jaxbean PVT LTD',
        role: 'author',
        country: 'China',
        contact: '(958) 973-3093',
        email: 'shalstead5@shinystat.com',
        currentPlan: 'company',
        status: 'active',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 7,
        fullName: 'Breena Gallemore',
        company: 'Jazzy PVT LTD',
        role: 'subscriber',
        country: 'Canada',
        contact: '(825) 977-8152',
        email: 'bgallemore6@boston.com',
        currentPlan: 'company',
        status: 'pending',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 8,
        fullName: 'Kathryne Liger',
        company: 'Pixoboo PVT LTD',
        role: 'author',
        country: 'France',
        contact: '(187) 440-0934',
        email: 'kliger7@vinaora.com',
        currentPlan: 'enterprise',
        status: 'pending',
        avatar: avatar4,
        billing: 'Manual - Cash',
    },
    {
        id: 9,
        fullName: 'Franz Scotfurth',
        company: 'Tekfly PVT LTD',
        role: 'subscriber',
        country: 'China',
        contact: '(978) 146-5443',
        email: 'fscotfurth8@dailymotion.com',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar2,
        billing: 'Manual - Cash',
    },
    {
        id: 10,
        fullName: 'Jillene Bellany',
        company: 'Gigashots PVT LTD',
        role: 'maintainer',
        country: 'Jamaica',
        contact: '(589) 284-6732',
        email: 'jbellany9@kickstarter.com',
        currentPlan: 'company',
        status: 'inactive',
        avatar: avatar5,
        billing: 'Manual - Cash',
    },
    {
        id: 11,
        fullName: 'Jonah Wharlton',
        company: 'Eare PVT LTD',
        role: 'subscriber',
        country: 'United States',
        contact: '(176) 532-6824',
        email: 'jwharltona@oakley.com',
        currentPlan: 'team',
        status: 'inactive',
        avatar: avatar4,
        billing: 'Manual - Cash',
    },
    {
        id: 12,
        fullName: 'Seth Hallam',
        company: 'Yakitri PVT LTD',
        role: 'subscriber',
        country: 'Peru',
        contact: '(234) 464-0600',
        email: 'shallamb@hugedomains.com',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar5,
        billing: 'Manual - Cash',
    },
    {
        id: 13,
        fullName: 'Yoko Pottie',
        company: 'Leenti PVT LTD',
        role: 'subscriber',
        country: 'Philippines',
        contact: '(907) 284-5083',
        email: 'ypottiec@privacy.gov.au',
        currentPlan: 'basic',
        status: 'inactive',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 14,
        fullName: 'Maximilianus Krause',
        company: 'Digitube PVT LTD',
        role: 'author',
        country: 'Democratic Republic of the Congo',
        contact: '(167) 135-7392',
        email: 'mkraused@stanford.edu',
        currentPlan: 'team',
        status: 'active',
        avatar: avatar6,
        billing: 'Manual - Cash',
    },
    {
        id: 15,
        fullName: 'Zsazsa McCleverty',
        company: 'Kaymbo PVT LTD',
        role: 'maintainer',
        country: 'France',
        contact: '(317) 409-6565',
        email: 'zmcclevertye@soundcloud.com',
        currentPlan: 'enterprise',
        status: 'active',
        avatar: avatar2,
        billing: 'Manual - Cash',
    },
    {
        id: 16,
        fullName: 'Bentlee Emblin',
        company: 'Yambee PVT LTD',
        role: 'author',
        country: 'Spain',
        contact: '(590) 606-1056',
        email: 'bemblinf@wired.com',
        currentPlan: 'company',
        status: 'active',
        avatar: avatar6,
        billing: 'Manual - Cash',
    },
    {
        id: 17,
        fullName: 'Brockie Myles',
        company: 'Wikivu PVT LTD',
        role: 'maintainer',
        country: 'Poland',
        contact: '(553) 225-9905',
        email: 'bmylesg@amazon.com',
        currentPlan: 'basic',
        status: 'active',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 18,
        fullName: 'Bertha Biner',
        company: 'Twinte PVT LTD',
        role: 'editor',
        country: 'Yemen',
        contact: '(901) 916-9287',
        email: 'bbinerh@mozilla.com',
        currentPlan: 'team',
        status: 'active',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 19,
        fullName: 'Travus Bruntjen',
        company: 'Cogidoo PVT LTD',
        role: 'admin',
        country: 'France',
        contact: '(524) 586-6057',
        email: 'tbruntjeni@sitemeter.com',
        currentPlan: 'enterprise',
        status: 'active',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 20,
        fullName: 'Wesley Burland',
        company: 'Bubblemix PVT LTD',
        role: 'editor',
        country: 'Honduras',
        contact: '(569) 683-1292',
        email: 'wburlandj@uiuc.edu',
        currentPlan: 'team',
        status: 'inactive',
        avatar: avatar6,
        billing: 'Manual - Cash',
    },
    {
        id: 21,
        fullName: 'Selina Kyle',
        company: 'Wayne Enterprises',
        role: 'admin',
        country: 'USA',
        contact: '(829) 537-0057',
        email: 'irena.dubrovna@wayne.com',
        currentPlan: 'team',
        status: 'active',
        avatar: avatar1,
        billing: 'Manual - Cash',
    },
    {
        id: 22,
        fullName: 'Jameson Lyster',
        company: 'Quaxo PVT LTD',
        role: 'editor',
        country: 'Ukraine',
        contact: '(593) 624-0222',
        email: 'jlysterl@guardian.co.uk',
        currentPlan: 'company',
        status: 'inactive',
        avatar: avatar8,
        billing: 'Auto Debit',
    },
    {
        id: 23,
        fullName: 'Kare Skitterel',
        company: 'Ainyx PVT LTD',
        role: 'maintainer',
        country: 'Poland',
        contact: '(254) 845-4107',
        email: 'kskitterelm@ainyx.com',
        currentPlan: 'basic',
        status: 'pending',
        avatar: avatar3,
        billing: 'Manual - Cash',
    },
    {
        id: 24,
        fullName: 'Cleavland Hatherleigh',
        company: 'Flipopia PVT LTD',
        role: 'admin',
        country: 'Brazil',
        contact: '(700) 783-7498',
        email: 'chatherleighn@washington.edu',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar2,
        billing: 'Manual - Cash',
    },
    {
        id: 25,
        fullName: 'Adeline Micco',
        company: 'Topicware PVT LTD',
        role: 'admin',
        country: 'France',
        contact: '(227) 598-1841',
        email: 'amiccoo@whitehouse.gov',
        currentPlan: 'enterprise',
        status: 'pending',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 26,
        fullName: 'Hugh Hasson',
        company: 'Skinix PVT LTD',
        role: 'admin',
        country: 'China',
        contact: '(582) 516-1324',
        email: 'hhassonp@bizjournals.com',
        currentPlan: 'basic',
        status: 'inactive',
        avatar: avatar4,
        billing: 'Auto Debit',
    },
    {
        id: 27,
        fullName: 'Germain Jacombs',
        company: 'Youopia PVT LTD',
        role: 'editor',
        country: 'Zambia',
        contact: '(137) 467-5393',
        email: 'gjacombsq@jigsy.com',
        currentPlan: 'enterprise',
        status: 'active',
        avatar: avatar5,
        billing: 'Auto Debit',
    },
    {
        id: 28,
        fullName: 'Bree Kilday',
        company: 'Jetpulse PVT LTD',
        role: 'maintainer',
        country: 'Portugal',
        contact: '(412) 476-0854',
        email: 'bkildayr@mashable.com',
        currentPlan: 'team',
        status: 'active',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 29,
        fullName: 'Candice Pinyon',
        company: 'Kare PVT LTD',
        role: 'maintainer',
        country: 'Sweden',
        contact: '(170) 683-1520',
        email: 'cpinyons@behance.net',
        currentPlan: 'team',
        status: 'active',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 30,
        fullName: 'Isabel Mallindine',
        company: 'Voomm PVT LTD',
        role: 'subscriber',
        country: 'Slovenia',
        contact: '(332) 803-1983',
        email: 'imallindinet@shinystat.com',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 31,
        fullName: 'Gwendolyn Meineken',
        company: 'Oyondu PVT LTD',
        role: 'admin',
        country: 'Moldova',
        contact: '(551) 379-7460',
        email: 'gmeinekenu@hc360.com',
        currentPlan: 'basic',
        status: 'pending',
        avatar: avatar1,
        billing: 'Auto Debit',
    },
    {
        id: 32,
        fullName: 'Rafaellle Snowball',
        company: 'Fivespan PVT LTD',
        role: 'editor',
        country: 'Philippines',
        contact: '(974) 829-0911',
        email: 'rsnowballv@indiegogo.com',
        currentPlan: 'basic',
        status: 'pending',
        avatar: avatar5,
        billing: 'Auto Debit',
    },
    {
        id: 33,
        fullName: 'Rochette Emer',
        company: 'Thoughtworks PVT LTD',
        role: 'admin',
        country: 'North Korea',
        contact: '(841) 889-3339',
        email: 'remerw@blogtalkradio.com',
        currentPlan: 'basic',
        status: 'active',
        avatar: avatar8,
        billing: 'Manual - Paypal',
    },
    {
        id: 34,
        fullName: 'Ophelie Fibbens',
        company: 'Jaxbean PVT LTD',
        role: 'subscriber',
        country: 'Indonesia',
        contact: '(764) 885-7351',
        email: 'ofibbensx@booking.com',
        currentPlan: 'company',
        status: 'active',
        avatar: avatar4,
        billing: 'Manual - Paypal',
    },
    {
        id: 35,
        fullName: 'Stephen MacGilfoyle',
        company: 'Browseblab PVT LTD',
        role: 'maintainer',
        country: 'Japan',
        contact: '(350) 589-8520',
        email: 'smacgilfoyley@bigcartel.com',
        currentPlan: 'company',
        status: 'pending',
        avatar: avatar7,
        billing: 'Manual - Paypal',
    },
    {
        id: 36,
        fullName: 'Bradan Rosebotham',
        company: 'Agivu PVT LTD',
        role: 'subscriber',
        country: 'Belarus',
        contact: '(882) 933-2180',
        email: 'brosebothamz@tripadvisor.com',
        currentPlan: 'team',
        status: 'inactive',
        avatar: avatar7,
        billing: 'Manual - Paypal',
    },
    {
        id: 37,
        fullName: 'Skip Hebblethwaite',
        company: 'Katz PVT LTD',
        role: 'admin',
        country: 'Canada',
        contact: '(610) 343-1024',
        email: 'shebblethwaite10@arizona.edu',
        currentPlan: 'company',
        status: 'inactive',
        avatar: avatar1,
        billing: 'Manual - Paypal',
    },
    {
        id: 38,
        fullName: 'Moritz Piccard',
        company: 'Twitternation PVT LTD',
        role: 'maintainer',
        country: 'Croatia',
        contact: '(365) 277-2986',
        email: 'mpiccard11@vimeo.com',
        currentPlan: 'enterprise',
        status: 'inactive',
        avatar: avatar1,
        billing: 'Auto Debit',
    },
    {
        id: 39,
        fullName: 'Tyne Widmore',
        company: 'Yombu PVT LTD',
        role: 'subscriber',
        country: 'Finland',
        contact: '(531) 731-0928',
        email: 'twidmore12@bravesites.com',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar7,
        billing: 'Manual - Credit Card',
    },
    {
        id: 40,
        fullName: 'Florenza Desporte',
        company: 'Kamba PVT LTD',
        role: 'author',
        country: 'Ukraine',
        contact: '(312) 104-2638',
        email: 'fdesporte13@omniture.com',
        currentPlan: 'company',
        status: 'active',
        avatar: avatar6,
        billing: 'Manual - Credit Card',
    },
    {
        id: 41,
        fullName: 'Edwina Baldetti',
        company: 'Dazzlesphere PVT LTD',
        role: 'maintainer',
        country: 'Haiti',
        contact: '(315) 329-3578',
        email: 'ebaldetti14@theguardian.com',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar7,
        billing: 'Manual - Cash',
    },
    {
        id: 42,
        fullName: 'Benedetto Rossiter',
        company: 'Mybuzz PVT LTD',
        role: 'editor',
        country: 'Indonesia',
        contact: '(323) 175-6741',
        email: 'brossiter15@craigslist.org',
        currentPlan: 'team',
        status: 'inactive',
        avatar: avatar7,
        billing: 'Manual - Credit Card',
    },
    {
        id: 43,
        fullName: 'Micaela McNirlan',
        company: 'Tambee PVT LTD',
        role: 'admin',
        country: 'Indonesia',
        contact: '(242) 952-0916',
        email: 'mmcnirlan16@hc360.com',
        currentPlan: 'basic',
        status: 'inactive',
        avatar: avatar7,
        billing: 'Manual - Credit Card',
    },
    {
        id: 44,
        fullName: 'Vladamir Koschek',
        company: 'Centimia PVT LTD',
        role: 'author',
        country: 'Guatemala',
        contact: '(531) 758-8335',
        email: 'vkoschek17@abc.net.au',
        currentPlan: 'team',
        status: 'active',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 45,
        fullName: 'Corrie Perot',
        company: 'Flipopia PVT LTD',
        role: 'subscriber',
        country: 'China',
        contact: '(659) 385-6808',
        email: 'cperot18@goo.ne.jp',
        currentPlan: 'team',
        status: 'pending',
        avatar: avatar3,
        billing: 'Manual - Paypal',
    },
    {
        id: 46,
        fullName: 'Saunder Offner',
        company: 'Skalith PVT LTD',
        role: 'maintainer',
        country: 'Poland',
        contact: '(200) 586-2264',
        email: 'soffner19@mac.com',
        currentPlan: 'enterprise',
        status: 'pending',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 47,
        fullName: 'Karena Courtliff',
        company: 'Feedfire PVT LTD',
        role: 'admin',
        country: 'China',
        contact: '(478) 199-0020',
        email: 'kcourtliff1a@bbc.co.uk',
        currentPlan: 'basic',
        status: 'active',
        avatar: avatar1,
        billing: 'Manual - Credit Card',
    },
    {
        id: 48,
        fullName: 'Onfre Wind',
        company: 'Thoughtmix PVT LTD',
        role: 'admin',
        country: 'Ukraine',
        contact: '(344) 262-7270',
        email: 'owind1b@yandex.ru',
        currentPlan: 'basic',
        status: 'pending',
        avatar: avatar7,
        billing: 'Manual - Credit Card',
    },
    {
        id: 49,
        fullName: 'Paulie Durber',
        company: 'Babbleblab PVT LTD',
        role: 'subscriber',
        country: 'Sweden',
        contact: '(694) 676-1275',
        email: 'pdurber1c@gov.uk',
        currentPlan: 'team',
        status: 'inactive',
        avatar: avatar7,
        billing: 'Auto Debit',
    },
    {
        id: 50,
        fullName: 'Beverlie Krabbe',
        company: 'Kaymbo PVT LTD',
        role: 'editor',
        country: 'China',
        contact: '(397) 294-5153',
        email: 'bkrabbe1d@home.pl',
        currentPlan: 'company',
        status: 'active',
        avatar: avatar2,
        billing: 'Manual - Credit Card',
    },
    ]



    // 👉 watching current page
    watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value
    })

    // 👉 search filters
    const roles = [
        { title: 'Admin', value: 'admin' },
        { title: 'Author', value: 'author' },
        { title: 'Editor', value: 'editor' },
        { title: 'Maintainer', value: 'maintainer' },
        { title: 'Subscriber', value: 'subscriber' },
    ]

    const plans = [
        { title: 'Basic', value: 'basic' },
        { title: 'Company', value: 'company' },
        { title: 'Enterprise', value: 'enterprise' },
        { title: 'Team', value: 'team' },
    ]

    const status = [
        { title: 'Pending', value: 'pending' },
        { title: 'Active', value: 'active' },
        { title: 'Inactive', value: 'inactive' },
    ]

    const resolveUserRoleVariant = (role: string) => {
        if (role === 'subscriber')
            return { color: 'warning', icon: 'mdi-account' }
        if (role === 'author')
            return { color: 'success', icon: 'mdi-check' }
        if (role === 'maintainer')
            return { color: 'primary', icon: 'mdi-pie' }
        if (role === 'editor')
            return { color: 'info', icon: 'mdi-pencil' }
        if (role === 'admin')
            return { color: 'secondary', icon: 'mdi-laptop' }

        return { color: 'primary', icon: 'mdi-account' }
    }

    const resolveUserStatusVariant = (stat: string) => {
        if (stat === 'pending')
            return 'warning'
        if (stat === 'active')
            return 'success'
        if (stat === 'inactive')
            return 'secondary'

        return 'primary'
    }

    const isAddNewUserDrawerVisible = ref(false)

    // 👉 watching current page
    watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value
    })

    // 👉 Computing pagination data
    const paginationData = computed(() => {
        const firstIndex = users.length ? ((currentPage.value - 1) * rowPerPage.value) + 1 : 0
        const lastIndex = users.length + ((currentPage.value - 1) * rowPerPage.value)

        return `Showing ${firstIndex} to ${lastIndex} of ${totalUsers.value} entries`
    })

    // 👉 Add new user
    // const addNewUser = (userData: UserProperties) => {
    // userListStore.addUser(userData)

    // refetch User
    // fetchUsers()
    // }

    // 👉 List
    const userListMeta = [
    {
        icon: 'mdi-account',
        color: 'primary',
        title: 'Session',
        stats: '21,459',
        percentage: +29,
        subtitle: 'Total Users',
    },
    {
        icon: 'mdi-account-cash',
        color: 'info',
        title: 'Paid Users',
        stats: '4,567',
        percentage: +18,
        subtitle: 'Last week analytics',
    },
    {
        icon: 'mdi-account-check',
        color: 'success',
        title: 'Active Users',
        stats: '19,860',
        percentage: -14,
        subtitle: 'Last week analytics',
    },
    {
        icon: 'mdi-account-alert',
        color: 'warning',
        title: 'Pending Users',
        stats: '237',
        percentage: +42,
        subtitle: 'Last week analytics',
    },
    ]
</script>

<template>
    <section>
        <v-row>
            <v-col
                v-for="meta in userListMeta"
                :key="meta.title"
                cols="12" sm="6" lg="3"
            >
                <v-card>
                    <v-card-text class="d-flex justify-space-between">
                        <div>
                            <span>{{ meta.title }}</span>
                            <div class="d-flex align-center gap-2 my-1">
                                <h6 class="text-h6 mr-2">
                                    {{ meta.stats }}
                                </h6>
                                <span :class="meta.percentage > 0 ? 'text-success' : 'text-error'">({{ meta.percentage }}%)</span>
                            </div>
                            <span>{{ meta.subtitle }}</span>
                        </div>
                        
                        <v-avatar
                            rounded
                            variant="tonal"
                            :color="meta.color"
                            :icon="meta.icon"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
            
            <v-col cols="12">
                <v-card title="Search Filter">
                    <!-- 👉 Filters -->
                    <v-card-text>
                        <v-row>
                            <!-- 👉 Select Role -->
                            <v-col cols="12" sm="4">
                                <v-select
                                    v-model="selectedRole"
                                    label="Select Role"
                                    :items="roles"
                                    clearable
                                    clear-icon="mdi-close"
                                />
                            </v-col>
                            <!-- 👉 Select Plan -->
                            <v-col cols="12" sm="4">
                                <v-select
                                    v-model="selectedPlan"
                                    label="Select Plan"
                                    :items="plans"
                                    clearable
                                    clear-icon="mdi-close"
                                />
                            </v-col>
                            <!-- 👉 Select Status -->
                            <v-col cols="12"  sm="4">
                                <v-select
                                    v-model="selectedStatus"
                                    label="Select Status"
                                    :items="status"
                                    clearable
                                    clear-icon="mdi-close"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
        
                    <v-divider />
        
                    <v-card-text class="d-flex flex-wrap py-4 gap-4">
                        <v-col cols="12" sm="2" lg="1">
                            <v-select
                                v-model="rowPerPage"
                                density="compact"
                                variant="outlined"
                                :items="[10, 20, 30, 50]"
                            />
                        </v-col>
                        
                        <v-spacer />
                        
                        <v-col cols="12" sm="8" lg="6">
                            <v-row class="d-flex text-center flex-wrap">
                                <!-- 👉 Search  -->
                                <v-col cols="12" sm="6" lg="6">
                                    <v-text-field
                                        v-model="searchQuery"
                                        placeholder="Search"
                                        density="compact"
                                        append-inner-icon="mdi-magnify"
                                    />
                                </v-col>
                                
                                <!-- 👉 Export button -->
                                <v-col cols="6" sm="3">
                                    <v-btn
                                        variant="tonal"
                                        color="secondary"
                                        prepend-icon="mdi-share"
                                        width="100%"
                                        disabled
                                    >
                                    <span class="d-lg-none">Exp</span>
                                        <span class="d-none d-lg-block">Export</span>
                                    </v-btn>
                                </v-col>
                            
                                <!-- 👉 Add user button -->
                                <v-col cols="6" sm="3" lg="3">
                                    <v-btn
                                        color="primary"
                                        prepend-icon="mdi-plus"
                                        @click="isAddNewUserDrawerVisible = true"
                                        width="100%"
                                    >
                                    <span class="d-lg-none">Add</span>
                                    <span class="d-none d-lg-block">Add New User</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        
                    </v-card-text>

                    <v-divider />

                    <v-table class="text-no-wrap">
                        <!-- 👉 table head -->
                        <thead>
                            <tr>
                                <th scope="col">
                                    USER
                                </th>
                                <th scope="col">
                                    ROLE
                                </th>
                                <th scope="col">
                                    PLAN
                                </th>
                                <th scope="col">
                                    BILLING
                                </th>
                                <th scope="col">
                                    STATUS
                                </th>
                                <th scope="col">
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>
                        <!-- 👉 table body -->
                        <tbody>
                            <tr
                                v-for="user in users"
                                :key="user.id"
                                style="height: 3.75rem;"
                            >
                                <!-- 👉 User -->
                                <td>
                                    <div class="d-flex align-center">
                                        <v-avatar
                                            variant="tonal"
                                            :color="resolveUserRoleVariant(user.role).color"
                                            class="me-3"
                                            size="38"
                                            >
                                            <v-img
                                            v-if="user.avatar"
                                            :src="user.avatar"
                                        />
                                            <span v-else>{{ user.fullName }}</span>
                                        </v-avatar>
                                        
                                        <div class="d-flex flex-column">
                                            <h6 class="text-base">
                                                {{ user.fullName }}
                                            </h6>
                                            <span class="text-sm text-disabled">@{{ user.email }}</span>
                                        </div>
                                    </div>
                                </td>

                                <!-- 👉 Role -->
                                <td>
                                    <v-avatar
                                    :color="resolveUserRoleVariant(user.role).color"
                                    :icon="resolveUserRoleVariant(user.role).icon"
                                    variant="tonal"
                                    size="30"
                                    class="me-4"
                                    />
                                    <span class="text-capitalize text-base">{{ user.role }}</span>
                                </td>

                                <!-- 👉 Plan -->
                                <td>
                                    <span class="text-capitalize text-base font-weight-semibold">{{ user.currentPlan }}</span>
                                </td>

                                <!-- 👉 Billing -->
                                <td>
                                    <span class="text-base">{{ user.billing }}</span>
                                </td>

                                <!-- 👉 Status -->
                                <td>
                                    <VChip
                                    label
                                    :color="resolveUserStatusVariant(user.status)"
                                    size="small"
                                    class="text-capitalize"
                                    >
                                    {{ user.status }}
                                </VChip>
                                </td>

                                <!-- 👉 Actions -->
                                <td
                                    class="text-center"
                                    style="width: 5rem;"
                                >
                                    <v-btn icon size="x-small" color="default" variant="text" >
                                        <v-icon size="22" icon="mdi-pencil" />
                                    </v-btn>

                                    <v-btn icon size="x-small" color="default" variant="text" >
                                        <v-icon size="22" icon="mdi-trash-can" />
                                    </v-btn>

                                    <v-btn icon size="x-small" color="default" variant="text" >
                                        <v-icon size="22" icon="mdi-dots-vertical" />
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>

                        <!-- 👉 table footer  -->
                        <tfoot v-show="!users.length">
                            <tr>
                                <td
                                colspan="7"
                                class="text-center"
                                >
                                No data available
                            </td>
                        </tr>
                        </tfoot>
                    </v-table>

                    <v-divider />

                    <v-card-text class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
                        <span class="text-sm text-disabled">
                            {{ paginationData }}
                        </span>
                        
                        <v-pagination
                            v-model="currentPage"
                            size="small"
                            :total-visible="5"
                            :length="totalPage"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- 👉 Add New User -->
        <!-- <AddNewUserDrawer
            v-model:isDrawerOpen="isAddNewUserDrawerVisible"
            @user-data="addNewUser"
        /> -->
    </section>
</template>

<style>
.text-capitalize {
    text-transform: capitalize;
}

.user-list-name:not(:hover) {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.v-card {
    transition-duration: 0ms !important;
}
</style>