interface User {
    readonly login: string; // readonly property (свойство только для чтения)
    password: string;
    age: number;
    // addr?: string; если свойство необязательно ставим ?
    readonly addr: string | undefined; // если свойство обязательно, но значение может быть undefined (используем Union-Тип)
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

// Структура дженерик принимает в себя интерфейс юзера
const userFreeze: Readonly<User> = {
    login: "first",
    password: "qwerty",
    age: 50,
    addr: "abcdefg",
};

// userFreeze.age = 48; Получаем ошибку тк вся структура стала readonly
// userFreeze.password = "qwerty123"; Тут тоже самое

// user.login = "dsdas"; Cannot assign to 'login' because it is a read-only property.

const dbName = "12345";

// Передаем объект интерфейса User в obj, и базу данных db - которая принимает в себя строку или значение undefined
function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase()); // `!` — оператор утверждения ненулевого значения (Non-Null), используется, когда разработчик уверен, что свойство или значение не будет `null` или `undefined` во время выполнения
}

// class Animal {
// readonly name: string = "name"; // Фиксируем тип данных string со значением "name"
// }

// Переменная со значениями базовых портов
// Структура дженерик
const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555]; // Делаем массив из чисел readonly
basicPorts[0] = 5; // Получаем ошибку тк нельзя переназначать значение свойства с модификатором readonly
basicPorts.push(566); // Тут тоже самое

// Кортеж с массивами
// const basicPorts: readonly [number, ...string[]] = [3000, "3001", "5555"];
// basicPorts[0] = 5;
// basicPorts.push(566);

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
