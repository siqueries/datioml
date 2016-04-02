package com.siqueries.datio.server.javautils;

import au.com.bytecode.opencsv.CSVReader;
import org.apache.commons.lang3.StringUtils;

import java.io.FileReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.*;

import org.json.simple.JSONArray;

public class CsvUtil {
    
    private static final String DB_DRIVER = "org.mysql.Driver";
    private static final String H2_DB_DRIVER = "org.h2.Driver";

    public String getHeadersMeta(String delimiter, String filePath){
        List<HashMap<String, String>> headersDataType = new ArrayList<>();
        try{
            CSVReader reader = new CSVReader(new FileReader(filePath), delimiter.charAt(0));
            try{
                String[] headers = reader.readNext();
                List<String[]> records = reader.readAll();
                Iterator<String[]> iterator = records.iterator();
                int counter = 0;
                while(iterator.hasNext()){
                    //use the counter to make sure we get just only one row of data to verify the data types.
                    if(counter > 0){
                        String[] record = iterator.next();
                        for(int i = 0; i < headers.length; i++){
                            HashMap<String, String> header = new HashMap<>();
                            header.put("name", headers[i]);
                            header.put("dataType", getFrontendDataType(record[i]));
                            header.put("index", String.valueOf(i));
                            headersDataType.add(header);
                        }
                        break;
                    }
                    counter++;
                }
            }catch (IOException e){
                System.out.println(e.getMessage());
            }
        }catch (FileNotFoundException e){
            System.out.println(e.getMessage());
        }
        return JSONArray.toJSONString(headersDataType);
    }


    public void writeToH2Database(String delimiter, String filePath, String tableName){

        try{
            CSVReader reader = new CSVReader(new FileReader(filePath), delimiter.charAt(0));
            String[] headers = reader.readNext();
            String sqlCreateTableStmt = "CREATE TABLE IF NOT EXISTS " + tableName + "(\n";

            List<String> columnsNameTypeList = new ArrayList<>();
            List<String> columnsNameInsertList = new ArrayList<>();
            List<HashMap<String, String>> headersDataType = new ArrayList<>();

            columnsNameInsertList.addAll(Arrays.asList(headers));

            List<String[]> records = reader.readAll();
            Iterator<String[]> iterator = records.iterator();
            Iterator<String[]> iteratorChecks = iterator;


            int counter = 0;
            while(iteratorChecks.hasNext()){
                //use the counter to make sure we get just only one row of data to verify the data types.
                if(counter > 0){
                    String[] record = iteratorChecks.next();
                    System.out.println(record.toString());
                    for(int i = 0; i < headers.length; i++){
                        HashMap<String, String> header = new HashMap<>();
                        header.put("name", headers[i]);
                        header.put("dataType", getDataType(record[i]));
                        header.put("index", String.valueOf(i));
                        headersDataType.add(header);
                    }
                    break;
                }
                counter++;
            }

            for (HashMap<String, String> header : headersDataType) {
                columnsNameTypeList.add(String.format("%s %s",header.get("name"), header.get("dataType")));
            }
            sqlCreateTableStmt += StringUtils.join(columnsNameTypeList.iterator(), ", \n") + "\n";
            sqlCreateTableStmt += ");";

            System.out.println("SQL Statement: " + sqlCreateTableStmt);

            Connection connection = getH2Connection("datiomldb", "datiomldb");
            PreparedStatement createPreparedStatement;
            PreparedStatement insertPreparedStatement;

            try {
                connection.setAutoCommit(true);
                createPreparedStatement = connection.prepareStatement(sqlCreateTableStmt);
                createPreparedStatement.executeUpdate();
                createPreparedStatement.close();
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }

            System.out.println("Data types");
            System.out.println(headersDataType.toString());

            while(iterator.hasNext()){
                String[] record = iterator.next();
                List<String> rowData = new java.util.ArrayList<>();
                for (HashMap<String, String> headerDataType : headersDataType) {
                    String columnType = headerDataType.get("dataType");
                    String columnIndex = headerDataType.get("index");

                    if (columnType.equals("datetime") || columnType.equals("time") || columnType.equals("timestamp") || columnType.equals("date")) {
                        String dateString = record[Integer.parseInt(columnIndex)];
                        String dateFormat = DateUtils.determineDateTimeFormat(dateString);
                        String formattedDate = DateUtils.parseDate(dateString, dateFormat);
                        rowData.add("'" + formattedDate + "'");
                    } else {
                        if(record[Integer.parseInt(columnIndex)].equalsIgnoreCase("NA") || record[Integer.parseInt(columnIndex)].equalsIgnoreCase("NA") ){
                            switch (columnType) {
                                case "decimal":
                                    rowData.add(("'" + 0 + "'"));
                                    break;
                            }
                        }else{
                            rowData.add("'" + record[Integer.parseInt(columnIndex)] + "'");
                        }
                        //rowData.add("'" + record[Integer.parseInt(columnIndex)] + "'");
                    }
                }
                String sql = String.format("INSERT INTO %s(%s) VALUES(%s);",
                        tableName,
                        StringUtils.join(columnsNameInsertList.iterator(), ", "),
                        StringUtils.join(rowData.iterator(), ", "));
                System.out.println(String.format("[insert]: %s", sql));
                System.out.println(sql);
                insertPreparedStatement = connection.prepareStatement(sql);
                insertPreparedStatement.executeUpdate();
                insertPreparedStatement.close();

            }
            System.out.println("done inserting records from csv file");
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM " + tableName);
            while( rs.next() ){
                System.out.println(rs);
            }

        } catch (FileNotFoundException e){
            System.out.println(e.getMessage());
        } catch (IOException e){
            System.out.println(e.getMessage());
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }

    }


