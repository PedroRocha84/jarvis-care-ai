package com.jarviscare.you.Converters;

import com.jarviscare.you.dtos.AiAnswerDto;
import org.springframework.ai.chat.Generation;
import org.springframework.stereotype.Component;

@Component
public class AiGenerationAnswerDto {


    public AiAnswerDto convert(Generation generation) {
        AiAnswerDto answerDto = new AiAnswerDto();

        answerDto.setAnswer(generation.getOutput().getContent());
        return answerDto;
    }
}
