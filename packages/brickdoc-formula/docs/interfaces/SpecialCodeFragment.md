# Interface: SpecialCodeFragment

## Hierarchy

- [`BaseCodeFragment`](BaseCodeFragment.md)

  ↳ **`SpecialCodeFragment`**

## Table of contents

### Properties

- [attrs](SpecialCodeFragment.md#attrs)
- [code](SpecialCodeFragment.md#code)
- [display](SpecialCodeFragment.md#display)
- [errors](SpecialCodeFragment.md#errors)
- [namespaceId](SpecialCodeFragment.md#namespaceid)
- [replacements](SpecialCodeFragment.md#replacements)
- [type](SpecialCodeFragment.md#type)

## Properties

### <a id="attrs" name="attrs"></a> attrs

• `Readonly` **attrs**: [`CodeFragmentAttrs`](CodeFragmentAttrs.md)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:689](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L689)

---

### <a id="code" name="code"></a> code

• `Readonly` **code**: [`ComplexCodeFragmentType`](../README.md#complexcodefragmenttype)

#### Overrides

[BaseCodeFragment](BaseCodeFragment.md).[code](BaseCodeFragment.md#code)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:688](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L688)

---

### <a id="display" name="display"></a> display

• `Readonly` **display**: `string`

#### Inherited from

[BaseCodeFragment](BaseCodeFragment.md).[display](BaseCodeFragment.md#display)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:681](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L681)

---

### <a id="errors" name="errors"></a> errors

• `Readonly` **errors**: [`ErrorMessage`](ErrorMessage.md)[]

#### Inherited from

[BaseCodeFragment](BaseCodeFragment.md).[errors](BaseCodeFragment.md#errors)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:685](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L685)

---

### <a id="namespaceid" name="namespaceid"></a> namespaceId

• `Optional` `Readonly` **namespaceId**: `string`

#### Inherited from

[BaseCodeFragment](BaseCodeFragment.md).[namespaceId](BaseCodeFragment.md#namespaceid)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:683](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L683)

---

### <a id="replacements" name="replacements"></a> replacements

• `Optional` `Readonly` **replacements**: [`string`, ...string[]]

#### Inherited from

[BaseCodeFragment](BaseCodeFragment.md).[replacements](BaseCodeFragment.md#replacements)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:682](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L682)

---

### <a id="type" name="type"></a> type

• `Readonly` **type**: `"string"` \| `"number"` \| `"boolean"` \| `"Block"` \| `"null"` \| `"Date"` \| `"Blank"` \| `"Record"` \| `"Array"` \| `"Error"` \| `"Spreadsheet"` \| `"Row"` \| `"Cell"` \| `"Column"` \| `"Range"` \| `"Cst"` \| `"Reference"` \| `"Function"` \| `"Predicate"` \| `"Button"` \| `"Switch"` \| `"literal"` \| `"Pending"` \| `"Waiting"` \| `"NoPersist"` \| `"any"` \| `"void"`

#### Inherited from

[BaseCodeFragment](BaseCodeFragment.md).[type](BaseCodeFragment.md#type)

#### Defined in

[packages/brickdoc-formula/src/types/index.ts:684](https://github.com/mashcard/mashcard/blob/main/packages/brickdoc-formula/src/types/index.ts#L684)