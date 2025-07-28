package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.ModelDomain.Notifications;

public interface NotificationRespository  extends JpaRepository<Notifications, Long>{


    
}
