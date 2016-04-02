package com.siqueries.datioml;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import com.siqueries.datioml.config.ServiceConfiguration;
import com.siqueries.datioml.resources.HomeResource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author ebot
 */
public class RestServer extends Application<ServiceConfiguration> {

    private static final Logger logger = LoggerFactory.getLogger(RestServer.class);
    static boolean production = false;

    public static void main(String[] args) throws Exception{

        if (production) {
            logger.info("Starting DatioML REST API for Prediction prod mode on http://localhost:12000");
            new RestServer().run(new String[]{args[0], args[1]});
        } else {
            logger.info("Starting DatioML REST API for Prediction dev mode on http://localhost:12000");
            new RestServer().run(new String[]{"server", "src/main/resources/config.yml"});
        }
    }


    @Override
    public String getName() {
        return "DatioML v1.0.1";
    }

    @Override
    public void initialize(Bootstrap<ServiceConfiguration> bootstrap) {
    }

    @Override
    public void run(ServiceConfiguration configuration, Environment environment) throws Exception {

        logger.info("Registering resources");
        environment.jersey().register(new HomeResource());

    }

}
