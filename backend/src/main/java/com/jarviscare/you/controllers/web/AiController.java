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

//@RequestBody AiQuestionDto questionDto --> recebe um JSON com os dados da pergunta no corpo da requisição e transforma num objeto Java (questionDto).
    //@Valid >> ativa validação automatica dos @NotNull
    //BindingResult bindingResult >> guarda os erros de validação se existirem
    @RequestMapping(method = RequestMethod.POST, path = {"/careassistant", "/careassistant/"})
    public ResponseEntity<AiAnswerDto> info(@Valid @RequestBody AiQuestionDto questionDto, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(generationAnswerDto.convert(aiService.info(questionDto.getQuestion())), HttpStatus.OK);
    //questionDto.getQuestion() >> pega na pergunta feita pelo paciente
        //aiService.info chama o serviço de AI e passa a questão ao LLM que vai gerar a resposta
    //generationAnswerDto.convert >> transforma o resultado (Generation) em DTO (AiAnswerDto) para devolver ao cliente
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
