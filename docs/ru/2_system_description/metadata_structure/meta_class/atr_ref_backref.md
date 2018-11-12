### Предыдущая страница: [Значение по умолчанию](/docs/ru/2_system_description/metadata_structure/meta_class/atr_default_value.md)  
# Ссылки
## Общее описание

**Ссылка** - тип данных, который хранит простое значение и которое интерпретируется системой как ссылка на ключевой атрибут объекта другого класса. Данный объект может быть объектом любого класса включая исходный. 

Отображаемые значения в атрибуте ссылочного типа выводятся в соответствии с семантикой, указанной в ссылочном классе этого атрибута. 

Возможность замены объекта по обратной ссылке определяется параметром `nullable` связывающего ссылочный атрибут. При замене объекта связь будет потеряна и объект по ссылке будет удален при попытке изменить связь из коллекции с обратной ссылкой.



## Типы связей реализуемые типом "Ссылка":

Ссылочный тип с точки зрения используемых полей атрибутивной части меты классов: 
1. `один-ко-многим` - классическая связь дочернего объекта на родительский объект. Необходимо определить ссылку и указать класс вложенного элемента - связи создаются при помещении в ссылку и хранятся как отдельная сущность в БД. 
2. `один-к-одному` - аналогична связи один-ко-многим, означает наличие ссылки и вложенного объекта с ссылкой-связкой на исходный объект. В ссылке необходимо указать ссылку-связку, а у нее указать ссылочный атрибут вложенного объекта по которому формируется связь. Обязательно в атрибуте-ссылке указать свойство `"unique": true`.



## Ссылка в формате JSON 

### Пример:

```
{
      "orderNumber": 20,
      "name": "ssylka",
      "caption": "Ссылка",
      "type": 13,
      "size": null,
      "decimals": 0,
      "allowedFileTypes": null,
      "maxFileCount": 0,
      "nullable": true,
      "readonly": false,
      "indexed": false,
      "unique": false,
      "autoassigned": false,
      "hint": null,
      "defaultValue": null,
      "refClass": "collRefCatalog@develop-and-test",
      "itemsClass": "",
      "backRef": "",
      "backColl": "",
      "binding": "",
      "semantic": null,
      "selConditions": [],
      "selSorting": [],
      "selectionProvider": null,
      "indexSearch": false,
      "eagerLoading": false,
      "formula": null
    }
```  


# Обратные ссылки 

Обратная ссылка в контексте ссылок получается следующим образом:
- Создаётся атрибут с типом 13, указанием ссылочного класса “refClass” и указанием свойства "backRef" - куда записывается код атрибута из ссылочного класса. 
- В ссылочном классе должен быть атрибут-ссылка, ссылающийся на исходный класс и имеющий свойство `"unique": true`.

## Обратная ссылка в формате JSON

### Пример:

```
{
      "orderNumber": 30,
      "name": "backref",
      "caption": "Обратная ссылка",
      "type": 13,
      "size": null,
      "decimals": 0,
      "allowedFileTypes": null,
      "maxFileCount": 0,
      "nullable": true,
      "readonly": false,
      "indexed": false,
      "unique": false,
      "autoassigned": false,
      "hint": null,
      "defaultValue": null,
      "refClass": "otorbrRef@develop-and-test",
      "itemsClass": "",
      "backRef": "ref",
      "backColl": "",
      "binding": "",
      "semantic": "data",
      "selConditions": [],
      "selSorting": [],
      "selectionProvider": null,
      "indexSearch": false,
      "eagerLoading": true,
      "formula": null
    }
```  

### *Внимание* 
- `"type": 13` - тип атрибута "Ссылка"
- `"refClass"` - название класса, объекты которого могут хранить свои идентификаторы в ссылке и, таким образом, формировать связь к объекту по идентификатору.
- `"backRef"` - указывается имя атрибута, который принадлежит классу, заданному в свойстве "refClass". Атрибут должен иметь тип "Ссылка" и ссылку на исходный класс.

### Пример:
```
Employee: {
    property: {
        aaa: {
            refClass: Post,
            backRef: bbb,
            ...
        },
        ...
    }
}
    
        
Post: {
    property: {
        bbb: {
            refClass: Employee,
            ...
        },    
        ...
    }
}
```


### Следующая страница: [Атрибут "Коллекция"](/docs/ru/2_system_description/metadata_structure/meta_class/atr_itemclass_backcoll.md)
--------------------------------------------------------------------------  


 #### [Licence](/LICENCE.md) &ensp;  [Contact us](https://iondv.com) &ensp;  [English](/docs/en/2_system_description/metadata_structure/meta_class/atr_ref_backref.md)   &ensp; [FAQs](/faqs.md)          



--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.   
All rights reserved. 