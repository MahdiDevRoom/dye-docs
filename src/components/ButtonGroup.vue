<script setup>
  const props = defineProps({
    vertical: { type: Boolean, default: false },   // چیدمان عمودی
    joined: { type: Boolean, default: false },     // دکمه‌های چسبیده به هم (فقط افقی)
    block: { type: Boolean, default: false },      // دکمه‌ها کل عرض رو پر کنن
    align: {
      type: String,
      default: "start",
      validator: (v) => ["start", "center", "end"].includes(v),
    },
    label: { type: String, default: undefined },   // برای screen reader
  });
</script>

<template>
  <div
    class="button-group"
    :class="[
      `align-${props.align}`,
      { vertical: props.vertical, joined: props.joined, block: props.block },
    ]"
    :role="props.label ? 'group' : undefined"
    :aria-label="props.label">
    <slot />
  </div>
</template>

<style>
  /* بدون scoped، چون محتوای slot مال والده و استایل scoped بهش نمی‌رسه.
     همه‌چیز با پیشوند .button-group محدود شده تا به جای دیگه نشت نکنه. */
  .button-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding-top: 4px;               /* Button با top: -4px بالا میاد */
  }

  .button-group.align-center { justify-content: center; }
  .button-group.align-end { justify-content: flex-end; }

  .button-group.vertical {
    flex-direction: column;
    align-items: stretch;
  }

  .button-group.block > * { flex: 1 1 auto; }
  .button-group.block button { width: 100%; }

  /* حالت چسبیده */
  .button-group.joined:not(.vertical) {
    gap: 0;
    flex-wrap: nowrap;
  }

  .button-group.joined:not(.vertical) > :not(:first-child) {
    margin-inline-start: -2px;      /* border های مجاور روی هم بیفتن */
  }

  .button-group.joined:not(.vertical) > :not(:first-child) button,
  .button-group.joined:not(.vertical) > button:not(:first-child) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  .button-group.joined:not(.vertical) > :not(:last-child) button,
  .button-group.joined:not(.vertical) > button:not(:last-child) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  .button-group.joined button:hover,
  .button-group.joined button:focus-visible {
    z-index: 1;                     /* border دکمه‌ی فعال بالای همسایه‌ها */
  }
</style>