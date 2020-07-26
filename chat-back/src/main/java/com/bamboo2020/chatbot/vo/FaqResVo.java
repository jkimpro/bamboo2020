package com.bamboo2020.chatbot.vo;

import lombok.Data;

import java.util.Date;

@Data
public class FaqResVo {

    private String resCode;
    private String answer;
    private String url;

    private Date timeStamp;

}
