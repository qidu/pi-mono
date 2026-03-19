/**
 * QNAIGC Provider Extension
 *
 * Provides QNAIGC models for use with pi-mono's AI library.
 * QNAIGC offers an Anthropic-compatible API with access to Chinese LLMs.
 */

import type { ExtensionAPI, ExtensionCommandContext } from "@mariozechner/pi-coding-agent";
import { getAllQNAIGCModels, QNAIGC_BASE_URL } from '../src/index.js';

export default function (pi: ExtensionAPI) {
  // Register commands
  pi.registerCommand('qnaigc:list-models', {
    description: 'List all available QNAIGC models',
    handler: async (_args: string, _ctx: ExtensionCommandContext) => {
      const models = getAllQNAIGCModels();
      console.log(`Available QNAIGC models:\n${models.map(m => `- ${m.id}: ${m.name} (context: ${m.contextWindow}, max tokens: ${m.maxTokens})`).join('\n')}`);
    },
  });

  pi.registerCommand('qnaigc:info', {
    description: 'Show QNAIGC provider information',
    handler: async (_args: string, _ctx: ExtensionCommandContext) => {
      console.log(`QNAIGC Provider
Base URL: ${QNAIGC_BASE_URL}
Models: ${getAllQNAIGCModels().length} available
Environment Variable: QNAIGC_API_KEY
Description: Anthropic-compatible API for Chinese LLMs including DeepSeek, MiniMax, Qwen, and others.`);
    },
  });

  // Log extension loading
  console.log(`QNAIGC Provider Extension loaded: ${getAllQNAIGCModels().length} models available`);
}