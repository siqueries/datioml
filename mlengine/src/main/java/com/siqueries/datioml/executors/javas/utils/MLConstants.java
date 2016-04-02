package com.siqueries.datioml.executors.javas.utils;

/**
 * Created by ebottabi on 3/20/16.
 */
public class MLConstants {

    public enum MISSING_VALUES {
        EMPTY(""), NA("NA"), QUESTION("?");

        private final String value;
        private MISSING_VALUES(final String str) {
            this.value = str;
        }

        @Override
        public String toString() {
            return value;
        }

        public static boolean contains(String s) {
            for (MISSING_VALUES val : values()) {
                if (val.toString().equals(s)) {
                    return true;
                }
            }
            return false;
        }
    }
}
