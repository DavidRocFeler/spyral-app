
interface IStreamProps { 
    id: number;
    session: string;
    review: string;
    lang: string;
}

export const streamData: IStreamProps[] = [
    {
        id: 1,
        session: '2hrs',
        review: '15min',
        lang: 'english'
    },
    {
        id: 2,
        session: '2hrs',
        review: '15min',
        lang: 'english'
    },
    {
        id: 3, 
        session: '2hrs',
        review: '15min',
        lang: 'español'
    },
    {
        id: 4, 
        session: '2hrs',
        review: '15min',
        lang: 'español'
    }
]
