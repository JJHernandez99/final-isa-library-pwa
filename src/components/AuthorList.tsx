import './AuthorList.css';
import {IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import {useEffect, useState} from "react";
import {getEntity} from "../commons/entities";

export interface Author {
    id: number
    firstName: string
    lastName: string
}

const AuthorList: React.FC = () => {
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        async function fetchAuthors() {
            try {
                const authors = await getEntity('/authors');
                setAuthors(authors);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAuthors();
    }, []);
    return (
        <IonContent>
            <IonList lines="full" class="ion-padding">
                {authors.map((author) => (
                    <div key={author.id} className="author-item">
                        <IonItem>
                            <IonLabel>{author.firstName} {author.lastName}</IonLabel>
                        </IonItem>
                    </div>
                ))}
            </IonList>
        </IonContent>
    )
}

export default AuthorList;

