const chatbotData = [

{
    keywords: [
        "rag",
        "what is rag",
        "define rag",
        "tell me about rag"
    ],
    answer: "RAG (Retrieval-Augmented Generation) is an AI architecture that combines information retrieval with a Large Language Model (LLM). Before generating an answer, it retrieves relevant information from external documents, making responses more accurate and reducing hallucinations."
},

{
    keywords: [
        "retrieval augmented generation",
        "full form of rag"
    ],
    answer: "The full form of RAG is Retrieval-Augmented Generation. It retrieves relevant documents first and then generates an answer using those documents as context."
},

{
    keywords: [
        "llm",
        "large language model"
    ],
    answer: "A Large Language Model (LLM) is an AI model trained on massive text datasets. Examples include GPT, Gemini, Claude, and Llama."
},

{
    keywords: [
        "retriever",
        "retrieval"
    ],
    answer: "The Retriever is the first component in a RAG system. It searches the knowledge base and retrieves the most relevant documents for the user's question."
},

{
    keywords: [
        "generator"
    ],
    answer: "The Generator is usually a Large Language Model (LLM). It reads the retrieved documents and generates a natural language response."
},

{
    keywords: [
        "knowledge base"
    ],
    answer: "A Knowledge Base is a collection of documents, PDFs, web pages, or databases that the Retriever searches to answer user questions."
},

{
    keywords: [
        "embedding"
    ],
    answer: "An embedding is a numerical representation of text. Similar meanings produce similar vectors, allowing semantic search."
},

{
    keywords: [
        "embedding model"
    ],
    answer: "An Embedding Model converts text into vectors. These vectors are stored in vector databases and used for similarity search."
},

{
    keywords: [
        "vector"
    ],
    answer: "A vector is a list of numbers representing the meaning of text in mathematical space."
},

{
    keywords: [
        "vector database"
    ],
    answer: "A Vector Database stores embeddings and quickly finds similar vectors. Popular databases include Pinecone, ChromaDB, FAISS, Milvus, and Weaviate."
},

{
    keywords: [
        "pinecone"
    ],
    answer: "Pinecone is a cloud-based vector database designed for semantic search and Retrieval-Augmented Generation applications."
},

{
    keywords: [
        "chromadb"
    ],
    answer: "ChromaDB is an open-source vector database commonly used with LangChain and LlamaIndex."
},

{
    keywords: [
        "faiss"
    ],
    answer: "FAISS (Facebook AI Similarity Search) is a library developed by Meta for efficient vector similarity search."
},

{
    keywords: [
        "milvus"
    ],
    answer: "Milvus is an open-source vector database optimized for storing and searching billions of embeddings."
},

{
    keywords: [
        "weaviate"
    ],
    answer: "Weaviate is an open-source vector search engine supporting semantic search and AI applications."
},

{
    keywords: [
        "semantic search"
    ],
    answer: "Semantic Search finds information based on meaning instead of exact keywords."
},

{
    keywords: [
        "keyword search"
    ],
    answer: "Keyword Search finds results using exact words entered by the user. Your chatbot project uses keyword matching."
},

{
    keywords: [
        "hybrid search"
    ],
    answer: "Hybrid Search combines keyword search with semantic search for better retrieval accuracy."
},

{
    keywords: [
        "chunking"
    ],
    answer: "Chunking is the process of splitting large documents into smaller sections before creating embeddings."
},

{
    keywords: [
        "text splitter"
    ],
    answer: "A Text Splitter divides long documents into chunks so they fit within an LLM's context window."
},

{
    keywords: [
        "metadata"
    ],
    answer: "Metadata stores extra information such as document name, author, page number, and source."
},

{
    keywords: [
        "context"
    ],
    answer: "Context is the retrieved information provided to the LLM before it generates an answer."
},

{
    keywords: [
        "hallucination"
    ],
    answer: "Hallucination occurs when an AI generates false or incorrect information. RAG reduces hallucinations by retrieving trusted data."
},

{
    keywords: [
        "similarity search"
    ],
    answer: "Similarity Search compares embeddings and returns documents with the closest meaning."
},

{
    keywords: [
        "cosine similarity"
    ],
    answer: "Cosine Similarity measures how similar two vectors are. It is one of the most common similarity metrics in RAG."
},

{
    keywords: [
        "top k"
    ],
    answer: "Top-K refers to the number of most relevant documents retrieved from the vector database."
},

{
    keywords: [
        "reranking"
    ],
    answer: "Reranking sorts retrieved documents again to improve the quality of the final context."
},

{
    keywords: [
        "query"
    ],
    answer: "A Query is the user's question entered into the chatbot."
},

{
    keywords: [
        "query expansion"
    ],
    answer: "Query Expansion improves retrieval by adding related words or synonyms to the user's query."
},

{
    keywords: [
        "document loader"
    ],
    answer: "A Document Loader reads documents such as PDF, DOCX, TXT, CSV, or HTML files into a RAG pipeline."
},

{
    keywords: [
        "pdf loader"
    ],
    answer: "A PDF Loader extracts text from PDF files before chunking and embedding."
}

];