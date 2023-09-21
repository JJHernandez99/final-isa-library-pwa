import './BookList.css';
import {useEffect, useState} from "react";
import {getToken, login} from '../commons/login';
import {basepath} from "../commons/configs";
import {IonContent, IonIcon, IonItem, IonLabel, IonList, IonText} from "@ionic/react";
import {caretDown, caretUp} from "ionicons/icons";
import {Author} from "./AuthorList";
import {getEntity} from "../commons/entities";

interface Book {
    id: number;
    name: string;
    authors: Author[];
    copies: number;
    publishYear: string;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const handleClick = (book: any) => {
        setSelectedBook(book.id === selectedBook?.id ? null : book);
    };

    useEffect(() => {
        async function fetchBooks() {
            try {
                const books = await getEntity('/books');
                setBooks(books);
            } catch (error) {
                console.error(error);
            }
        }

        fetchBooks();
    }, []);

    return (
        <IonContent>
          <IonList lines="full" class="ion-padding">
            {books.map((book) => (
              <div key={book.id} className={`book-item ${selectedBook === book ? 'active' : ''}`}>
                <IonItem button onClick={() => handleClick(book)}>
                  <IonLabel>{book.name}</IonLabel>
                  <IonIcon
                    slot="end"
                    icon={selectedBook === book ? caretUp : caretDown}
                  />
                </IonItem>
                {selectedBook === book && (
                  <div className="book-details">
                    <div className="detail-row">
                      <span>Copias:</span>
                      <IonText color="secondary">{book.copies}</IonText>
                    </div>
                    <div className="detail-row">
                      <span>Año de Publicación:</span>
                      <IonText color="secondary">{book.publishYear}</IonText>
                    </div>
                    <div className="detail-row">
                      <span>Autores:</span>
                      <div className="author-list">
                        {book.authors.map((author) => (
                          <IonText
                            key={author.id}
                            className="ion-text-wrap author-name"
                          >
                            {author.firstName}
                          </IonText>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </IonList>
        </IonContent>
      );
    };
    
    export default BookList;
    