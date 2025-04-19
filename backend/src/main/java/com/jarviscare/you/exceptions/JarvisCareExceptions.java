package com.jarviscare.you.exceptions;

/**
 * A generic java bank exception to be used as base for concrete types of exceptions
 *
 * @see Exception
 */
public class JarvisCareExceptions extends Exception {

    /**
     * @see Exception#Exception(String)
     */
    public JarvisCareExceptions(String message) {
        super(message);
    }
}
