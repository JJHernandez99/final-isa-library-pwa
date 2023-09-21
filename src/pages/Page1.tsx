import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
  } from "@ionic/react";
import { reloadOutline } from "ionicons/icons";
import './Page1.css';
import BookList from "../components/BookList";
import {useState} from "react";

const Page1: React.FC = () => {
    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload);
    };
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Books</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding">
            <BookList key={reload ? "reload" : "no-reload"} />
          </IonContent>
          <IonButton
            size="default" // Tamaño mediano
            fill="solid"
            color="secondary"
            onClick={handleReload}
            style={{
              width: "fit-content", // Ajusta el ancho al contenido
              display: "flex",
              alignItems: "center", // Centra verticalmente
              justifyContent: "center", // Centra horizontalmente
              margin: "0 auto", // Centra horizontalmente
            }}
      >
        <IonIcon icon={reloadOutline} style={{ marginRight: "15px" }} />
        Update Books
      </IonButton>
    </IonPage>
      );
};

export default Page1;