import type { Model } from '@mariozechner/pi-ai';

export const QNAIGC_BASE_URL = 'https://anthropic.qnaigc.com';

export interface QNAIGCModel extends Model<'anthropic-messages'> {
  provider: 'QNAIGC';
  baseUrl: typeof QNAIGC_BASE_URL;
}

export const QNAIGC_MODELS: readonly QNAIGCModel[] = [
  {
    id: 'minimax/minimax-m2.5',
    name: 'MiniMax M2.5 (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 204800,
    maxTokens: 128000,
  },
  {
    id: 'deepseek-r1-0528',
    name: 'DeepSeek R1 0528 (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: true,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 32000,
  },
  {
    id: 'meituan/longcat-flash-lite',
    name: 'Meituan LongCat Flash Lite (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: 320000,
  },
  {
    id: 'doubao-seed-1.6',
    name: 'Doubao Seed 1.6 (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: 32000,
  },
  {
    id: 'moonshotai/kimi-k2.5',
    name: 'Moonshot AI Kimi K2.5 (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: true,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: 256000,
  },
  {
    id: 'deepseek/deepseek-v3.2-251201',
    name: 'DeepSeek V3.2 251201 (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 32000,
  },
  {
    id: 'doubao-seed-2.0-mini',
    name: 'Doubao Seed 2.0 Mini (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: 32000,
  },
  {
    id: 'minimax/minimax-m2.5-highspeed',
    name: 'MiniMax M2.5 HighSpeed (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 204800,
    maxTokens: 128000,
  },
  {
    id: 'z-ai/glm-5',
    name: 'Z-AI GLM-5 (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 32000,
  },
  {
    id: 'stepfun/step-3.5-flash',
    name: 'StepFun Step 3.5 Flash (QNAIGC)',
    api: 'anthropic-messages',
    provider: 'QNAIGC',
    baseUrl: QNAIGC_BASE_URL,
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: 32000,
  },
] as const;

export function getQNAIGCModel(id: string): QNAIGCModel | undefined {
  return QNAIGC_MODELS.find(model => model.id === id);
}

export function getAllQNAIGCModels(): readonly QNAIGCModel[] {
  return QNAIGC_MODELS;
}

export function getQNAIGCModelIds(): readonly string[] {
  return QNAIGC_MODELS.map(model => model.id);
}

export function getQNAIGCModelNames(): readonly string[] {
  return QNAIGC_MODELS.map(model => model.name);
}
