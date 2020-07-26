package com.bamboo2020.chatbot;

import com.bamboo2020.chatbot.controller.mobile.BambooMobileConfig;
import com.bamboo2020.chatbot.controller.web.BambooWebConfig;
import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

@SpringBootApplication
public class BambooApplication {
    public static void main(String[] args) {
        new SpringApplicationBuilder().bannerMode(Banner.Mode.CONSOLE).sources(BambooApplication.class).properties("spring.config.location="
                + "classpath:/domain.yml"
                + ", classpath:/application.yml").run(args);
    }

    @Bean
    public ServletRegistrationBean web() {
        DispatcherServlet dispatcherServlet = new DispatcherServlet();
        AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.register(BambooWebConfig.class);
        dispatcherServlet.setApplicationContext(applicationContext);

        ServletRegistrationBean servletRegBean = new ServletRegistrationBean(dispatcherServlet);
        servletRegBean.addUrlMappings("/web/*");
        servletRegBean.setName("web");
        return servletRegBean;
    }

    @Bean
    public ServletRegistrationBean mobile() {
        DispatcherServlet dispatcherServlet = new DispatcherServlet();
        AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.register(BambooMobileConfig.class);
        dispatcherServlet.setApplicationContext(applicationContext);

        ServletRegistrationBean servletRegBean = new ServletRegistrationBean(dispatcherServlet);
        servletRegBean.addUrlMappings("/mobile/*");
        servletRegBean.setName("mobile");
        return servletRegBean;
    }

}