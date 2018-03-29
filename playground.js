/* 

    mkdir - створити папку
    ls - переглянути список файлів
    touch назва_файлу - створити файл
    cd назва папки/ - вказати шлях до папки
    rm назва_файлу - видалити файл

    git add <назва_файлу> - додати файл в репозиторій
    git add . - додати всі файли репозиторій
    git commit -m "playground" - 

*/

var assertTrue = (expected, actual, errorMessage) => {

    if (expected != actual) 
        throw new Exception('Expected: ' + expected + ', but got: ' + actual + ' ' + errorMessage);
}

assertTrue(1, 2-1, 'Oops');