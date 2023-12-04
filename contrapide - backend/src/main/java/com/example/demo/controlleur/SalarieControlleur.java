package com.example.demo.controlleur;
import com.example.demo.entities.Salarie;
import com.example.demo.repo.SalaireRepository;
import com.example.demo.service.SalarieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController //conversion en json
public class SalarieControlleur {
    @Autowired//to get imp de interf
    SalarieService serviceImp;//contain all meth

@Autowired
    private SalaireRepository salaireRepository;


    @PostMapping("/addsalarie")

    public Salarie addSalarie( @RequestBody Salarie s) {
        return serviceImp.addSalarie(s);
    }

     @GetMapping("/test")
    public  void  test()
     {
         salaireRepository.findAll().forEach(salarie ->
         {
             salaireRepository.delete(salarie);
         });
     }

    @DeleteMapping(value = "/delete/{id}")
    @ResponseBody
    public String deleteSalarie(@PathVariable("id") Long id){
        return serviceImp.deleteSalarie(id);

    }
    @GetMapping("affbyid/{id}")
    @ResponseBody

    public Optional<Salarie> afficheSalarie(@PathVariable("id") Long id){
        return serviceImp.affiche(id);

    }
    @PutMapping("/modify/{id}")
    public Salarie modifySalarie(@PathVariable("id") Long id,@RequestBody Salarie salarie){
        return serviceImp.modifySalarie(id,salarie);
    }
    @GetMapping("/haveallSalaries")
    public List<Salarie> getSalarie(){
        return serviceImp.getSalarie();
    }
}
