/* @ds-bundle: {"format":4,"namespace":"Ds47LinesDesignSystem_38c46b","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"FilterChip","sourcePath":"components/buttons/FilterChip.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"DisclosureRow","sourcePath":"components/disclosure/DisclosureRow.jsx"},{"name":"FilterSidebar","sourcePath":"components/disclosure/FilterSidebar.jsx"},{"name":"CampaignTile","sourcePath":"components/editorial/CampaignTile.jsx"},{"name":"CategoryIconCard","sourcePath":"components/editorial/CategoryIconCard.jsx"},{"name":"MemberBenefitCard","sourcePath":"components/editorial/MemberBenefitCard.jsx"},{"name":"SearchPill","sourcePath":"components/forms/SearchPill.jsx"},{"name":"PATHS","sourcePath":"components/icon/Icon.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"Photo","sourcePath":"components/media/Photo.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"PrimaryNav","sourcePath":"components/navigation/PrimaryNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/UtilityBar.jsx"},{"name":"Badge","sourcePath":"components/product/Badge.jsx"},{"name":"PriceRow","sourcePath":"components/product/PriceRow.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"SwatchDot","sourcePath":"components/product/SwatchDot.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"4c25d16c6a9c","components/buttons/FilterChip.jsx":"b382095c0fb6","components/buttons/IconButton.jsx":"5ca0702a5b5e","components/disclosure/DisclosureRow.jsx":"8485f6a87cff","components/disclosure/FilterSidebar.jsx":"375f67e40ce1","components/editorial/CampaignTile.jsx":"39c3d175a088","components/editorial/CategoryIconCard.jsx":"a999b25280ef","components/editorial/MemberBenefitCard.jsx":"27a0eedbe89b","components/forms/SearchPill.jsx":"b72b461bcf3d","components/icon/Icon.jsx":"bc33866a6510","components/media/Photo.jsx":"977d2d5de3f3","components/navigation/Footer.jsx":"bd8856d66583","components/navigation/PrimaryNav.jsx":"1262da0fa0ca","components/navigation/SubNav.jsx":"7d0497418355","components/navigation/UtilityBar.jsx":"c4bc41b9f776","components/product/Badge.jsx":"8bb872b838b7","components/product/PriceRow.jsx":"9e40b9eb7d9d","components/product/ProductCard.jsx":"7bb371bde8cc","components/product/SwatchDot.jsx":"df0da8a7bd4d","ui_kits/retail/Home.jsx":"52fa4311b2b1","ui_kits/retail/Listing.jsx":"2ef42c0cf8d2","ui_kits/retail/Membership.jsx":"7918c0575b42","ui_kits/retail/Product.jsx":"4987254952ac","ui_kits/retail/data.js":"673c1d4f10c9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds47LinesDesignSystem_38c46b = window.Ds47LinesDesignSystem_38c46b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterChip({
  children,
  active = false,
  count,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": active,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      minHeight: "var(--control-height-chip)",
      padding: "8px 16px",
      borderRadius: "var(--radius-button)",
      border: active ? "1px solid var(--ink)" : "1px solid var(--border-divider)",
      background: active ? "var(--ink)" : "var(--canvas)",
      color: active ? "var(--on-primary)" : "var(--ink)",
      font: "var(--type-button-md)",
      cursor: "pointer",
      ...style
    }
  }, rest), children, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: active ? "var(--stone)" : "var(--mute)"
    }
  }, "(", count, ")") : null);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/editorial/CategoryIconCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryIconCard({
  label,
  icon,
  image,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-md)",
      padding: "var(--space-xl) var(--space-sm)",
      background: "var(--surface-card)",
      border: "none",
      borderRadius: "var(--radius-card)",
      cursor: "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 80,
      height: 80,
      background: "var(--surface-stage)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-md)",
      color: "var(--ink)"
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryIconCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/CategoryIconCard.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Glyph data copied verbatim from lucide-icons/lucide (ISC) — see assets/icons/.
// SUBSTITUTION: the source system's own icon set was not provided; Lucide is the
// closest CDN-available match (2px stroke, round caps). Swap by replacing PATHS.
const PATHS = {
  "arrow-left": '<path d="m12 19-7-7 7-7"></path> <path d="M19 12H5"></path>',
  "check": '<path d="M20 6 9 17l-5-5"></path>',
  "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
  "chevron-left": '<path d="m15 18-6-6 6-6"></path>',
  "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
  "heart": '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle>',
  "menu": '<path d="M4 5h16"></path> <path d="M4 12h16"></path> <path d="M4 19h16"></path>',
  "minus": '<path d="M5 12h14"></path>',
  "plus": '<path d="M5 12h14"></path> <path d="M12 5v14"></path>',
  "search": '<path d="m21 21-4.34-4.34"></path> <circle cx="11" cy="11" r="8"></circle>',
  "share": '<path d="M12 2v13"></path> <path d="m16 6-4-4-4 4"></path> <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>',
  "shopping-bag": '<path d="M16 10a4 4 0 0 1-8 0"></path> <path d="M3.103 6.034h17.794"></path> <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>',
  "sliders-horizontal": '<path d="M10 5H3"></path> <path d="M12 19H3"></path> <path d="M14 3v4"></path> <path d="M16 17v4"></path> <path d="M21 12h-9"></path> <path d="M21 19h-5"></path> <path d="M21 5h-7"></path> <path d="M8 10v4"></path> <path d="M8 12H3"></path>',
  "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>',
  "truck": '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path> <path d="M15 18H9"></path> <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path> <circle cx="17" cy="18" r="2"></circle> <circle cx="7" cy="18" r="2"></circle>',
  "user": '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle>',
  "x": '<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path>'
};
function Icon({
  name,
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d
    }
  }, rest));
}
Object.assign(__ds_scope, { PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACE = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)",
    border: "none"
  },
  secondary: {
    background: "var(--action-secondary-bg)",
    color: "var(--action-secondary-fg)",
    border: "none"
  },
  "on-image": {
    background: "var(--action-on-image-bg)",
    color: "var(--action-on-image-fg)",
    border: "none"
  },
  outline: {
    background: "transparent",
    color: "var(--ink)",
    border: "1px solid var(--border-divider)"
  }
};
const SIZE = {
  lg: {
    font: "var(--type-button-lg)",
    padding: "16px 40px",
    minHeight: "56px"
  },
  md: {
    font: "var(--type-button-md)",
    padding: "16px 32px",
    minHeight: "var(--control-height-pill)"
  },
  sm: {
    font: "var(--type-button-sm)",
    padding: "12px 24px",
    minHeight: "var(--control-height-chip)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  as = "button",
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-sm)",
      width: fullWidth ? "100%" : undefined,
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "transform 120ms ease, opacity 120ms ease",
      transform: pressed && !disabled ? "scale(0.96)" : "scale(1)",
      opacity: disabled ? 0.4 : pressed ? 0.5 : 1,
      ...SURFACE[variant],
      ...SIZE[size],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 16 : 20
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === "sm" ? 16 : 20
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  label,
  tone = "soft",
  size = 40,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const tones = {
    soft: {
      background: "var(--soft-cloud)",
      color: "var(--ink)"
    },
    bare: {
      background: "transparent",
      color: "var(--ink)"
    },
    solid: {
      background: "var(--ink)",
      color: "var(--on-primary)"
    },
    "on-image": {
      background: "var(--canvas)",
      color: "var(--ink)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-full)",
      cursor: "pointer",
      transition: "transform 120ms ease, opacity 120ms ease",
      transform: pressed ? "scale(0.94)" : "scale(1)",
      opacity: pressed ? 0.5 : 1,
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/DisclosureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DisclosureRow({
  label,
  children,
  size = "body",
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: "var(--elevation-divider)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-md)",
      width: "100%",
      padding: "var(--space-xl) 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      font: size === "heading" ? "var(--type-heading-md)" : "var(--type-body-strong)",
      color: "var(--ink)",
      textAlign: "left"
    }
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "minus" : "plus",
    size: 20
  })), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "var(--space-xl)",
      font: "var(--type-body-md)",
      color: "var(--charcoal)",
      maxWidth: "68ch"
    }
  }, children) : null);
}
Object.assign(__ds_scope, { DisclosureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/DisclosureRow.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FilterSidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterSidebar({
  groups = [],
  selected = {},
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      width: "var(--filter-rail-width)",
      flex: "none",
      background: "var(--canvas)",
      ...style
    }
  }, rest), groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    style: {
      padding: "var(--space-lg) 0",
      borderTop: gi ? "var(--elevation-divider)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-body-strong)",
      color: "var(--ink)"
    }
  }, g.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      alignItems: "flex-start"
    }
  }, g.options.map(o => {
    const on = (selected[g.title] || []).includes(o.label);
    return /*#__PURE__*/React.createElement("button", {
      key: o.label,
      type: "button",
      onClick: onToggle ? () => onToggle(g.title, o.label) : undefined,
      style: {
        display: "inline-flex",
        gap: "var(--space-xs)",
        background: "none",
        border: "none",
        padding: "2px 0",
        cursor: "pointer",
        font: "var(--type-caption-md)",
        color: "var(--ink)",
        borderBottom: on ? "1px solid var(--ink)" : "1px solid transparent"
      }
    }, o.label, o.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--mute)"
      }
    }, "(", o.count, ")") : null);
  })))));
}
Object.assign(__ds_scope, { FilterSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FilterSidebar.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchPill({
  placeholder = "Search",
  value,
  onChange,
  width = 220,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      width,
      height: "var(--control-height-input)",
      padding: "8px 16px",
      borderRadius: "var(--radius-input)",
      background: focused ? "var(--canvas)" : "var(--soft-cloud)",
      border: focused ? "2px solid var(--border-focus)" : "2px solid transparent",
      boxShadow: focused ? "var(--focus-ring)" : "none",
      transition: "background 120ms ease",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      all: "unset",
      flex: 1,
      minWidth: 0,
      font: "var(--type-body-md)",
      color: "var(--ink)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchPill.jsx", error: String((e && e.message) || e) }); }

// components/media/Photo.jsx
try { (() => {
/** Photography frame. Renders the asset when given one, otherwise the soft-cloud
 *  studio stage with a crop note — so layouts stay honest before real imagery lands. */
function Photo({
  src,
  alt = "",
  ratio = "1 / 1",
  stage = true,
  note,
  objectFit = "cover",
  loading = "lazy",
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      width: "100%",
      overflow: "hidden",
      background: stage ? "var(--surface-stage)" : "var(--ink)",
      borderRadius: "var(--radius-none)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: loading,
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--space-md)",
      right: "var(--space-md)",
      maxWidth: "60%",
      textAlign: "right",
      font: "var(--type-caption-sm)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: stage ? "var(--stone)" : "var(--ash)"
    }
  }, note || "Photography"), children);
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Photo.jsx", error: String((e && e.message) || e) }); }

// components/editorial/CampaignTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CampaignTile({
  headline,
  eyebrow,
  cta,
  onCta,
  image,
  imageNote,
  ratio = "16 / 9",
  headlineColor = "var(--canvas)",
  align = "bottom-left",
  scale = 96,
  style,
  ...rest
}) {
  const vertical = align.startsWith("top") ? {
    top: "var(--space-section)"
  } : {
    bottom: "var(--space-section)"
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    ratio: ratio,
    stage: false,
    note: imageNote || "Campaign photography"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-section)",
      right: "var(--space-section)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "var(--space-xl)",
      ...vertical
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption-md)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: headlineColor
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display-campaign)",
      fontSize: scale,
      letterSpacing: "var(--ls-display)",
      lineHeight: "var(--lh-campaign)",
      textTransform: "uppercase",
      color: headlineColor,
      maxWidth: "14ch"
    }
  }, headline), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "on-image",
    onClick: onCta
  }, cta) : null));
}
Object.assign(__ds_scope, { CampaignTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/CampaignTile.jsx", error: String((e && e.message) || e) }); }

// components/editorial/MemberBenefitCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MemberBenefitCard({
  title,
  body,
  cta = "Explore",
  onCta,
  image,
  imageNote,
  ratio = "4 / 5",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    ratio: ratio,
    stage: false,
    note: imageNote || title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto var(--space-xl) var(--space-xl) var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-heading-lg)",
      color: "var(--text-inverse)"
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption-md)",
      color: "var(--stone)"
    }
  }, body) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "on-image",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { MemberBenefitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/MemberBenefitCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  columns = [],
  legal = "© 2026 47 Lines. All Rights Reserved",
  legalLinks = ["Terms of Sale", "Terms of Use", "Privacy Policy", "Supply Chain Act"],
  locale = "Canada",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--canvas)",
      borderTop: "var(--elevation-divider)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      paddingTop: "var(--space-section)",
      paddingBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "var(--space-xl)"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-body-strong)",
      color: "var(--ink)"
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-caption-md)",
      color: "var(--mute)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "var(--elevation-divider)",
      margin: "var(--space-section) 0 var(--space-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-lg)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-utility-xs)",
      color: "var(--mute)"
    }
  }, locale), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-utility-xs)",
      color: "var(--mute)"
    }
  }, legal), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      marginLeft: "auto"
    }
  }, legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-utility-xs)",
      color: "var(--mute)"
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PrimaryNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PrimaryNav({
  items = ["New & Featured", "Men", "Women", "Kids", "Trail", "Collections"],
  active,
  onSelect,
  logo = "assets/logo-47lines-mark.png",
  brand = "47 LINES",
  bagCount,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      background: "var(--canvas)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-xl)",
      height: 60
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: brand,
    style: {
      width: 32,
      height: 32
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)"
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(item);
    },
    style: {
      font: "var(--type-body-strong)",
      color: "var(--ink)",
      paddingBottom: 2,
      borderBottom: active === item ? "2px solid var(--ink)" : "2px solid transparent"
    }
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchPill, {
    width: 180
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "heart",
    label: "Favourites",
    tone: "bare"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "shopping-bag",
    label: "Bag",
    tone: "bare"
  }), bagCount ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 2,
      minWidth: 16,
      height: 16,
      display: "grid",
      placeItems: "center",
      padding: "0 4px",
      borderRadius: "var(--radius-full)",
      background: "var(--ink)",
      color: "var(--on-primary)",
      font: "var(--type-utility-xs)"
    }
  }, bagCount) : null))));
}
Object.assign(__ds_scope, { PrimaryNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PrimaryNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SubNav({
  breadcrumb = [],
  count,
  filtersOpen = true,
  onToggleFilters,
  sort = "Featured",
  onSort,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--canvas)",
      boxShadow: "var(--elevation-inset)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-xl)",
      minHeight: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-heading-md)",
      color: "var(--ink)"
    }
  }, breadcrumb[breadcrumb.length - 1]), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-md)",
      color: "var(--mute)"
    }
  }, "(", count, ")") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleFilters,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      font: "var(--type-button-md)",
      color: "var(--ink)"
    }
  }, filtersOpen ? "Hide Filters" : "Show Filters", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sliders-horizontal",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSort,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      font: "var(--type-button-md)",
      color: "var(--ink)"
    }
  }, "Sort By: ", sort, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })))));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function UtilityBar({
  links = ["Find a Store", "Help", "Join Us", "Sign In"],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-utility)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "var(--space-md)",
      height: 36
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--hairline)",
      font: "var(--type-caption-sm)"
    }
  }, "|") : null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-caption-sm)",
      color: "var(--ink)"
    }
  }, l)))));
}
Object.assign(__ds_scope, { UtilityBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityBar.jsx", error: String((e && e.message) || e) }); }

// components/product/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "promo",
  style,
  ...rest
}) {
  const tones = {
    promo: {
      background: "var(--canvas)",
      color: "var(--ink)",
      border: "1px solid var(--border-divider)"
    },
    ink: {
      background: "var(--ink)",
      color: "var(--on-primary)",
      border: "none"
    },
    success: {
      background: "var(--canvas)",
      color: "var(--success)",
      border: "1px solid var(--success)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: "var(--radius-button)",
      font: "var(--type-caption-sm)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Badge.jsx", error: String((e && e.message) || e) }); }

