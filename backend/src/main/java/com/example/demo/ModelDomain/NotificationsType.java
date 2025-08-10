package com.example.demo.ModelDomain;

public enum NotificationsType {
    
    demandeLivraison_En_attente("Votre demande de livraison est en attente."),
    demandeLivraison_annuler("Votre demande de livraison est annuler."),
    demandeLivraison_encours("Votre demande de livraison est en cours."),
    demandeLivraison_achever("Votre demande de livraison est achever."),
    NOUVELLE_LIVRAISON_DISPONIBLE("une livraison disponible est en attente");


    private final String message;

     NotificationsType(String message){
        this.message=message;

    }

    public String getMessage(){
        return message;
    }
}
