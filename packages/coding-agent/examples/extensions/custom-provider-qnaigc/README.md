# QNAIGC Provider Extension for pi-mono

This package provides QNAIGC models for use with the [pi-mono](https://github.com/badlogic/pi-mono) AI library.

## Installation

### As npm package
```bash
npm install @qidu/qnaigc-provider
```

### As pi extension
```bash
pi install npm:@qidu/qnaigc-provider
```

## Extension Commands

When installed as a pi extension, these commands are available:
- `/qnaigc:list-models` - List all available QNAIGC models
- `/qnaigc:info` - Show QNAIGC provider information

## Usage

```typescript
import { getAllQNAIGCModels, getQNAIGCModel } from '@qidu/qnaigc-provider';
import { stream } from '@mariozechner/pi-ai';

// Get all QNAIGC models
const qnaigcModels = getAllQNAIGCModels();

// Get a specific model
const model = getQNAIGCModel('deepseek/deepseek-v3.2-251201');

// Use with pi-ai stream function — NOTE: apiKey must be provided explicitly when using these models
const response = await stream(model, {
  messages: [{ role: 'user', content: 'Hello!' }],
  apiKey: process.env.QNAIGC_API_KEY, // explicit apiKey required (see note below)
});
```

Important note about API key discovery

- QNAIGC models in this package intentionally use `provider: "QNAIGC"` and `api: "anthropic-messages"` with a QNAIGC base URL.
- The pi-ai library's automatic environment variable lookup (getEnvApiKey) recognizes a fixed set of provider slugs (for example `"anthropic"`, `"openai"`, etc.). Because `"QNAIGC"` is a custom provider slug, pi-ai will not automatically find `QNAIGC_API_KEY` when you call stream(model, ... ) without an explicit `apiKey`.
- There are three ways to provide credentials when using these models:
  1. Pass the API key explicitly in call options (recommended):

```ts
await stream(model, { messages, apiKey: process.env.QNAIGC_API_KEY });
```

  2. Use the canonical Anthropic env var (legacy approach): set `ANTHROPIC_API_KEY` or `ANTHROPIC_OAUTH_TOKEN` to your QNAIGC key/token. The built-in Anthropic streamer will pick this up if the `model.provider` is `"anthropic"`.

  3. Alternatively, if you prefer seamless env-var discovery without passing `apiKey`, you can fork or wrap this extension to register a custom API provider that maps `QNAIGC_API_KEY` into calls to the Anthropic streamer. (This package intentionally does not register a runtime provider wrapper.)

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

Set the `QNAIGC_API_KEY` environment variable to your QNAIGC API key and pass it explicitly to pi-ai calls, or set `ANTHROPIC_API_KEY`/`ANTHROPIC_OAUTH_TOKEN` if you prefer reuse of Anthropic's canonical env vars.

## How It Works

QNAIGC provides an Anthropic-compatible API endpoint at `https://anthropic.qnaigc.com`. This extension provides pre-configured models that use the `anthropic-messages` API with the QNAIGC base URL.

## License

MIT
