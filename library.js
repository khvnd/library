class Library {
    #books;
  
    constructor(initialBooks = []) {
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error('Начальный список книг содержит дубликаты.');
      }
      this.#books = [...initialBooks];
    }
  
    get allBooks() {
      return [...this.#books];
    }
  
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
      }
      this.#books.push(title);
    }
  
    removeBook(title) {
      const index = this.#books.indexOf(title);
      if (index === -1) {
        throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
      }
      this.#books.splice(index, 1);
    }
  
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  // Пример использования:
  // const library = new Library(['Война и мир', 'Преступление и наказание']);
  // console.log(library.allBooks);
  // library.addBook('Мастер и Маргарита');
  // console.log(library.hasBook('Мастер и Маргарита'));
  // library.removeBook('Война и мир');
  