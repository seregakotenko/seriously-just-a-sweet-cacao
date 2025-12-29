export const questions:{
    name: string,
    text?: string,
    question?: string,
    options?: {text: string, next: string}[],
    goto?: {text: string, next: string}
    end?: {text: string}
    showBackButton?: boolean
    showStartButton?: boolean
    showEndButton?: boolean
}[] = [
    {
        name: 'start',
        question: 'Що потрбіно для ідеального завершення дня?',
        options: [
            {text: 'Посмішка 🐱', next: 'smile'},
            {text: 'Щось смачненьке 🥞🤤', next: 'sweet-choose'},
            {text: 'Чашечка ароматного какао ☕', next: 'cacao'},
            {text: 'Ще попрацювати на благо фірми 🐎', next: 'working-end'},
            {text: 'Шашлик із мяса сніговика ☃️', next: 'shashlik'},
            {text: 'Залюбки, але хочу додомці', next: 'home'},
        ],
    },
    {
        name: 'home',
        text: 'Вибір є завжди',
        question: 'Вибір є завжди. Я поважаю твій вибір і простір. Мабуть зараз просто не найкращий час. Будемо на звязку',
        showStartButton: true,
        showBackButton: true,
        showEndButton: true,
    },
    {
        name: 'smile',
        text: 'Посмішка',
        question: 'Та ладно, а куштувати що будемо?',
        goto: {
            next: 'sweet-choose',
            text: 'Усміхнутись, повернутись і обрати смаколик'
        },
    },
    {
        name: 'cacao',
        text: 'Какао',
        question: 'Може все таки звичайне какао... чи поекспериментуємо?',
        options: [
            {text: 'Та ну його, живемо ж один раз, звичайно експерименти', next: 'cacao-experiment'},
            {text: 'Просте так просте... хочу просто посмакувати', next: 'cacao-regular'},
        ],
        showStartButton: true,
        showBackButton: true,
    },
    {
        name: 'cacao-experiment',
        text: 'Какао експеримент',
        end: {
            text: 'Гуд чойс, гуд чойс! Можливо ще щось?'
        },
        showStartButton: true,
        showBackButton: true,
        showEndButton: true,
    },
    {
        name: 'cacao-regular',
        text: 'Какао звичайне',
        end: {
            text: 'Гуд чойс, гуд чойс! Можливо ще щось?'
        },
        showStartButton: true,
        showBackButton: true,
        showEndButton: true,
    },
    {
        name: 'mlynci',
        text: 'Млинці',
        end: {
            text: 'Гуд чойс, гуд чойс!'
        },
        showStartButton: true,
    },
    {
        name: 'syrnichki',
        text: 'Сирнички',
        question: 'Зі сметанкою?',
        options: [
            {text: 'Єс', next: 'syrnichki-so-smetankoy'},
            {text: 'Ні, сироп давай', next: 'syrnichki-so-smiropom'},
        ],
        showBackButton: true,

    },
    {
        name: 'syrnichki-so-smetankoy',
        text: 'Сирнички зі сметанкою',
        end: {
            text: 'Поняв, прийняв'
        },
        showBackButton: true,
        showStartButton: true,
    },
    {
        name: 'syrnichki-so-smiropom',
        text: 'Сирнички із сиропом',
        end: {
            text: 'Гарний вибір'
        },
        showBackButton: true,
        showStartButton: true,
    },
    {
        name: 'sweet-choose',
        text: 'Смачненьке',
        question: 'Що до вподоби скуштувати?',
        options: [
            {text: 'Млинці', next: 'mlynci'},
            {text: 'Сирнички', next: 'syrnichki'},
            {text: 'Ще щость цікавеньке...', next: 'something-interesting'},
        ],
        showStartButton: true,
    },
    {
        name: 'something-interesting',
        end: {
            text: 'Ну ладно, оберемо щось з меню'
        },
        showBackButton: true,
        showStartButton: true,
        showEndButton: true,
    },
    {
        name: 'working-end',
        question: 'Слів нема... одні сльози',
        goto: {
            next: 'sweet-choose',
            text: 'Та ну ту роботу, хочу смаколик'
        }
    },
    {
        name: 'shashlik',
        text: 'Шашлик із мяса сніговика',
        question: 'Як хоч, я тобі на місці пожарю, а я буду сирнички',
        goto: {
            next: 'sweet-choose',
            text: 'Може тойво, замовити чогось людського?'
        },
    },
    {
        name: 'end',
        text: 'Квіз завершено',
        question: 'Квіз завершено, дані відправлено до штабу Пентагону для розбору і аналізу. Гарнющого тобі дня! )',
    }
];