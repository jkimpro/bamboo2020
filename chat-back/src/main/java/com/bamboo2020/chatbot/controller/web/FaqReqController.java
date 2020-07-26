package com.bamboo2020.chatbot.controller.web;

import com.bamboo2020.chatbot.services.FaqMainService;
import com.bamboo2020.chatbot.vo.FaqReqVo;
import com.bamboo2020.chatbot.vo.FaqResVo;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FaqReqController {

    @Autowired
    private FaqMainService faqMainService;

    @ApiOperation(value = "기본 질문", notes = "기본 질문", response = FaqResVo.class)
    @PostMapping("/getAnswer")
    public FaqResVo getAnswer(@RequestBody FaqReqVo req){

        return faqMainService.getAnswer(req);
    }




}
