package com.bamboo2020.chatbot.config.session;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

public class HttpFrontRequest extends HttpServletRequestWrapper {
    private SessionVo sessionVo;

    public HttpFrontRequest(HttpServletRequest request) {
        super(request);
    }

    public SessionVo getSessionVo() {
        return sessionVo;
    }

    public void setSessionVo(SessionVo sessionVo) {
        this.sessionVo = sessionVo;
    }


}