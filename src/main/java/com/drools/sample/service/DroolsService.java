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
        try {
            
            // Inicia uma nova sessão do Drools
            KieSession kieSession = kieContainer.newKieSession();
            System.out.println("Sessão Drools iniciada.");

            // Insere cada fornecedor na sessão Drools
            for (Fornecedor fornecedor : fornecedores) {
                kieSession.insert(fornecedor); 
                System.out.println("Fornecedor inserido: " + fornecedor.getNome());
            }

            // Executa todas as regras definidas no arquivo .drl
            int rulesFired = kieSession.fireAllRules();
            System.out.println("Regras disparadas: " + rulesFired);

            // Finaliza a sessão Drools
            kieSession.dispose();
            System.out.println("Sessão Drools finalizada.");

            // Retorna a lista de fornecedores (alterada se necessário)
            return fornecedores; 
        } catch (Exception e) {
            
            // Captura qualquer erro e exibe no log
            e.printStackTrace();
            throw new RuntimeException("Erro ao processar as regras com Drools", e);
        }
    }

    public Fornecedor obterMelhorFornecedor(List<Fornecedor> fornecedores) {
        return fornecedores.stream()
            .max((f1, f2) -> Integer.compare(f1.getPontuacao(), f2.getPontuacao()))
            .orElse(null);  // Retorna null se a lista estiver vazia
    }
}
