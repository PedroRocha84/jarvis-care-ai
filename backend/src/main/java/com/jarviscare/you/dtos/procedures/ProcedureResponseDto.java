package com.jarviscare.you.dtos.procedures;

public class ProcedureResponseDto {

    private Integer id;
    private String message;

    public ProcedureResponseDto(Integer id, String message){
        this.id = id;
        this.message = message;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
