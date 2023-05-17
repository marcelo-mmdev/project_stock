package com.mmdev.medusa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClienteController {

    @Autowired
    ClienteRepository clienteRepository;

    @RequestMapping("/")
    public String listaCliente(Model model){
        model.addAttribute("cliente", clienteRepository.findAll());
        return "lista";
    }

    @GetMapping("/add")
    public String clienteForm(Model model){
        model.addAttribute("cliente", new Cliente());
        return "clienteForm";
    }
}
