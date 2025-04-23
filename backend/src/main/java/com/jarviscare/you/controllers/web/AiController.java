package com.jarviscare.you.controllers.web;

import com.jarviscare.you.Converters.AiGenerationAnswerDto;
import com.jarviscare.you.dtos.AiAnswerDto;
import com.jarviscare.you.dtos.AiQuestionDto;
import com.jarviscare.you.services.AiService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/ai")
public class AiController {

    private AiService aiService;
    private AiGenerationAnswerDto generationAnswerDto;

    @RequestMapping(method = RequestMethod.POST, path = {"/careassistant", "/careassistant/"})
    public ResponseEntity<AiAnswerDto> info(@Valid @RequestBody AiQuestionDto questionDto, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(generationAnswerDto.convert(aiService.info(questionDto.getQuestion())), HttpStatus.OK);
         }

    /**
     * Set the AI service
     * @param aiService to set
     */
    @Autowired
    public void setAiService(AiService aiService) {
        this.aiService = aiService;
    }

    /**
     * Set the GenerationToAnswerDto converter
     * @param generationToAnswerDto to set
     */
    @Autowired
    public void setGenerationToAnswerDto(AiGenerationAnswerDto generationToAnswerDto) {
        this.generationAnswerDto = generationToAnswerDto;
    }

}
