package com.jarviscare.you.dtos;

import jakarta.validation.constraints.NotNull;

public class AiAnswerDto {


    @NotNull(message = "Answer is mandatory")
    private String answer;


    /**
     * Get the answer
     *
     * @return the answer, which is guaranteed to be non-null due to validation.
     */
    public @NotNull(message = "Answer is mandatory") String getAnswer() {
        return answer;
    }

    /**
     * Set the answer
     *
     * @param answer the answer to set, which must not be null.
     */
    public void setAnswer(@NotNull(message = "Answer is mandatory") String answer) {
        this.answer = answer;
    }

}
