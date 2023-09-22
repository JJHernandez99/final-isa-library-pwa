import './PublisherList.css';
import {IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import {useEffect, useState} from "react";
import {getEntity} from "../commons/entities";

export interface Publisher {
    id: number
    name: string
    
}

const PublisherList: React.FC = () => {
    const [publishers, setPublishers] = useState<Publisher[]>([]);

    useEffect(() => {
        async function fetchPublishers() {
            try {
                const publishers = await getEntity('/publishers');
                setPublishers(publishers);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPublishers();
    }, []);
    return (
        <IonContent>
            <IonList lines="full" class="ion-padding">
                {publishers.map((publisher) => (
                    <div key={publisher.id} className="publisher-item">
                        <IonItem>
                            <IonLabel>{publisher.name}</IonLabel>
                        </IonItem>
                    </div>
                ))}
            </IonList>
        </IonContent>
    )
}

export default PublisherList;

