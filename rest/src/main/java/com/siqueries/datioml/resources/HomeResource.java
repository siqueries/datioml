package com.siqueries.datioml.resources;


import java.util.HashMap;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



/**
 *
 * @author ebot
 */
@Path("/")
public class HomeResource {

    private static final Logger logger = LoggerFactory.getLogger(HomeResource.class);

    public HomeResource() {}

    @GET
    public Response index() {
        logger.info("running mysql query now");
        return Response.status(Response.Status.OK).entity("Datio Science").build();
    }

}
