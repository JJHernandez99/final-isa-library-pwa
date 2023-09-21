import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Page2.css";
import AuthorList from "../components/AuthorList";
import { reloadOutline } from "ionicons/icons";

const Page2: React.FC = () => {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
  }, [reload]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Authors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <AuthorList key={reload ? "reload" : "no-reload"} />
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
        Update Authors
      </IonButton>
    </IonPage>
  );
};

export default Page2;
