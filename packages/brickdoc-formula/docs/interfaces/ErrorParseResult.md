# Interface: ErrorParseResult

## Hierarchy

- [`BaseParseResult`](BaseParseResult.md)

  ↳ **`ErrorParseResult`**

## Table of contents

### Properties

- [completions](ErrorParseResult.md#completions)
- [errorMessages](ErrorParseResult.md#errormessages)
- [errorType](ErrorParseResult.md#errortype)
- [expressionType](ErrorParseResult.md#expressiontype)
- [inputImage](ErrorParseResult.md#inputimage)
- [parseImage](ErrorParseResult.md#parseimage)
- [success](ErrorParseResult.md#success)
- [variableParseResult](ErrorParseResult.md#variableparseresult)

## Properties

### <a id="completions" name="completions"></a> completions

• **completions**: [`Completion`](../README.md#completion)[]

#### Inherited from

[BaseParseResult](BaseParseResult.md).[completions](BaseParseResult.md#completions)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:39](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L39)

---

### <a id="errormessages" name="errormessages"></a> errorMessages

• **errorMessages**: [[`ErrorMessage`](ErrorMessage.md), ...ErrorMessage[]]

#### Overrides

[BaseParseResult](BaseParseResult.md).[errorMessages](BaseParseResult.md#errormessages)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:64](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L64)

---

### <a id="errortype" name="errortype"></a> errorType

• **errorType**: [`ParseErrorType`](../README.md#parseerrortype)

#### Overrides

[BaseParseResult](BaseParseResult.md).[errorType](BaseParseResult.md#errortype)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:65](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L65)

---

### <a id="expressiontype" name="expressiontype"></a> expressionType

• **expressionType**: [`FormulaCheckType`](../README.md#formulachecktype)

#### Inherited from

[BaseParseResult](BaseParseResult.md).[expressionType](BaseParseResult.md#expressiontype)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:36](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L36)

---

### <a id="inputimage" name="inputimage"></a> inputImage

• **inputImage**: `string`

#### Inherited from

[BaseParseResult](BaseParseResult.md).[inputImage](BaseParseResult.md#inputimage)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:34](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L34)

---

### <a id="parseimage" name="parseimage"></a> parseImage

• **parseImage**: `string`

#### Inherited from

[BaseParseResult](BaseParseResult.md).[parseImage](BaseParseResult.md#parseimage)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:35](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L35)

---

### <a id="success" name="success"></a> success

• **success**: `false`

#### Overrides

[BaseParseResult](BaseParseResult.md).[success](BaseParseResult.md#success)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:63](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L63)

---

### <a id="variableparseresult" name="variableparseresult"></a> variableParseResult

• **variableParseResult**: [`VariableParseResult`](VariableParseResult.md) & { `cst`: `undefined` \| `CstNode` ; `kind`: `"unknown"` }

#### Overrides

[BaseParseResult](BaseParseResult.md).[variableParseResult](BaseParseResult.md#variableparseresult)

#### Defined in

[packages/brickdoc-formula/src/grammar/core.ts:66](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/grammar/core.ts#L66)