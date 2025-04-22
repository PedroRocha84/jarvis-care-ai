package com.jarviscare.you.services;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AiServiceImp implements AiService {

    @Value("${ai.api_key}")
    private String apiKey;
    @Value("${ai.chat.model}")
    private String chatModel;
    @Value("${ai.temperature}")
    private Float temperature;

    @Override
    public String motivationalQuote() {
        OpenAiApi openaiApi = new OpenAiApi(apiKey);

        OpenAiChatOptions chatOptions = OpenAiChatOptions.builder()
                .withModel(chatModel)
                .withTemperature(temperature)
                .build();

        Prompt prompt = new Prompt("Write a short (max 15 words) motivational quote for cancer patients to uplift their spirit during treatment. The quote should be warm, encouraging, and instill strength, hope, and resilience on their journey to recovery.");

        OpenAiChatClient chatClient = new OpenAiChatClient(openaiApi, chatOptions);

        try{
            return  chatClient.call(prompt).getResult().getOutput().getContent();
        }catch (Exception e) {
            return "Stay strong! Your courage lights the path to recovery.";
        }

    }
}
