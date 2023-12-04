package com.example.demo.service;

import com.example.demo.entities.AppUser;
import com.example.demo.repo.AppUserRepository;
import com.example.demo.repo.ContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class AppUserServiceImpl implements AppUserService {
   @Autowired
    AppUserRepository appUserRepository;
@Autowired
    ContratRepository contratRepository;
   public AppUserServiceImpl(AppUserRepository appUserRepository,ContratRepository contratRepository)
   {
       this.appUserRepository=appUserRepository;
       this.contratRepository=contratRepository;
   }
    @Override
    public AppUser addAppUser(@RequestBody AppUser appUser) {
        return appUserRepository.save(appUser);
    }

    @Override
    public void deleteAppUser(Long id) {
       appUserRepository.deleteById(id);

    }

    @Override
    public AppUser modifierAppUser(Long id, AppUser appUser) {
        return appUserRepository.findById(id)
                .map(appUser1 -> {
                    appUser1.setUsername(appUser.getUsername());
                    appUser1.setMotdepasse(appUser.getMotdepasse());
                    appUser1.setContrat(appUser.getContrat());
                    return appUserRepository.save(appUser1);
                }).orElseThrow(()->new RuntimeException("l'admin est non valide"));
    }

    @Override
    public Optional<AppUser> afficherbyid(Long id) {
        return appUserRepository.findById(id);
    }
}
