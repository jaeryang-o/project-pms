package kr.co.agics.pms;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @GetMapping("/test")
    public String test() {
        return "test.html";
    }

    @ResponseBody
    @GetMapping("/api/test")
    public String apiTest() {
        return "성공입니다.";
    }

}

