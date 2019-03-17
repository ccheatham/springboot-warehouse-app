package com.ched.inventory.util;

import com.google.common.base.Predicate;
import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private Docket docket = new Docket(DocumentationType.SPRING_WEB.SWAGGER_2);

    @Bean
    public Docket produceApi() {
        return docket
                .host("localhost:3000")
                .apiInfo(getApiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.ched.inventory.api"))
                .paths(getPaths())
                .build();
    }


    private ApiInfo getApiInfo() {
        return new ApiInfoBuilder().title("Inventory API")
                .contact("ched.cheatham@gmail.com")
                .description("RESTful endpoints for the springboot warehouse app's CRUD operations")
                .build();
    }


    private Predicate<String> getPaths() {
        return Predicates.and(
                PathSelectors.regex("/api.*"));
    }
}
