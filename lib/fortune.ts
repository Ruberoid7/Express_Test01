
    let fortunes: string[] = [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple."
    ];

    type Employee = {
                        guid:           string,
                        firstName:      string,
                        lastName:       string,
                        birthDay:       Date,
                        organization:   string,
                        manager?:       string,
                        title?:         string,
                        dept?:          string,
                        hireDate?:      Date,
                        leaveDate?:     Date,
                        photoUrl?:      string,
    };

    let employees: Employee[];
    employees = [
        {
            guid:       "001",
            firstName: "Алексей",
            lastName: "Максимов",
            birthDay: new Date(1975, 8, 23),
            organization: "Уралхим",
            manager: "Шонкин",
            title: "архитип",
            dept: "ИТ",
            hireDate: new Date(2014, 7, 1),
        },
        {
            guid:       "002",
            firstName: "Петр",
            lastName: "Шонкин",
            birthDay: new Date(1982, 11, 12),
            organization: "Уралхим",
            manager: "Пахом",
            title: "ИТ директор",
            dept: "финансы",
            hireDate: new Date(2000, 1, 1),
        },
        {
            guid:       "003",
            firstName: "Дмитрий",
            lastName: "Шведов",
            birthDay: new Date(1975, 08, 23),
            organization: "",
            manager: "Мошонкин",
            title: "засранец",
            dept: "ИТ",
            hireDate: new Date(2010, 0, 0),
        },
        {
            guid:       "004",
            firstName: "Дмитрий",
            lastName: "Гребенев",
            birthDay: new Date(1975, 5, 19),
            organization: "КЧХК",
            manager: "Шонкин",
            title: "хранитель",
            dept: "служба заказчика",
            hireDate: new Date(2013, 5, 1),
        },
        {
            guid:       "005",
            firstName: "Михаил",
            lastName: "Стариков",
            birthDay: new Date(1975, 3, 30),
            organization: "КЧХК",
            manager: "Гребенев",
            title: "зам хранителя",
            dept: "служба заказчика",
            hireDate: new Date(2000, 3, 0),
        },
        {
            guid:       "006",
            firstName: "Человек",
            lastName: "Уволенный",
            birthDay: new Date(1901, 7, 7),
            organization: "Уралхим",
            manager: "Шонкин",
            title: "гавнюк",
            dept: "ИТ",
            hireDate: new Date(2014, 1, 1),
            leaveDate: new Date(2014, 7, 1)
        }
    ];

    exports.getFortune = function(): string {
        let idx: number = Math.floor(Math.random() * fortunes.length);
        return fortunes[idx];
    };

    exports.getEmployees  = function(): Employee[] {return employees; };

    exports.getEmployeeById = function(id: string): Employee {
                    return employees.filter(e => e.guid === id)[0];
    };

    exports.gEmployeeByName = function(id: string): Employee[] {
        return employees.filter(e => e.guid === id);
    };