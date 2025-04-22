interface User {
    login: string;
    password: string;
    age: number;
    // addr?: string; если свойство необязательно ставим ?
    addr: string | undefined; // если свойство обязательно, но значение может быть undefined (используем Union-Тип)
    parents?: {
        mother?: string; // если свойство необязательно ставим ?
        father?: string;
    };
}

const user: User = {
    login: "first",
    password: "qwerty",
    age: 50,
    addr: "abcdefg",
};

let dbName: string;
sendUserData(user, "dasasdas"); // Вызов функции

console.log(dbName!); // `!` — оператор утверждения ненулевого значения (Non-Null)

// Передаем объект интерфейса User в obj, и базу данных db - которая принимает в себя строку или значение undefined
function sendUserData(obj: User, db?: string): void {
    dbName = "12345"; // Задаем значение для глобальной переменной
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase()); // `!` — оператор утверждения ненулевого значения (Non-Null), используется, когда разработчик уверен, что свойство или значение не будет `null` или `undefined` во время выполнения
}

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
