import { execSync } from "child_process";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function main() {
  let originalClipboardContent = "";
  try {
    execSync(`notify-send "Generating..."`);

    originalClipboardContent = execSync("xclip -o -selection clipboard").toString().trim();

    execSync("xdotool key ctrl+c");
    await new Promise(resolve => setTimeout(resolve, 100));

    const inputText = execSync("xclip -o -selection clipboard").toString().trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Correct the grammar and spelling mistakes in the following sentence, but do not change the meaning or structure. 
Only output the corrected sentence, no explanations or extra text:

${inputText}`,
    });

    let output = response.text;
    output = output.replace(/[-–—:;]+/g, " ");

    execSync(`xdotool type "${output}"`);
  } catch (error) {
    execSync(`notify-send "Error: ${error.message}"`);
  } finally {
    if (originalClipboardContent) {
      execSync(`echo -n "${originalClipboardContent}" | xclip -i -selection clipboard`);
    }
  }
}

main();