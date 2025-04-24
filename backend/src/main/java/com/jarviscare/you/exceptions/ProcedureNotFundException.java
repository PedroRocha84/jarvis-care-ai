package com.jarviscare.you.exceptions;

import com.jarviscare.you.errors.ErrorMessage;

public class ProcedureNotFundException extends JarvisCareExceptions {

    /**
     * @see JarvisCareExceptions#JarvisCareExceptions(String)
     */
    public ProcedureNotFundException() {
        super(ErrorMessage.PROCEDURE_NOT_FOUND);
    }
}
