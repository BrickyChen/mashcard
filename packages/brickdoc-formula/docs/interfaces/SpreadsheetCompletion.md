# Interface: SpreadsheetCompletion

## Hierarchy

- `BaseCompletion`

  ↳ **`SpreadsheetCompletion`**

## Table of contents

### Properties

- [fallbackPositionOffset](SpreadsheetCompletion.md#fallbackpositionoffset)
- [fallbackValue](SpreadsheetCompletion.md#fallbackvalue)
- [flags](SpreadsheetCompletion.md#flags)
- [kind](SpreadsheetCompletion.md#kind)
- [name](SpreadsheetCompletion.md#name)
- [namespaceId](SpreadsheetCompletion.md#namespaceid)
- [preview](SpreadsheetCompletion.md#preview)
- [replacements](SpreadsheetCompletion.md#replacements)
- [weight](SpreadsheetCompletion.md#weight)

## Properties

### <a id="fallbackpositionoffset" name="fallbackpositionoffset"></a> fallbackPositionOffset

• `Optional` `Readonly` **fallbackPositionOffset**: `number`

#### Inherited from

BaseCompletion.fallbackPositionOffset

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:452](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L452)

---

### <a id="fallbackvalue" name="fallbackvalue"></a> fallbackValue

• `Readonly` **fallbackValue**: `string`

#### Inherited from

BaseCompletion.fallbackValue

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:451](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L451)

---

### <a id="flags" name="flags"></a> flags

• `Readonly` **flags**: [`CompletionFlag`](../README.md#completionflag)[]

#### Inherited from

BaseCompletion.flags

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:449](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L449)

---

### <a id="kind" name="kind"></a> kind

• `Readonly` **kind**: `"spreadsheet"`

#### Overrides

BaseCompletion.kind

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:476](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L476)

---

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Inherited from

BaseCompletion.name

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:453](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L453)

---

### <a id="namespaceid" name="namespaceid"></a> namespaceId

• `Optional` `Readonly` **namespaceId**: `string`

#### Inherited from

BaseCompletion.namespaceId

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:455](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L455)

---

### <a id="preview" name="preview"></a> preview

• `Readonly` **preview**: [`SpreadsheetType`](SpreadsheetType.md)

#### Overrides

BaseCompletion.preview

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:477](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L477)

---

### <a id="replacements" name="replacements"></a> replacements

• `Readonly` **replacements**: `CompletionReplacement`[]

#### Inherited from

BaseCompletion.replacements

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:450](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L450)

---

### <a id="weight" name="weight"></a> weight

• `Readonly` **weight**: `number`

#### Inherited from

BaseCompletion.weight

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:448](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L448)