package com.jarviscare.you.services;
import com.jarviscare.you.persistence.AiVectorStore;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.document.Document;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AiServiceImp implements AiService {

    @Value("${ai.api_key}")
    private String apiKey;
    @Value("${ai.chat.model}")
    private String chatModel;
    @Value("${ai.temperature}")
    private Float temperature;

    @Value("${ai.rag_prompt_template}")
    private Resource ragPromptTemplate;

    private ChatClient chatClient;
    private AiVectorStore vectorStore;

    @Value("${ai.rag_number_results}")
    private int numberResults;
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

    @Override
    public Generation info(String question) {
        List<String> contentList = vectorStore.search(question);

        PromptTemplate promptTemplate = new PromptTemplate(ragPromptTemplate);
        Prompt prompt = promptTemplate.create(Map.of(
                "input", question,
                "documents", String.join("\n", contentList)));

        return chatClient.call(prompt).getResult();
    }

    /**
     * Set the chat client
     * @param chatClient to chat
     */
    @Autowired
    public void setChatClient(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    /**
     * Set the vector store
     * @param vectorStore to set
     */
    @Autowired
    public void setStore(AiVectorStore vectorStore) {
        this.vectorStore = vectorStore;
    }
}
