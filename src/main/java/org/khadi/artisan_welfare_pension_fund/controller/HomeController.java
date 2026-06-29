package org.khadi.artisan_welfare_pension_fund.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "forward:/out/browser/index.html";
    }
}
