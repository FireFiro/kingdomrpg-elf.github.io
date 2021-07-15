var role = [
    {
        "category": "<span>Управленчиская ветка</span>",
        "name": "<span>Король</span>",
        "image": "./img/Icon/king.png",
        "description": "Лидер расы<br>Управляет государством, назначает на должности.<br>Определяет политику государства.",
        "mechanics": "● Возможность назначать подданных на роли<br>● Объявление войны с помощью команды /war<br>● Назначает Наместников, Хранителя, Лордов, Древних<br>● Имеет возможности Наместника в том числе.<br>(Может носить броню 3 тира, королевское оружие)."
    },
    {
        "category": "<span>Управленчиская ветка</span>",
        "name": "<span>Наместник</span>",
        "image": "./img/Icon/preking.png",
        "description": "Заместитель лидера расы, следит за казной, выдает монеты руководителям, назначает на должности.<br><span>Имеет полномочия Короля во время его отсутствия.<br>Не оказывает никакого влияния на Хранителя и Лордов.",
        "mechanics": "● Возможность назначать подданных на роли<br>● Объявление войны с помощью команды /war<br>● Имеет возможности Лорда и Лесного Эльфа.<br>● Умеет крафтить монеты.<br>(Может носить броню 3 тира, королевское оружие)."
    },
    {
        "category": "<span>Военная ветка</span>",
        "name": "<span>Хранитель</span>",
        "image": "./img/Icon/elf_bwarrior.png",
        "description": "Руководитель военной ветки.<br>Выполняет приказы только Короля.<br>Назначается Королём.",
        "mechanics": "● Назначает Следопытов, Стражей Леса, Рекрутов по иерархии<br>● Может быть повышен до Наместника.<br>● Возможность использовать команду /frisk для обыска.<br>(Может носить 3 тир брони и оружия)."
    },
    {
        "category": "<span>Военная ветка</span>",
        "name": "<span>Лорд</span>",
        "image": "./img/Icon/elf_warrior.png",
        "description": "Элитный воин, назначается лично Королём (Состоит либо в личной гвардии Короля, либо прикрепляется к городу, форту).<br>Выполняет приказы Хранителя, Короля",
        "mechanics": "● Назначает Стражей Леса и Рекрутов по иерархии.<br>● Может быть повышен до Хранителя, Наместника.<br>● Возможность использовать команду /frisk для обыска.<br>(Может носить 3 тир брони и оружия)."
    },
    {
        "category": "<span>Военная ветка</span>",
        "name": "<span>Следопыт</span>",
        "image": "./img/Icon/prewarrior.png",
        "description": "Боец со стажем Выполняет приказы Лорда и вышестоящих.",
        "mechanics": "● Может быть повышен до Лорда.<br>● Возможность использовать команду /frisk для обыска.<br>(Может носить 2 тир брони и 3 тир оружия, лук второго)."
    },
    {
        "category": "<span>Военная ветка</span>",
        "name": "<span>Страж Леса</span>",
        "image": "./img/Icon/lwarrior.png",
        "description": "Охранник города, выступает как основная боевая единица.<br>Выполняет приказы Следопыта и вышестоящих.",
        "mechanics": "● Может быть повышен до Следопыта.<br>● Возможность использовать команду /frisk для обыска.<br>(Может носить 2 тир брони и оружия)."
    },
    {
        "category": "<span>Военная ветка</span>",
        "name": "<span>Рекрут</span>",
        "image": "./img/Icon/recruit.png",
        "description": "Новоприбывший солдат в армию.<br>Выполняет приказы Стража Леса и вышестоящих.",
        "mechanics": "● Может быть повышен до Стража Леса.<br>● Возможность использовать команду /frisk для обыска.<br>(Может носить 1 тир брони и 2 тир оружия)."
    },
    {
        "category": "<span>Ветка исп.власти</span>",
        "name": "<span>Мудрец</span>",
        "image": "./img/Icon/judge.png",
        "description": "Лицо, осуществляющее правосудие, рассматривает судебные и спорные дела.<br>Составляет и заверяет документы.",
        "mechanics": "(Может носить броню, оружие второго тира)."
    },
    {
        "category": "<span>Ветка исп.власти</span>",
        "name": "<span>Летописец</span>",
        "image": "./img/Icon/scribe.png",
        "description": "Взаимодействует с книгами, газетами, ведёт летоисчисление, записывает хронику государства;<br>ответственный за осведомленность населения в делах, происходящих в государстве и в мире.",
        "mechanics": "● Может крафтить книги.<br>(Может носить 1 тир брони и оружия)."
    },
    {
        "category": "<span>Ветка исп.власти</span>",
        "name": "<span>Посол</span>",
        "image": "./img/Icon/postman.png",
        "description": "Лицо, ответственное за внешнюю политику, в т.ч. переговоры и торговля.",
        "mechanics": "(Может носить броню, оружие второго тира)."
    },
    {
        "category": "<span>Ветка исп.власти</span>",
        "name": "<span>Купец</span>",
        "image": "./img/Icon/tradesman.png",
        "description": "Лицо, ответственное за внешнюю политику, в т.ч. переговоры и торговля.",
        "mechanics": "(Может носить броню, оружие второго тира)."
    },
    {
        "category": "<span>Ветка исп.власти</span>",
        "name": "<span>Друид</span>",
        "image": "./img/Icon/priest.png",
        "description": "Представитель духовенства.<br>Занимается алхимией и распространением вероисповедания.",
        "mechanics": "● Имеет все возможности Лесного Эльфа.<br>● Может изготавливать зелья.<br>● Возможность крафтить стрелы отравления и слабости.<br>(Может носить 1 тир брони и оружия)."
    },
    {
        "category": "<span>Ветка фермеров</span>",
        "name": "<span>Древний</span>",
        "image": "./img/Icon/mfarme.png",
        "description": "Руководитель, отвечающий за ветку фермеров.<br>Осуществляет внутреннюю торговлю с/х ресурсами.<br>На одного Древнего приходится 6 рабочих ролей",
        "mechanics": "● Имеет все возможности Лесного Эльфа.<br>● Назначает Конюха, Повара, Лесного Эльфа по иерархии.<br>● Может быть повышен до Наместника.<br>(Не имеет способности к шахтёрству)<br>(Может носить 2 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка фермеров</span>",
        "name": "<span>Конюх</span>",
        "image": "./img/Icon/groom.png",
        "description": "Работник, занятый разведением ездовых животных и уходом за ними.",
        "mechanics": "● Имеет все возможности Лесного Эльфа.<br>Возможность разводить коней.<br>● Может быть повышен до Древнего.<br>(Может носить 1 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка фермеров</span>",
        "name": "<span>Повар</span>",
        "image": "./img/Icon/cook.png",
        "description": "Мастер по приготовлению пищи.<br>Обладает уникальным даром кулинарии.<br>Осуществляет поставки еды к королевскому двору, закупает свежие продукты с фермы.",
        "mechanics": "● Имеет все возможности Лесного Эльфа.<br>● Возможность готовить уникальные блюда.<br>● Может быть повышен до Древнего.<br> (Может носить 1 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка фермеров</span>",
        "name": "<span>Ткач</span>",
        "image": "./img/Icon/tailor.png",
        "description": "Специалист который занимается изготовлением предметов из материалов из кожи и ткани.",
        "mechanics": "● Имеет возможности Лесного Эльфа.<br>● Может крафтить 1 тирброни из кожи,<br>а также всё остальное из кожи и ткани.<br>(Может носить 1 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка фермеров</span>",
        "name": "<span>Лесной эльф</span>",
        "image": "./img/Icon/tool.png",
        "description": "Выращивает сельскохозяйственные культуры и животных на фермах, занимается рубкой дерева.<br>Отчитывается Древнему.",
        "mechanics": "● Возможность сажать, собирать агрокультуры<br>(Какао, пшеница, арбуз, тростник, морковь).<br>● Рубить и сажать деревья.<br>● Выращивать животных (Куриц, кроликов, овец)<br>● Может быть повышен до Повара, Конюха, Древнего.<br>(Может носить 1 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка шахтёров</span>",
        "name": "<span>Древний</span>",
        "image": "./img/Icon/mpickaxe.png",
        "description": "Руководитель, отвечающий за ветку копателей.<br>Осуществляет внутреннюю торговлю минеральными ресурсами.<br>Изготавливает оружие и броню высокого качества<br>На одного Древнего приходится 6 рабочих ролей.",
        "mechanics": "● Имеет возможности Ремесленника.<br>● Может крафтить 2 тир инструментов, 3 тир брони и оружия,<br>а также конскую броню и королевское оружие.<br>● Назначает Ремесленника, Шахтёра по иерархии.<br>● Может быть повышен до Наместника<br>(Не имеет способности к фермерству)<br>(Может носить 2 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка шахтёров</span>",
        "name": "<span>Ремесленник</span>",
        "image": "./img/Icon/smith.png",
        "description": "Изготавливает оружие и броню<br>На одного Древнего приходится 2 Ремесленника.",
        "mechanics": "● Имеет возможности Шахтёра.<br>● Может крафтить 1 тир<br>инструментов, 2 тир брони и оружия, а также седло, всю пыль.<br>● Может быть повышен до Древнего<br>(Может носить 1 тир брони и оружия)"
    },
    {
        "category": "<span>Ветка шахтёров</span>",
        "name": "<span>Шахтёр</span>",
        "image": "./img/Icon/pickaxe.png",
        "description": "Добывает горнопромышленные ресурсы.<br>Отчитывается Древнему.",
        "mechanics": "● Возможность добывать, плавить ресурсы.<br>● Может быть повышен до Ремесленника, Древнего<br>(Может носить 1 тир брони и оружия)"
    },
]