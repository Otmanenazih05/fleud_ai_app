import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const getArticleSummary = async (length, articleTitle, summariseMode, articleContent, text) => {
    try {
        const prompt = `
            You are a helpful assistant.
            Task: Summarize the following text to about ${length}% of its original length.
            Also generate a short, catchy title if the one provided is generic.
            
            Input Title: ${articleTitle}
            Input Text: "${summariseMode === 'url' ? articleContent.substring(0, 20000) : text}"
            
            Output Format: Return valid JSON only.
            {
                "summary": "Your markdown summary here...",
                "title": "The Title",
                "key_points": ["point 1", "point 2"],
                "source": "The Source"
            }
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json|```/g, '').trim();
        const aiData = JSON.parse(cleanJson);

        if (!aiData) {
            throw new Error("AI failed to generate summary");
        }

        return {
            success: true,
            error: null,
            title: aiData.title,
            summary: aiData.summary,
            keyPoints: aiData.key_points,
            source: aiData.source,
            postLength: aiData.summary.length
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export const getVideoSummary = async (transcript, length) => {
    try {
        const prompt = `
            You are a helpful assistant.
            Task: Summarize the following text to about ${length}% of its original length.
            Also generate a short, catchy title if the one provided is generic or wasn't provided.
            The following text is a transcript of a YouTube video. It may contain errors typical of auto-generated captions. 
            Please summarize the key takeaways and main points of this video into a concise article format.
            
            Input Text: "${transcript.substring(0, 20000)}"
            
            Output Format: Return valid JSON only.
            {
                "summary": "Your markdown summary here...",
                "title": "The Title",
                "key_points": ["point 1", "point 2"],
                "source": "The Source/ Video URL"
            }
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json|```/g, '').trim();
        const aiData = JSON.parse(cleanJson);

        if (!aiData) {
            throw new Error("AI failed to generate summary");
        }

        return {
            success: true,
            error: null,
            title: aiData.title,
            summary: aiData.summary,
            keyPoints: aiData.key_points,
            source: aiData.source,
            postLength: aiData.summary.length
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export const getDocumentSummary = async ({ text, base64, mimeType, length }) => {
    try {
        const prompt = `
            You are a helpful assistant.
            Task: Summarize the provided document to about ${length}% of its original length.
            Also generate a short, catchy title if the one provided is generic or wasn't provided.
            Please summarize the key takeaways and main points of this document into a concise article format.
            Analyze the entire provided document thoroughly.
            
            Output Format: Return valid JSON only.
            {
                "summary": "Your markdown summary here...",
                "title": "The Title",
                "key_points": ["point 1", "point 2", "point 3"]
            }
        `;

        let contentParts = [prompt];

        if (text) {
            contentParts.push(`Input Document Content:
             """
             ${text}
             """`);
        } else if (base64 && mimeType) {
            contentParts.push({
                inlineData: {
                    data: base64,
                    mimeType: mimeType
                }
            });
        }

        const result = await model.generateContent(contentParts);
        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json|```/g, '').trim();
        const aiData = JSON.parse(cleanJson);

        if (!aiData) {
            throw new Error("AI failed to generate summary");
        }

        return {
            success: true,
            error: null,
            title: aiData.title,
            summary: aiData.summary,
            keyPoints: aiData.key_points,
            postLength: aiData.summary.length
        }
    } catch (error) {
        console.error("Error in getDocumentSummary:", error);
        return {
            success: false,
            error: error.message
        }
    }
}