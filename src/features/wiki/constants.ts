export const urls = {
    main: "/",
  };


export interface KnowlageItem {
    id: string,
    name: string,
    child: KnowlageItem[] | null,
    link: string,
    isCurrentUrl?: boolean;
}

const lawRegistrationList = [
    {
        id: '1',
        name: 'об ООО',
        child: null,
        link: '/llc'
    },
    {
        id: '2',
        name: 'про ОАО',
        child: null,
        link: '/jsc'
    },
    {
        id: '3',
        name: 'о ЗАО',
        child: null,
        link: '/cjsc'
    },
    {
        id: '4',
        name: 'про НКО',
        child: null,
        link: '/np'
    },
    {
        id: '5',
        name: 'об ИП',
        child: null,
        link: '/ie'
    },
]

const lawsList = [
    {
        id: '1',
        name: 'Процедура регистрации',
        child: lawRegistrationList,
        link: '/registration'
    },
    {
        id: '2',
        name: 'Выбор формы юридического лица',
        child: null,
        link: '/recomendations'
    },
    {
        id: '3',
        name: 'Ответственность учредителей',
        child: null,
        link: '/ceo-have-to'
    },
];

export const mockListItems = [
    {
        id: '1',
        name: 'Юридические аспекты',
        child: lawsList,
        link: '/law'
    },
    {
        id: '2',
        name: 'Истории успеха',
        child: null,
        link: '/brave'
    },
    {
        id: '3',
        name: 'Маркетинг и продвижение',
        child: null,
        link: '/seo'
    },
    {
        id: '4',
        name: 'Финансы',
        child: null,
        link: '/finance'
    },
    {
        id: '5',
        name: 'Полезные книги',
        child: null,
        link: '/books'
    },
]
