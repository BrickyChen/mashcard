# Interface: SwitchType

## Hierarchy

- [`ControlType`](ControlType.md)

  ↳ **`SwitchType`**

## Implemented by

- [`SwitchClass`](../classes/SwitchClass.md)

## Table of contents

### Properties

- [\_formulaContext](SwitchType.md#_formulacontext)
- [\_meta](SwitchType.md#_meta)
- [checked](SwitchType.md#checked)
- [disabled](SwitchType.md#disabled)
- [fn](SwitchType.md#fn)
- [kind](SwitchType.md#kind)

### Methods

- [onChange](SwitchType.md#onchange)
- [persistence](SwitchType.md#persistence)

## Properties

### <a id="_formulacontext" name="_formulacontext"></a> \_formulaContext

• **\_formulaContext**: [`ContextInterface`](ContextInterface.md)

#### Inherited from

[ControlType](ControlType.md).[_formulaContext](ControlType.md#_formulacontext)

#### Defined in

[packages/formula/src/controls/types.ts:27](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L27)

___

### <a id="_meta" name="_meta"></a> \_meta

• **\_meta**: [`VariableMetadata`](VariableMetadata.md)

#### Inherited from

[ControlType](ControlType.md).[_meta](ControlType.md#_meta)

#### Defined in

[packages/formula/src/controls/types.ts:28](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L28)

___

### <a id="checked" name="checked"></a> checked

• **checked**: `boolean`

#### Defined in

[packages/formula/src/controls/types.ts:222](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L222)

___

### <a id="disabled" name="disabled"></a> disabled

• **disabled**: `boolean`

#### Inherited from

[ControlType](ControlType.md).[disabled](ControlType.md#disabled)

#### Defined in

[packages/formula/src/controls/types.ts:30](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L30)

___

### <a id="fn" name="fn"></a> fn

• **fn**: [`FunctionResult`](FunctionResult.md)

#### Defined in

[packages/formula/src/controls/types.ts:223](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L223)

___

### <a id="kind" name="kind"></a> kind

• **kind**: ``"Switch"``

#### Overrides

[ControlType](ControlType.md).[kind](ControlType.md#kind)

#### Defined in

[packages/formula/src/controls/types.ts:221](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L221)

## Methods

### <a id="onchange" name="onchange"></a> onChange

▸ `Optional` **onChange**(`bool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/formula/src/controls/types.ts:224](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L224)

___

### <a id="persistence" name="persistence"></a> persistence

▸ **persistence**(): [`ControlInitializer`](ControlInitializer.md)

#### Returns

[`ControlInitializer`](ControlInitializer.md)

#### Inherited from

[ControlType](ControlType.md).[persistence](ControlType.md#persistence)

#### Defined in

[packages/formula/src/controls/types.ts:31](https://github.com/mashcard/mashcard/blob/main/packages/formula/src/controls/types.ts#L31)