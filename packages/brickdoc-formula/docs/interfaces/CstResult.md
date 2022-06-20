# Interface: CstResult

## Hierarchy

- [`BaseResult`](BaseResult.md)

  ↳ **`CstResult`**

## Table of contents

### Properties

- [result](CstResult.md#result)
- [subType](CstResult.md#subtype)
- [type](CstResult.md#type)
- [view](CstResult.md#view)

## Properties

### <a id="result" name="result"></a> result

• **result**: `CstNode`

#### Overrides

[BaseResult](BaseResult.md).[result](BaseResult.md#result)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:267](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L267)

---

### <a id="subtype" name="subtype"></a> subType

• `Optional` **subType**: `"string"` \| `"number"` \| `"boolean"` \| `"Block"` \| `"null"` \| `"Date"` \| `"Blank"` \| `"Record"` \| `"Array"` \| `"Error"` \| `"Spreadsheet"` \| `"Row"` \| `"Cell"` \| `"Column"` \| `"Range"` \| `"Cst"` \| `"Reference"` \| `"Function"` \| `"Predicate"` \| `"Button"` \| `"Switch"` \| `"literal"` \| `"Pending"` \| `"Waiting"` \| `"NoPersist"` \| `"any"` \| `"void"`

#### Inherited from

[BaseResult](BaseResult.md).[subType](BaseResult.md#subtype)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:160](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L160)

---

### <a id="type" name="type"></a> type

• **type**: `"Cst"`

#### Overrides

[BaseResult](BaseResult.md).[type](BaseResult.md#type)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:266](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L266)

---

### <a id="view" name="view"></a> view

• `Optional` **view**: [`ViewData`](ViewData.md)<`string`\>

#### Inherited from

[BaseResult](BaseResult.md).[view](BaseResult.md#view)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:158](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L158)