package com.drools.sample.service;

import java.util.List;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drools.sample.model.Fornecedor;

@Service
public class DroolsService {
 
    @Autowired
    private KieContainer kieContainer;

    public List<Fornecedor> avaliar(List<Fornecedor> fornecedores) {
        KieSession kieSession = kieContainer.newKieSession();

        for (Fornecedor fornecedor : fornecedores) {
            kieSession.insert(fornecedor); 
        }

        kieSession.fireAllRules();
        kieSession.dispose();

        return fornecedores; 
    }
}
