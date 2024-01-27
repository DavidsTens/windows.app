var addPageIcon = document.querySelector('.add-page-icon');
if (addPageIcon) {
    addPageIcon.addEventListener('click', function () {
// Создаем контейнер для textInput
        var textInputContainer = document.createElement('div');
        textInputContainer.className = 'text-input-container'; // Добавляем класс для стилизации
        // Создаем первый элемент для ввода текста
        var textInput1 = document.createElement('input');
        textInput1.type = 'text';
        textInput1.placeholder = 'Введите текст...';
        textInput1.className = 'text1-input'; // Добавляем класс для стилизации
        // Создаем второй элемент для ввода текста
        var textInput2 = document.createElement('input');
        textInput2.type = 'text';
        textInput2.placeholder = 'Введите текст...';
        textInput2.className = 'text2-input'; // Добавляем класс для стилизации
        // Добавляем textInput в его контейнер
        textInputContainer.appendChild(textInput1);
        textInputContainer.appendChild(textInput2);
        // Создаем бокс для изображения
        var imageBox = document.createElement('div');
        imageBox.className = 'image-box-custom'; // Применяем класс для стилизации
        // Создаем контейнер для новых элементов
        var newElementsContainer = document.createElement('div');
        newElementsContainer.className = 'new-elements-container'; // Применяем класс для стилизации
        // Добавляем контейнер для textInput и imageBox в newElementsContainer
        newElementsContainer.appendChild(textInputContainer);
        newElementsContainer.appendChild(imageBox);
        // Добавляем новые элементы в .grey-box
        var greyBox = document.querySelector('.grey-box');
        if (greyBox) {
            greyBox.appendChild(newElementsContainer);
        }
    });
}
