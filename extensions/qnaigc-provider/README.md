# QNAIGC Provider Extension for pi-mono

This package provides QNAIGC models for use with the [pi-mono](https://github.com/badlogic/pi-mono) AI library.

## Installation

```bash
npm install @qidu/qnaigc-provider
```

## Usage

```typescript
import { getAllQNAIGCModels, getQNAIGCModel } from '@qidu/qnaigc-provider';
import { stream } from '@mariozechner/pi-ai';

// Get all QNAIGC models
const qnaigcModels = getAllQNAIGCModels();

// Get a specific model
const model = getQNAIGCModel('deepseek/deepseek-v3.2-251201');

// Use with pi-ai stream function
const response = await stream(model, {
  messages: [{ role: 'user', content: 'Hello!' }],
  apiKey: process.env.QNAIGC_API_KEY,
});
```

## Available Models

This package provides the following QNAIGC models:

- `minimax/minimax-m2.5` - MiniMax M2.5 (QNAIGC)
- `deepseek-r1-0528` - DeepSeek R1 0528 (QNAIGC) - reasoning model
- `meituan/longcat-flash-lite` - Meituan LongCat Flash Lite (QNAIGC)
- `doubao-seed-1.6` - Doubao Seed 1.6 (QNAIGC)
- `moonshotai/kimi-k2.5` - Moonshot AI Kimi K2.5 (QNAIGC) - reasoning model
- `deepseek/deepseek-v3.2-251201` - DeepSeek V3.2 251201 (QNAIGC)
- `doubao-seed-2.0-mini` - Doubao Seed 2.0 Mini (QNAIGC)
- `minimax/minimax-m2.5-highspeed` - MiniMax M2.5 HighSpeed (QNAIGC)
- `z-ai/glm-5` - Z-AI GLM-5 (QNAIGC)
- `stepfun/step-3.5-flash` - StepFun Step 3.5 Flash (QNAIGC)

## Environment Variable

Set the `QNAIGC_API_KEY` environment variable to your QNAIGC API key.

## How It Works

QNAIGC provides an Anthropic-compatible API endpoint at `https://anthropic.qnaigc.com`. This extension provides pre-configured models that use the `anthropic-messages` API with the QNAIGC base URL.

## License

MIT
