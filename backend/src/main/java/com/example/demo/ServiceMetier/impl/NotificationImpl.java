package com.example.demo.ServiceMetier.impl;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.ModelDomain.Notifications;
import com.example.demo.ModelDomain.NotificationsType;
import com.example.demo.ModelDomain.User;
import com.example.demo.ServiceMetier.NotificationsServiceMetier;
import com.example.demo.repository.NotificationRespository;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Service
@Getter
@Setter
@AllArgsConstructor
public class NotificationImpl implements NotificationsServiceMetier{

    @Autowired
    private final NotificationRespository notificationRespository;

    @Override
    public Notifications creerNotificationNouvelleLivraison(User livreur) {

        Notifications notif = new Notifications();
        notif.setCreatedAt(LocalDateTime.now());
        notif.setNotificationType(NotificationsType.NOUVELLE_LIVRAISON_DISPONIBLE);
        notif.setMessage(notif.getNotificationType().getMessage());
        notif.setRead(false);
        notif.setUser(livreur);

        return notificationRespository.save(notif);

        
    }

}
