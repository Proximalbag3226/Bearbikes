package com.example.bearbikes_react.utils;

import java.util.Random;

public class Utils {
    private static final Random randomizer = new Random();

    private Utils() {
    }

    /**
     * Generates a random String Token by adding random ASCII characters between 48 and 123
     *
     * @param length an int value indicating the token length
     * @return a String representation of the token
     */
    public static String generateRandomToken(int length) {
        StringBuilder randomToken = new StringBuilder();
        for (int i = 0; i < length; i++) {
            randomToken.append((char) randomizer.nextInt(48, 123));
        }
        return randomToken.toString();
    }
}
