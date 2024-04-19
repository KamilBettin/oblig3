package kamilbettin.oblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {


    @Autowired
    BillettRepository repository;


    @GetMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
            repository.lagreBillett(innBillett);
        }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return repository.hentAlleBilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        repository.slettAlleBilletter();
    }
}