    public static Connection getH2Connection(String userName, String password){

        String DB_CONNECTION = "jdbc:h2:/opt/datioml/store/DATIOML_DB;DB_CLOSE_ON_EXIT=FALSE;LOCK_TIMEOUT=60000;WRITE_DELAY=0";
        String DB_USER = userName;
        String DB_PASSWORD = password;
        Connection dbConnection = null;
        try {
            Class.forName(H2_DB_DRIVER);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        try {
            dbConnection = DriverManager.getConnection(DB_CONNECTION, DB_USER,
                    DB_PASSWORD);
            return dbConnection;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return dbConnection;
    }




    private static Connection getQueryConnection(String userName, String password, String database){
        String DB_CONNECTION = String.format("jdbc:mysql://127.0.0.1/%s", database);
        String DB_USER = userName;
        String DB_PASSWORD = password;
        Connection dbConnection = null;
        try {
            Class.forName(DB_DRIVER);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        try {
            dbConnection = DriverManager.getConnection(DB_CONNECTION, DB_USER, DB_PASSWORD);
            return dbConnection;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return dbConnection;
    }

    private static String getDataType(String value) {
        if (isInteger(value)) {
            return "integer";
        } else if (isDecimal(value)) {
            return "decimal";
        } else if (isDate(value)) {
            return "date";
        } else if (isDateTime(value)) {
            return "datetime";
        } else if (isTimeStamp(value)) {
            return "timestamp";
        } else {
            return "text";
        }

    }

    private static String getH2DataType(String value) {
        if (isInteger(value)) {
            return "integer";
        } else if (isDecimal(value)) {
            return "decimal";
        } else if (isDate(value)) {
            return "date";
        } else if (isDateTime(value)) {
            return "datetime";
        } else if (isTimeStamp(value)) {
            return "timestamp";
        } else {
            return "text";
        }

    }

    public static String getFrontendDataType(String value) {
        if (isInteger(value)) {
            return "NUMERICAL";
        } else if (isDecimal(value)) {
            return "NUMERICAL";
        } else if (isDate(value)) {
            return "CATEGORICAL";
        } else if (isDateTime(value)) {
            return "CATEGORICAL";
        } else if (isTimeStamp(value)) {
            return "CATEGORICAL";
        } else {
            return "CATEGORICAL";
        }

    }

    private static boolean isInteger(String input) {
        try {
            Integer.parseInt(input);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static String getExploreType(String input){
        switch (input)  {
            case "INT": return "Int";
            case "INTEGER": return "Int";
            case "BOOLEAN" : return "Boolean";
            case "TINYINT" : return "Tinyint";
            case "SMALLINT" : return "Smallint";
            case "BIGINT" : return "Bigint";
            case "IDENTITY" : return "";
            case "DECIMAL" : return "Decimal";
            case "DOUBLE" : return "Double";
            case "REAL" : return "Real";
            case "TIME" : return "Time";
            case "DATE" : return "Date";
            case "TIMESTAMP" : return "Timestamp";
            case "BINARY" : return "Text";
            case "OTHER" : return "Text";
            case "VARCHAR" : return "Text";
            case "VARCHAR_IGNORECASE" : return "Text";
            case "CHAR" : return "Text";
            case "BLOB" : return "Text";
            case "CLOB" : return "Text";
            case "UUID" : return "Uuid";
            case "ARRAY" : return "Array";
            case "GEOMETRY" : return "Geometry";
            default: return "";
        }
    }

    private static boolean isBoolean(String input) {
        String word = input.toLowerCase();
        switch (word) {
            case "no":
                return true;
            case "yes":
                return true;
            case "false":
                return true;
            case "true":
                return true;
            default:
                return false;
        }
    }

    private static boolean isDecimal(String input) {
        try {
            Double.parseDouble(input);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private static boolean isDate(String dateString) {
        String dateFormat = DateUtils.determineDateFormat(dateString);
        return dateFormat != null;
    }

    private static boolean isTime(String dateString) {
        String dateFormat = DateUtils.determineDateFormat(dateString);
        return dateFormat != null;
    }

    private static boolean isDateTime(String dateString) {
        String dateFormat = DateUtils.determineDateTimeFormat(dateString);
        return dateFormat != null;
    }

    public static boolean isTimeStamp(String inputString) {
        SimpleDateFormat format = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSSSSS");
        try {
            format.parse(inputString);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }
}
