package com.jarviscare.you.exceptions;

import com.jarviscare.you.errors.ErrorMessage;

/**
 * Thrown to indicate that the customer was not found
 */
public class UserNotFoundException extends JarvisCareExceptions {

    /**
     * @see JarvisCareExceptions#JarvisCareExceptions(String)
     */
    public UserNotFoundException() {
        super(ErrorMessage.USER_NOT_FOUND);
    }
}