// components/product/PriceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceRow({
  price,
  compareAt,
  percentOff,
  size = "md",
  style,
  ...rest
}) {
  const font = size === "lg" ? "var(--type-heading-lg)" : "var(--type-body-strong)";
  const onSale = compareAt != null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-sm)",
      font,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: onSale ? "var(--text-sale)" : "var(--ink)"
    }
  }, price), onSale ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mute)",
      textDecoration: "line-through"
    }
  }, compareAt) : null, onSale && percentOff ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-sale)"
    }
  }, percentOff) : null);
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/product/SwatchDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SwatchDot({
  color,
  active = false,
  label,
  onClick,
  size = 12,
  style,
  ...rest
}) {
  const light = /^#(f|e|d)/i.test(color || "");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": active,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      padding: 0,
      borderRadius: "var(--radius-full)",
      background: color,
      border: light ? "1px solid var(--hairline)" : "none",
      boxShadow: active ? "0 0 0 2px var(--canvas), 0 0 0 4px var(--ink)" : "none",
      cursor: "pointer",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SwatchDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SwatchDot.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  name,
  category,
  price,
  compareAt,
  percentOff,
  image,
  imageNote,
  ratio = "1 / 1",
  badge,
  colors = [],
  colorCount,
  activeColor = 0,
  onSelectColor,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      background: "var(--surface-card)",
      padding: 0,
      borderRadius: "var(--radius-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    alt: name,
    ratio: ratio,
    note: imageNote || name
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--space-md)",
      left: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      paddingTop: "var(--space-md)"
    }
  }, colors.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      alignItems: "center"
    }
  }, colors.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.SwatchDot, {
    key: i,
    color: c,
    active: i === activeColor,
    label: "Colourway " + (i + 1),
    onClick: onSelectColor ? () => onSelectColor(i) : undefined
  }))) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-body-strong)",
      color: "var(--ink)"
    }
  }, name), category ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption-md)",
      color: "var(--mute)"
    }
  }, category) : null, colorCount ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption-sm)",
      color: "var(--mute)"
    }
  }, colorCount, " Colours") : null, /*#__PURE__*/React.createElement(__ds_scope.PriceRow, {
    price: price,
    compareAt: compareAt,
    percentOff: percentOff
  })));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  CampaignTile,
  ProductCard,
  CategoryIconCard,
  MemberBenefitCard,
  Button,
  Photo,
  IconButton,
  Icon
} = window.Ds47LinesDesignSystem_38c46b;
function SectionHead({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading-xl)",
      textTransform: "uppercase"
    }
  }, title), action ? /*#__PURE__*/React.createElement("a", {
    className: "ds-link",
    href: "#",
    onClick: e => e.preventDefault()
  }, action) : null);
}
function Home({
  products,
  onOpenProduct,
  onOpenListing
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-section-stack",
    style: {
      paddingBlock: "var(--space-xl) var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(CampaignTile, {
    eyebrow: "Trail Series",
    headline: "Own the Line",
    cta: "Shop Trail",
    onCta: onOpenListing,
    ratio: "16 / 9",
    imageNote: "Runner on a ridge at first light, wide cinematic crop"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Trending Now",
    action: "Shop All"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, products.slice(0, 4).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, p))))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Shop by Sport"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, window.RETAIL.sports.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "rail-item"
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    stage: false,
    note: s + " photography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-lg)",
      bottom: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-image",
    size: "sm",
    onClick: onOpenListing
  }, s))))))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Featured Footwear",
    action: "Shop All"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, products.slice(6, 8).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, p, {
    ratio: "4 / 3"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Latest in Clothing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-8"
  }, window.RETAIL.clothing.map((c, i) => /*#__PURE__*/React.createElement(CategoryIconCard, {
    key: c,
    label: c,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ["truck", "star", "map-pin", "shopping-bag"][i % 4],
      size: 32
    }),
    onClick: onOpenListing
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Members Get More"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, /*#__PURE__*/React.createElement(MemberBenefitCard, {
    title: "Member Days",
    body: "Early access to the Trail Series.",
    imageNote: "Members at a trailhead"
  }), /*#__PURE__*/React.createElement(MemberBenefitCard, {
    title: "Free Returns",
    body: "60 days, no questions.",
    imageNote: "Returns counter, in store"
  }), /*#__PURE__*/React.createElement(MemberBenefitCard, {
    title: "Trail Reports",
    body: "Route notes from the 47 crew.",
    imageNote: "Map spread on a tailgate"
  }))));
}
Object.assign(window, {
  Home,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail/Listing.jsx
try { (() => {
const {
  SubNav,
  FilterSidebar,
  FilterChip,
  ProductCard
} = window.Ds47LinesDesignSystem_38c46b;
function Listing({
  products,
  onOpenProduct
}) {
  const [filtersOpen, setFiltersOpen] = React.useState(true);
  const [selected, setSelected] = React.useState({
    Terrain: ["Trail"]
  });
  const [sort, setSort] = React.useState("Featured");
  const sorts = ["Featured", "Newest", "Price: High-Low", "Price: Low-High"];
  const toggle = (g, o) => setSelected(s => ({
    ...s,
    [g]: (s[g] || []).includes(o) ? s[g].filter(x => x !== o) : [...(s[g] || []), o]
  }));
  const chips = Object.entries(selected).flatMap(([g, list]) => list.map(l => ({
    g,
    l
  })));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubNav, {
    breadcrumb: ["Men", "Trail Running Shoes"],
    count: products.length,
    filtersOpen: filtersOpen,
    onToggleFilters: () => setFiltersOpen(!filtersOpen),
    sort: sort,
    onSort: () => setSort(sorts[(sorts.indexOf(sort) + 1) % sorts.length])
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: "flex",
      gap: "var(--space-section)",
      paddingTop: "var(--space-xl)",
      paddingBottom: "var(--space-section)"
    }
  }, filtersOpen ? /*#__PURE__*/React.createElement(FilterSidebar, {
    groups: window.RETAIL.filters,
    selected: selected,
    onToggle: toggle
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, chips.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-sm)",
      marginBottom: "var(--space-xl)"
    }
  }, chips.map(({
    g,
    l
  }) => /*#__PURE__*/React.createElement(FilterChip, {
    key: g + l,
    active: true,
    onClick: () => toggle(g, l)
  }, l))) : null, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, p)))))));
}
Object.assign(window, {
  Listing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail/Listing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail/Membership.jsx
try { (() => {
const {
  CampaignTile,
  MemberBenefitCard,
  DisclosureRow,
  Button,
  Badge
} = window.Ds47LinesDesignSystem_38c46b;
function Membership() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-section-stack",
    style: {
      paddingBlock: "var(--space-xl) var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(CampaignTile, {
    eyebrow: "47 Lines Membership",
    headline: "Join the Line",
    cta: "Join Us",
    ratio: "16 / 9",
    imageNote: "Crew loading packs at a trailhead, dusk"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading-xl)",
      textTransform: "uppercase",
      marginBottom: "var(--space-xl)"
    }
  }, "Member Benefits"), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, /*#__PURE__*/React.createElement(MemberBenefitCard, {
    title: "Member Days",
    body: "Early access to every drop.",
    imageNote: "Queue outside a store"
  }), /*#__PURE__*/React.createElement(MemberBenefitCard, {
    title: "Free Returns",
    body: "60 days, no questions.",
    imageNote: "Returns counter"
  }), /*#__PURE__*/React.createElement(MemberBenefitCard, {
    title: "Trail Reports",
    body: "Route notes from the 47 crew.",
    imageNote: "Map on a tailgate"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: "flex",
      gap: "var(--space-section)",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Free to join"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading-xl)",
      textTransform: "uppercase"
    }
  }, "Two Minutes to Join"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      color: "var(--charcoal)",
      maxWidth: "44ch"
    }
  }, "Membership is free. Sign up once and it follows you across the app, the store and every trail report we publish."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Join Us"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Sign In"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 420px"
    }
  }, /*#__PURE__*/React.createElement(DisclosureRow, {
    size: "heading",
    label: "How do I join 47 Lines?",
    defaultOpen: true
  }, "Create an account with an email address. There is no fee and no tier."), /*#__PURE__*/React.createElement(DisclosureRow, {
    size: "heading",
    label: "What do members get first?"
  }), /*#__PURE__*/React.createElement(DisclosureRow, {
    size: "heading",
    label: "Can I use membership in store?"
  }), /*#__PURE__*/React.createElement(DisclosureRow, {
    size: "heading",
    label: "How do I leave?"
  }))));
}
Object.assign(window, {
  Membership
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail/Membership.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail/Product.jsx
try { (() => {
const {
  Photo,
  Button,
  SwatchDot,
  PriceRow,
  DisclosureRow,
  IconButton,
  Badge,
  Icon,
  ProductCard
} = window.Ds47LinesDesignSystem_38c46b;
function Product({
  product,
  related,
  onAdd,
  onOpenProduct
}) {
  const [color, setColor] = React.useState(0);
  const [size, setSize] = React.useState(null);
  const [thumb, setThumb] = React.useState(0);
  const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13", "14"];
  const soldOut = ["7", "14"];
  const colors = product.colors && product.colors.length ? product.colors : ["#111111", "#f5f5f5"];
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      paddingBlock: "var(--space-xl) var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-thumbs"
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setThumb(i),
    style: {
      padding: 0,
      border: thumb === i ? "1px solid var(--ink)" : "1px solid transparent",
      background: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "1 / 1",
    note: "0" + (i + 1)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-main"
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "1 / 1",
    note: product.imageNote || product.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--space-md)",
      left: "var(--space-md)"
    }
  }, product.badge ? /*#__PURE__*/React.createElement(Badge, null, product.badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "var(--space-md)",
      bottom: "var(--space-md)",
      display: "flex",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "chevron-left",
    label: "Previous image",
    tone: "on-image"
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "chevron-right",
    label: "Next image",
    tone: "on-image"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-info"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-heading-xl)"
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-strong)",
      color: "var(--mute)"
    }
  }, product.category), /*#__PURE__*/React.createElement(PriceRow, {
    size: "lg",
    price: product.price,
    compareAt: product.compareAt,
    percentOff: product.percentOff
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-md)",
      color: "var(--mute)"
    }
  }, colors.length, " Colours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)"
    }
  }, colors.map((c, i) => /*#__PURE__*/React.createElement(SwatchDot, {
    key: i,
    color: c,
    size: 20,
    active: i === color,
    label: "Colourway " + (i + 1),
    onClick: () => setColor(i)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, "Select Size"), /*#__PURE__*/React.createElement("a", {
    className: "ds-link",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Size Guide")), /*#__PURE__*/React.createElement("div", {
    className: "size-grid"
  }, sizes.map(s => {
    const out = soldOut.includes(s);
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      disabled: out,
      onClick: () => setSize(s),
      style: {
        height: 48,
        background: "var(--canvas)",
        cursor: out ? "not-allowed" : "pointer",
        border: size === s ? "1px solid var(--ink)" : "1px solid var(--hairline)",
        borderRadius: "var(--radius-none)",
        font: "var(--type-button-md)",
        color: out ? "var(--stone)" : "var(--ink)",
        opacity: out ? 0.5 : 1
      }
    }, s);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onAdd(size)
  }, size ? "Add to Bag" : "Select a Size"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    icon: "heart"
  }, "Favourite")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      color: "var(--charcoal)"
    }
  }, "Built for long days on soft ground. A recycled ripstop upper, taped seams and 4mm lugs hold the line when the trail turns over."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisclosureRow, {
    label: "View Product Details",
    defaultOpen: true
  }, "Recycled ripstop upper \xB7 Gusseted tongue \xB7 4mm lugs \xB7 Rocker geometry \xB7 Style 47L-2201"), /*#__PURE__*/React.createElement(DisclosureRow, {
    label: "Shipping & Returns"
  }, "Free standard shipping on orders over $50. Members return free within 60 days."), /*#__PURE__*/React.createElement(DisclosureRow, {
    label: "Reviews (48)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: "var(--space-xs)",
      alignItems: "center"
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 16
  })), " 4.6 / 5"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading-xl)",
      textTransform: "uppercase",
      marginBottom: "var(--space-xl)"
    }
  }, "You Might Also Like"), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, related.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, p))))));
}
Object.assign(window, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail/data.js
try { (() => {
window.RETAIL = {
  nav: ["New & Featured", "Men", "Women", "Trail", "Collections"],
  footer: [{
    title: "Resources",
    links: ["Find a Store", "Sizing Guide", "Gift Cards", "Trail Reports"]
  }, {
    title: "Help",
    links: ["Order Status", "Shipping & Delivery", "Returns", "Contact Us"]
  }, {
    title: "Company",
    links: ["About 47 Lines", "Careers", "Sustainability", "Press"]
  }, {
    title: "Promotions & Discounts",
    links: ["Member Days", "Student", "Military", "Outlet"]
  }],
  products: [{
    name: "Zegama 2",
    category: "Men's Trail Running Shoes",
    price: "$180",
    colors: ["#111111", "#0a7281", "#f5f5f5"],
    badge: "Just In",
    imageNote: "Shoe, 3/4 studio"
  }, {
    name: "Ridgeline Anorak",
    category: "Men's Shell Jacket",
    price: "$134.97",
    compareAt: "$180",
    percentOff: "25% off",
    colorCount: 4,
    imageNote: "Anorak, flat lay"
  }, {
    name: "Timber Fleece Half-Zip",
    category: "Men's Fleece",
    price: "$95",
    colors: ["#39393b", "#beaffd"],
    imageNote: "Fleece, front"
  }, {
    name: "Line 47 Alpine Shell",
    category: "Men's Gore-Tex Jacket",
    price: "$320",
    badge: "Recycled Materials",
    colors: ["#111111", "#4c012d"],
    imageNote: "Shell, on figure"
  }, {
    name: "Switchback Pant",
    category: "Men's Hiking Trousers",
    price: "$110",
    colorCount: 3,
    imageNote: "Trouser, flat lay"
  }, {
    name: "Cascade Vest",
    category: "Men's Insulated Vest",
    price: "$140",
    colors: ["#0a7281", "#111111"],
    imageNote: "Vest, front"
  }, {
    name: "Deadfall Trail 3",
    category: "Men's Trail Running Shoes",
    price: "$97.97",
    compareAt: "$130",
    percentOff: "25% off",
    colors: ["#ed1aa0", "#111111"],
    imageNote: "Shoe, side"
  }, {
    name: "Basecamp Crew",
    category: "Men's Sweatshirt",
    price: "$85",
    badge: "Coming Soon",
    imageNote: "Crew, flat lay"
  }, {
    name: "Northface Ridge Cap",
    category: "Unisex Cap",
    price: "$35",
    colors: ["#f5f5f5", "#39393b", "#0a7281"],
    imageNote: "Cap, 3/4"
  }],
  filters: [{
    title: "Gender",
    options: [{
      label: "Men",
      count: 24
    }, {
      label: "Women",
      count: 19
    }, {
      label: "Unisex",
      count: 6
    }]
  }, {
    title: "Terrain",
    options: [{
      label: "Trail",
      count: 12
    }, {
      label: "Alpine",
      count: 7
    }, {
      label: "Road",
      count: 8
    }]
  }, {
    title: "Shop by Price",
    options: [{
      label: "$0 - $100",
      count: 9
    }, {
      label: "$100 - $200",
      count: 21
    }, {
      label: "Over $200",
      count: 8
    }]
  }, {
    title: "Sustainable Materials",
    options: [{
      label: "Recycled",
      count: 14
    }, {
      label: "Organic Cotton",
      count: 5
    }]
  }],
  sports: ["Trail Running", "Hiking", "Alpine", "Climbing", "Nordic"],
  clothing: ["Jackets", "Fleece", "Shells", "Trousers", "Packs", "Caps", "Socks", "Tees"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DisclosureRow = __ds_scope.DisclosureRow;

__ds_ns.FilterSidebar = __ds_scope.FilterSidebar;

__ds_ns.CampaignTile = __ds_scope.CampaignTile;

__ds_ns.CategoryIconCard = __ds_scope.CategoryIconCard;

__ds_ns.MemberBenefitCard = __ds_scope.MemberBenefitCard;

__ds_ns.SearchPill = __ds_scope.SearchPill;

__ds_ns.PATHS = __ds_scope.PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Photo = __ds_scope.Photo;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.PrimaryNav = __ds_scope.PrimaryNav;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SwatchDot = __ds_scope.SwatchDot;

})();
