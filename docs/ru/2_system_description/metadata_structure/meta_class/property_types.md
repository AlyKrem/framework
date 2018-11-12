### Предыдущая страница: [Мета классов - атрибутивная часть](/docs/ru/2_system_description/metadata_structure/meta_class/meta_class_attribute.md)
# Типы атрибутов

**Тип атрибута** - указывает на тип поддерживаемых атрибутом данных, как например размер допустимых значений и другие.



| Код | Имя    | Тип в БД | Описание                                                                                                                                                                                                                                                                                                     |
|:----|:-------------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0   | Строка                   | String   | Тип данных, значениями которого является произвольная последовательность (строка) символов алфавита. Каждая переменная такого типа (строковая переменная) может быть представлена фиксированным количеством символов.                                                                                         
| 1   | Текст                    | String   | Хранит текстовые данные.                                                                                                                                                                                                                                                                                      
| 2   | HTML                     | String   | Форматированный текст, содержащий гипертекстовую разметку  с возможностью редактирования с учетом возможных начертаний.                                                                                                                                                                                                                            
| 3   | URL                      | String   | Хранит ссылку, позволяет сохранить любую строку.                                                                                                                                                                                                                                                                     
| 4   | Изображение              | String   | Изображение, сохраняемое в файловом хранилище с предпросмотром в представлениях.                                                                                                                                                     
| 5   | Файл                     | String   | Файл, сохраняемый в файловом хранилище. В процессе реализации в регистри.                                                                                                                                                                                                                                     
| 6   | Целое                    | Int32    | Целое число                                                                                                                                                                                                                                                                                                   
| 7   | Действительное           | Double   | Любое положительное число, отрицательное число или ноль.                                                                                                                                                                                                                                                                   
| 8   | Десятичное               | Double   | Число, представленное в десятичной системе счисления. Алфавит этой системы счисления состоит из 10 цифр от нуля до 9, отсюда и название - десятичная.  
| 10  | Логический               | Boolean  | Принимает два возможных значения, называемых истиной (true) и ложью (false).                                                                                                                                                                                                                                  
| 11  | Пароль                   | String   | Хеш пароля                                                                                                                                                                                                                                                                                                         
| 12  | Глобальный идентификатор | String   | Тип предназначенный для ключевого поля класса. Предполагает выставление атрибутов уникальности и автозаполнения.                                                                                                                                                                                                            
| 13  | [Ссылка](/docs/ru/2_system_description/metadata_structure/meta_class/type_reference13.md)                   | String   | Тип данных, хранящий в себе ссылку на объекты другого класса.                                                                                                                                                                                                                 
| 14  | [Коллекция](/docs/ru/2_system_description/metadata_structure/meta_class/type_collection14.md)                | Array    | Коллекция - тип данных, который хранит в себе ссылки на другие объекты. Каждая ссылка содержит значение идентификатора объекта, определенного в мете класса. Разделяются ссылки через запятую. Все значение из последовательности ссылок и запятых хранится строкой в базе.                                                                             
| 15  | Множество               | String   | Храним набор дискретных значений из предопределенного списка выбора.                                                                                                                                                                                                                   |
| 16  | [Структура](/docs/ru/2_system_description/metadata_structure/meta_class/type_isstruct16.md)                | String   | Тип данных, хранящий в себе ссылку на объект класса-структуры.                                                                                                                                                                                                                                                                                         
| 17  | [Пользовательский тип](/docs/ru/2_system_description/metadata_structure/meta_class/type_user17.md)     | String   | Дает возможность определения пользовательских типов на основе примитивных типов.                                                                                                                                                                                                                                                                      
| 18  | Пользователь             | Строка   | Хранит имя пользователя, для настройки безопасности, в формате _имя@local_                                                                                                                                                                                                                                                                
| 100 | [Геоданные](/docs/ru/2_system_description/metadata_structure/meta_class/type_geodata100.md)                | Object   | Особый тип данных, хранящий координаты с уникальными представлениями для создания и редактирования.                                                                                                                                                                                      
| 110 | Коллекция файлов         | String   | Тип атрибута для хранения комплекта файлов до 5 штук, с общим ограничением размера и возможностью задания допустимых расширений файлов                                                                                                                                                                                
| 210 | [Расписание](/docs/ru/2_system_description/metadata_structure/meta_class/type_schedule210.md)               | Array    | Тип данных, предназначеный для хранения данных календаря/расписания                                                                                                                                                                                                                                                                                                                    
### Идентификаторы типов атрибутов:
```
module.exports = {
  STRING: 0,
  TEXT: 1,
  HTML: 2,
  URL: 3,
  IMAGE: 4,
  FILE: 5,
  INT: 6,
  REAL: 7,
  DECIMAL: 8,
  DATETIME: 9,
  BOOLEAN: 10,
  PASSWORD: 11,
  GUID: 12,
  REFERENCE: 13,
  COLLECTION: 14,
  SET: 15,
  STRUCT: 16,
  CUSTOM: 17,
  USER: 18,
  PERIOD: 60,
  GEO: 100,
  FILE_LIST: 110,
  SCHEDULE: 210
};
```
### Следующая страница: [Мета представлений](/docs/ru/2_system_description/metadata_structure/meta_view/meta_view_main.md)
--------------------------------------------------------------------------  


 #### [Licence](/LICENCE.md) &ensp;  [Contact us](https://iondv.com) &ensp;  [English](/docs/en/2_system_description/metadata_structure/meta_class/property_types.md)   &ensp; [FAQs](/faqs.md)          



--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.
All rights reserved. 