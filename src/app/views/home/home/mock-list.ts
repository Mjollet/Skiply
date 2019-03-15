import { Campaign } from '../../../shared/class/campaign';

export const CAMPAIGN: any[] = [
    {
        id: 1001,
        name: 'Campaign lift',
        places: ['Paris', 'New York'],
        sensors: [123, 124, 125, 126],
        question: 'Comment ca va ?',
        results: {
            one: 'ok',
            two: 'idc',
            three: 'bad'
        },
        click: {
            one: 12,
            two: 123,
            three: 53
        }
    },
    { id: 1002, name: 'Campaign table' },
    { id: 1003, name: 'Campaign living place' },
    { id: 1004, name: 'Campaign market place' },
    { id: 1005, name: 'Campaign steps' },
    { id: 1006, name: 'Campaign hall' }
];
