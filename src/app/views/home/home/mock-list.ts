import { Campaign } from '../../../shared/class/campaign';

export const CAMPAIGN: any[] = [
    {
        id: 1001,
        name: 'Campaign lift',
        places: ['Bois-Colombes', 'IBMi',
            'Nice', 'Bordeaux',
            'Bruxelles'],
        sensors: [123, 124, 125, 126],
        question: 'Does this relaxing area well behalf its name ?',
        results: {
            one: 'Satisfied',
            two: 'I d\'ont care',
            three: 'Dissatisfied'
        },
        click: {
            one: 12,
            two: 123,
            three: 53
        }
    },
    {
        id: 1002, name: 'Campaign table',
        places: ['Bois-Colombes', 'IBMi',
            'Ecully', 'Nice', 'Bordeaux', 'Charbonnières',
            'Bruxelles', 'Biot', 'Toulouse'],
        sensors: [123, 124, 125, 126],
        question: 'Does this relaxing area well behalf its name ?',
        results: {
            one: 'Satisfied',
            two: 'I d\'ont care',
            three: 'Dissatisfied'
        },
        click: {
            one: 12,
            two: 123,
            three: 53
        }
    },
    { id: 1003, name: 'Campaign living place' },
    { id: 1004, name: 'Campaign market place' },
    { id: 1005, name: 'Campaign steps' },
    { id: 1006, name: 'Campaign hall' }
];
