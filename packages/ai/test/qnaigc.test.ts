import { describe, expect, it } from "vitest";
import { getModel } from "../src/models.js";

describe("QNAIGC Provider", () => {
	it("should have minimax/minimax-m2.5 model", () => {
		const model = getModel("QNAIGC", "minimax/minimax-m2.5");
		expect(model).toBeDefined();
		expect(model.id).toBe("minimax/minimax-m2.5");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.baseUrl).toBe("https://anthropic.qnaigc.com");
	});

	it("should have correct configuration for minimax/minimax-m2.5 model", () => {
		const model = getModel("QNAIGC", "minimax/minimax-m2.5");
		expect(model.name).toBe("MiniMax M2.5 (QNAIGC)");
		expect(model.reasoning).toBe(false);
		expect(model.input).toEqual(["text"]);
		expect(model.contextWindow).toBe(128000);
		expect(model.maxTokens).toBe(4096);
		expect(model.cost).toEqual({
			input: 0,
			output: 0,
			cacheRead: 0,
			cacheWrite: 0,
		});
	});

	it("should retrieve minimax/minimax-m2.5 model from all models list", () => {
		// Test that getModel function works correctly
		const model = getModel("QNAIGC", "minimax/minimax-m2.5");
		expect(model).toBeDefined();
		expect(model.id).toBe("minimax/minimax-m2.5");
		expect(model.provider).toBe("QNAIGC");
	});

	it("should not have reasoning enabled for minimax/minimax-m2.5 model", () => {
		const model = getModel("QNAIGC", "minimax/minimax-m2.5");
		// This model should not have reasoning capability
		expect(model.reasoning).toBe(false);
		// Check that reasoning is explicitly false, not undefined
		expect(model.reasoning).toBeDefined();
	});

	it("should have anthropic-messages API type for minimax/minimax-m2.5 model", () => {
		const model = getModel("QNAIGC", "minimax/minimax-m2.5");
		expect(model.api).toBe("anthropic-messages");
		// Verify it uses the anthropic-messages API
		expect(model.api).not.toBe("openai-completions");
		expect(model.api).not.toBe("google-gemini");
	});

	it("should only be available in QNAIGC provider for minimax/minimax-m2.5 model", () => {
		// Test that the model is not available from other providers
		// @ts-expect-error - model not available in openai provider
		expect(getModel("openai", "minimax/minimax-m2.5")).toBeUndefined();
		// @ts-expect-error - model not available in anthropic provider
		expect(getModel("anthropic", "minimax/minimax-m2.5")).toBeUndefined();
		// @ts-expect-error - model not available in google provider
		expect(getModel("google", "minimax/minimax-m2.5")).toBeUndefined();
		// But should be available from QNAIGC
		expect(getModel("QNAIGC", "minimax/minimax-m2.5")).toBeDefined();
	});

	it("should have deepseek-r1-0528 model", () => {
		const model = getModel("QNAIGC", "deepseek-r1-0528");
		expect(model).toBeDefined();
		expect(model.id).toBe("deepseek-r1-0528");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.reasoning).toBe(true);
	});

	it("should have deepseek/deepseek-v3.2-251201 model", () => {
		const model = getModel("QNAIGC", "deepseek/deepseek-v3.2-251201");
		expect(model).toBeDefined();
		expect(model.id).toBe("deepseek/deepseek-v3.2-251201");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
	});

	it("should have doubao-seed-1.6 model", () => {
		const model = getModel("QNAIGC", "doubao-seed-1.6");
		expect(model).toBeDefined();
		expect(model.id).toBe("doubao-seed-1.6");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
	});

	it("should have meituan/longcat-flash-lite model", () => {
		const model = getModel("QNAIGC", "meituan/longcat-flash-lite");
		expect(model).toBeDefined();
		expect(model.id).toBe("meituan/longcat-flash-lite");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
	});

	it("should have moonshotai/kimi-k2.5 model", () => {
		const model = getModel("QNAIGC", "moonshotai/kimi-k2.5");
		expect(model).toBeDefined();
		expect(model.id).toBe("moonshotai/kimi-k2.5");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.reasoning).toBe(true);
	});

	it("should have stepfun/step-3.5-flash model", () => {
		const model = getModel("QNAIGC", "stepfun/step-3.5-flash");
		expect(model).toBeDefined();
		expect(model.id).toBe("stepfun/step-3.5-flash");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.reasoning).toBe(false);
	});

	it("should have doubao-seed-2.0-mini model", () => {
		const model = getModel("QNAIGC", "doubao-seed-2.0-mini");
		expect(model).toBeDefined();
		expect(model.id).toBe("doubao-seed-2.0-mini");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.reasoning).toBe(false);
	});

	it("should have minimax/minimax-m2.5-highspeed model", () => {
		const model = getModel("QNAIGC", "minimax/minimax-m2.5-highspeed");
		expect(model).toBeDefined();
		expect(model.id).toBe("minimax/minimax-m2.5-highspeed");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.reasoning).toBe(false);
	});

	it("should have z-ai/glm-5 model", () => {
		const model = getModel("QNAIGC", "z-ai/glm-5");
		expect(model).toBeDefined();
		expect(model.id).toBe("z-ai/glm-5");
		expect(model.provider).toBe("QNAIGC");
		expect(model.api).toBe("anthropic-messages");
		expect(model.reasoning).toBe(false);
	});
});
