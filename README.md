Я хочу на Ларавел и популярном js фреймворке, а также с помощью докера реализовать небольшое ТЗ в качестве пет проекта

ТЗ(https://www.figma.com/design/B4d0CRig24tKNASvjD2Esg/MVP-CRM?node-id=0-1&node-type=canvas&t=fe8I2RBM7qowHkDw-0)

3 раздела:

1. Сделки
    1. Создать таблицу с поиском, фильтром, сортировкой, пагинацией и выбром колва в пагинации
       Таблица содержит в себе список заявок, колонки - Номер, Клиент, Товар, Менеджер, Статус, кнопки(удалить,
       посмотреть)
    2. При открытии есть 9 блоков, 2 слева и 7 справа
        1. слева:
            1. Сделка (дата)
                1. Название сделки
                2. Смена статуса
                3. Кто менеджер
            2. Клиент
                1. Смена клиента по названию компании
                2. ФИО владельца
                3. Тел владельца
        2. справа:
            1. Товар
                1. Наименование input - количество input
                2. Груз (расчетный фактический - кнопки в виде ссылок)
                3. Вес - объем - мест

            2. Доставка
                1. Пункт назначения
                2. Тип доставки - стоимость доставки(text)
                3. Ориентировочная дата прибытия - Дата получения клиентом
                4. Отслеживание груза (выпадающий аккордеон)
                5. Дата - событие
            3. Стоимость
                1. Расходы (выпадающий аккордеон)
                2. дата - событие - цена
                3. Итого
                4. Итоговая стоимость(input)
            4. Оплата
                1. Статус оплаты - Дата выставления счета - Дата оплаты
            5. Комментарий
                1. textbox
            6. Запретить выдачу клиенту
                1. чекбокс Запрет выдачи
                2. Комментарий(textbox)

2. Логистика
   Формирование типов доставки - название, стоимость, и рейсы
3. Склад
   Справочник складов(название, адрес, контакты), остатки, прием грузов, выдача

Все поля сохраняются при потере фокуса
