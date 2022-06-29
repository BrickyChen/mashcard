# Interface: NameDependencyWithKind

## Hierarchy

- [`NameDependency`](NameDependency.md)

  ↳ **`NameDependencyWithKind`**

## Table of contents

### Properties

- [id](NameDependencyWithKind.md#id)
- [kind](NameDependencyWithKind.md#kind)
- [name](NameDependencyWithKind.md#name)
- [namespaceId](NameDependencyWithKind.md#namespaceid)

### Methods

- [renderTokens](NameDependencyWithKind.md#rendertokens)

## Properties

### <a id="id" name="id"></a> id

• `Readonly` **id**: `string`

#### Defined in

[packages/formula/src/types/index.ts:762](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/types/index.ts#L762)

---

### <a id="kind" name="kind"></a> kind

• `Readonly` **kind**: `"Block"` \| `"Spreadsheet"` \| `"Variable"`

#### Defined in

[packages/formula/src/types/index.ts:763](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/types/index.ts#L763)

---

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Inherited from

[NameDependency](NameDependency.md).[name](NameDependency.md#name)

#### Defined in

[packages/formula/src/types/index.ts:758](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/types/index.ts#L758)

---

### <a id="namespaceid" name="namespaceid"></a> namespaceId

• `Readonly` **namespaceId**: `string`

#### Inherited from

[NameDependency](NameDependency.md).[namespaceId](NameDependency.md#namespaceid)

#### Defined in

[packages/formula/src/types/index.ts:757](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/types/index.ts#L757)

## Methods

### <a id="rendertokens" name="rendertokens"></a> renderTokens

▸ `Readonly` **renderTokens**(`namespaceIsExist`, `namespaceId`): [`FormulaNameToken`](FormulaNameToken.md)[]

#### Parameters

| Name               | Type      |
| :----------------- | :-------- |
| `namespaceIsExist` | `boolean` |
| `namespaceId`      | `string`  |

#### Returns

[`FormulaNameToken`](FormulaNameToken.md)[]