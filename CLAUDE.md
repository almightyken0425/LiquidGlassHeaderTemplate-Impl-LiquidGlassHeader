# CLAUDE.md

本 repo 為 LiquidGlassHeaderTemplate 產品的 **Module Impl git**，module_id 為 `no1_liquid_glass_header`。實作 React Native Liquid Glass 風格原生 Header 的模板。

## 三層 git 配對

- **頂層 Product git：** `../../`
- **對側 Module Spec git：** `no3_product_specs/no1_liquid_glass_header/`（目前為空殼）
- **本 Module Impl git：** 即本 repo

完整路徑與配對表由 `decision_framework_router` skill 的 `products_registry.md` 維護。

## 配對變動規則

模板庫本質上屬於純 Impl repo，大多數改動可視為 `REFACTOR_EXEMPT`。若涉及對外 API 或 component 介面變動，應同步到 Spec git。
