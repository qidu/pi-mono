import { getAllQNAIGCModels, getQNAIGCModel } from '../src/index.js';
import { stream } from '@mariozechner/pi-ai';

async function main() {
  // Get all available QNAIGC models
  const models = getAllQNAIGCModels();
  console.log('Available QNAIGC models:');
  models.forEach(model => {
    console.log(`- ${model.id}: ${model.name} (context: ${model.contextWindow}, max tokens: ${model.maxTokens})`);
  });

  // Get a specific model
  const model = getQNAIGCModel('deepseek/deepseek-v3.2-251201');
  if (!model) {
    console.error('Model not found');
    return;
  }

  console.log(`\nSelected model: ${model.name}`);

  // Check if API key is set
  const apiKey = process.env.QNAIGC_API_KEY;
  if (!apiKey) {
    console.error('Please set QNAIGC_API_KEY environment variable');
    return;
  }

  // Example usage with pi-ai
  try {
    const response = await stream(model, {
      messages: [{ role: 'user', content: 'Hello! Tell me a short joke.' }],
      apiKey,
      maxTokens: 100,
    });

    for await (const event of response) {
      if (event.type === 'text') {
        process.stdout.write(event.text);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);
