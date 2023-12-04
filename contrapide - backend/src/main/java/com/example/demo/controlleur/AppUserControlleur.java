package com.example.demo.controlleur;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Salarie;
import com.example.demo.repo.AppUserRepository;
import com.example.demo.repo.ContratRepository;
import com.example.demo.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class AppUserControlleur {
    @Autowired
    AppUserService appUserService;
    @Autowired
    AppUserRepository appUserRepository;

    @PostMapping("/adduser")
    public AppUser addAppUser(@RequestBody AppUser appUser){
        return appUserService.addAppUser(appUser);
    }
    @DeleteMapping("/deleted/{id}")
    @ResponseBody
    public void deleteAppUser (@PathVariable("id") Long id){
        appUserService.deleteAppUser(id);

    }
    @PutMapping("/modifier/{id}")
    public AppUser modifier(@PathVariable("id") Long id,@RequestBody AppUser appUser){
        return appUserService.modifierAppUser(id,appUser);
    }
    @GetMapping("affiche/{id}")
    @ResponseBody

    public Optional<AppUser> afficherbyid(@PathVariable("id") Long id){
        return appUserService.afficherbyid(id);

    }
}
