package com.example.demo.service;

import com.example.demo.entities.AppUser;

import java.util.Optional;

public interface AppUserService {
    AppUser addAppUser(AppUser appUser);
    void deleteAppUser(Long id);
    AppUser modifierAppUser(Long id,AppUser appUser);
    Optional<AppUser> afficherbyid(Long id);
}
