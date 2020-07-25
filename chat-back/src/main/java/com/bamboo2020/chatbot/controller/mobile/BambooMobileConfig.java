package com.bamboo2020.chatbot.controller.mobile;


import java.util.ArrayList;
import java.util.List;

//import com.rooting.best.config.session.HttpFrontRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@Configuration
@ComponentScan
@EnableSwagger2
public class BambooMobileConfig extends WebMvcConfigurationSupport {

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        //objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        super.configureMessageConverters(converters);
        converters.add(new MappingJackson2HttpMessageConverter());
    }

//    @Bean
//    public Docket api() {
//        List<Parameter> parameters = new ArrayList<>();
//        parameters.add(new ParameterBuilder()
//                .name("x-session-info")
//                .description("sessionInfo")
//                .parameterType("header")
//                .required(false)
//                .modelRef(new ModelRef("string"))
//                .build());
//
//        return new Docket(DocumentationType.SWAGGER_2)
//                .globalOperationParameters(parameters)
//                .ignoredParameterTypes(HttpFrontRequest.class)
//                .groupName("Rooting-API")
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.rooting.best.controller.mobile"))
////          .paths(PathSelectors.any())s
//                .paths(PathSelectors.regex("^((?!OnlyTest).)*$"))    //OnlyTest를 가진 url은 swagger에 비노출
//                .build()
//                .apiInfo(apiEndPointsInfo())
//                ;
//    }

    private ApiInfo apiEndPointsInfo() {
        String desc = "api";
        return new ApiInfoBuilder().title("Rooting - Mobile API")
                .description(desc)
                .license("Apache 2.0")
                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
                .version("V 0.1")
                .build();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowCredentials(false).allowedOrigins("*").allowedMethods("GET", "POST", "OPTIONS");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addRedirectViewController("/api/v2/api-docs", "/v2/api-docs");
        registry.addRedirectViewController("/api/swagger-resources/configuration/ui", "/swagger-resources/configuration/ui");
        registry.addRedirectViewController("/api/swagger-resources/configuration/security", "/swagger-resources/configuration/security");
        registry.addRedirectViewController("/api/swagger-resources", "/swagger-resources");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}