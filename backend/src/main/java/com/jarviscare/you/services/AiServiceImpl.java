package com.jarviscare.you.services;

import com.jarviscare.you.persistence.AiVectorStore;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.core.io.Resource;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AiServiceImpl implements AiService {

    @Value("${ai.rag_prompt_template}")
    private Resource ragPromptTemplate;

    private ChatClient chatClient;
    private AiVectorStore vectorStore;

    @Value("${ai.rag_number_results}")
    private int numberResults;

    @Override
    public Generation info(String question) {
        List<String> contentList = vectorStore.search(question);

//        List<Document> documents = vectorStore.similaritySearch(SearchRequest.query(question).withTopK(numberResults));
//        List<String> contentList = documents.stream().map(Document::getContent).toList();

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
