package com.bamboo2020.chatbot.services;

import com.bamboo2020.chatbot.vo.FaqReqVo;
import com.bamboo2020.chatbot.vo.FaqResVo;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class FaqMainService {


    public FaqResVo getAnswer(FaqReqVo req){
        //service 관련 사항들 확인하기

        //req code 별로 상황을 분류



        //python flask api 호출하기



        // 따라서 해당 api값에서 특정 answer가 리턴될경우


        //code 와 함께 vo파일을 리턴한다.




        return new FaqResVo();
    }
}
