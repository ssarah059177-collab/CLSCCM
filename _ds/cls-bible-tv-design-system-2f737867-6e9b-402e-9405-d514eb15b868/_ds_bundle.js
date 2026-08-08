/* @ds-bundle: {"format":4,"namespace":"CLSBibleTVDesignSystem_2f7378","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"VideoThumbnailCard","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/core/Button.jsx":"71cea0694f5c","components/core/Card.jsx":"483f84f87dc8","components/core/Checkbox.jsx":"402dc64834e0","components/core/Dialog.jsx":"1c3aebfa46e6","components/core/IconButton.jsx":"c670c4a347c2","components/core/Input.jsx":"f199472be4fe","components/core/ProgressBar.jsx":"d1d3dff1ad71","components/core/Radio.jsx":"2eb585bbe8bf","components/core/Select.jsx":"35c0802dfb35","components/core/Switch.jsx":"b67c3fde1212","components/core/Tabs.jsx":"3b1833280ee6","components/core/Tag.jsx":"d9b2ef2323de","components/core/Toast.jsx":"71dfa180ec1b","components/core/Tooltip.jsx":"35cd55aaa994","components/navigation/BottomNav.jsx":"a5b618ff8ccd","components/navigation/TopNav.jsx":"de9b9f71c936","ui_kits/app/screens/HomeScreen.jsx":"83c1e456350f","ui_kits/app/screens/MyScreen.jsx":"1ff4a378e7b3","ui_kits/app/screens/PlayerScreen.jsx":"39c866736f90","ui_kits/app/screens/SearchScreen.jsx":"04bd58b95e59","ui_kits/website/screens/WebHome.jsx":"8bb3d8f81914","ui_kits/website/screens/WebSeries.jsx":"0493b05dd2ca","ui_kits/website/screens/WebWatch.jsx":"627fd314bdf6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CLSBibleTVDesignSystem_2f7378 = window.CLSBibleTVDesignSystem_2f7378 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const sizeMap = {
  sm: {
    h: '40px',
    pad: '0 16px',
    fs: 'var(--fs-body-sm)'
  },
  md: {
    h: 'var(--tap-min)',
    pad: '0 22px',
    fs: 'var(--fs-body)'
  },
  lg: {
    h: '56px',
    pad: '0 28px',
    fs: 'var(--fs-body-lg)'
  }
};
const variantStyle = {
  primary: {
    bg: 'var(--color-brand-primary)',
    bgHover: 'var(--color-brand-primary-hover)',
    bgActive: 'var(--color-brand-primary-active)',
    fg: 'var(--color-text-on-primary)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--color-brand-accent)',
    bgHover: 'var(--color-brand-accent-hover)',
    bgActive: 'var(--color-brand-accent-active)',
    fg: 'var(--color-text-on-accent)',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--color-surface)',
    bgHover: 'var(--navy-50)',
    bgActive: 'var(--navy-100)',
    fg: 'var(--color-brand-primary)',
    border: 'var(--color-border-strong)'
  },
  ghost: {
    bg: 'transparent',
    bgHover: 'var(--navy-50)',
    bgActive: 'var(--navy-100)',
    fg: 'var(--color-brand-primary)',
    border: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick
}) {
  const v = variantStyle[variant] || variantStyle.primary;
  const s = sizeMap[size] || sizeMap.md;
  const [state, setState] = React.useState('idle');
  const bg = disabled ? 'var(--warm-200)' : state === 'active' ? v.bgActive : state === 'hover' ? v.bgHover : v.bg;
  const fg = disabled ? 'var(--warm-500)' : v.fg;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => !disabled && setState('hover'),
    onMouseLeave: () => !disabled && setState('idle'),
    onMouseDown: () => !disabled && setState('active'),
    onMouseUp: () => !disabled && setState('hover'),
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      height: s.h,
      padding: s.pad,
      fontSize: s.fs,
      fontWeight: 'var(--fw-semibold)',
      background: bg,
      color: fg,
      border: `1px solid ${disabled ? 'var(--warm-200)' : v.border}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast)',
      transform: state === 'active' && !disabled ? 'scale(0.98)' : 'scale(1)',
      fontFamily: 'var(--font-sans)'
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'var(--space-5)',
  hoverLift = false
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => hoverLift && setHover(true),
    onMouseLeave: () => hoverLift && setHover(false),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-border)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      fontFamily: 'var(--font-sans)'
    }
  }, children);
}
function VideoThumbnailCard({
  title,
  series,
  duration,
  progress,
  tag,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      cursor: 'pointer',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--warm-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--warm-500)',
      fontSize: 'var(--fs-caption)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--duration-base)'
    }
  }, "\uC378\uB124\uC77C", tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--olive-500)',
      color: '#fff',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-medium)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, tag)), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      background: 'oklch(15% 0 0 / 0.7)',
      color: '#fff',
      fontSize: 'var(--fs-micro)',
      padding: '2px 7px',
      borderRadius: 'var(--radius-sm)'
    }
  }, duration), typeof progress === 'number' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'oklch(0% 0 0 / 0.2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${progress}%`,
      background: 'var(--olive-500)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--color-text-primary)'
    }
  }, title), series && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, series)));
}
Object.assign(__ds_scope, { Card, VideoThumbnailCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--color-text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${checked ? 'var(--color-brand-primary)' : 'var(--color-border-strong)'}`,
      background: checked ? 'var(--color-brand-primary)' : 'var(--color-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast), border var(--duration-fast)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-on-primary)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'oklch(15% 0.02 258 / 0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      width: '360px',
      maxWidth: '90vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--color-text-primary)',
      marginBottom: 'var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-6)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  label,
  onClick
}) {
  const dim = size === 'lg' ? 56 : size === 'sm' ? 36 : 48;
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'filled' ? hover ? 'var(--color-brand-primary-hover)' : 'var(--color-brand-primary)' : hover ? 'var(--navy-50)' : 'transparent';
  const fg = variant === 'filled' ? 'var(--color-text-on-primary)' : 'var(--color-brand-primary)';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-circle)',
      border: 'none',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  icon
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: 'var(--tap-min)',
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-surface)',
      border: `1px solid ${error ? 'var(--error-500)' : focused ? 'var(--navy-400)' : 'var(--color-border)'}`,
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'border var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, icon, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: 'var(--fs-body)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-primary)',
      background: 'transparent'
    }
  })), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--error-500)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  tone = 'accent',
  height = 6
}) {
  const color = tone === 'accent' ? 'var(--olive-500)' : 'var(--color-brand-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--warm-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${Math.min(100, Math.max(0, value))}%`,
      background: color,
      transition: 'width var(--duration-base) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--color-text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-circle)',
      border: `2px solid ${checked ? 'var(--color-brand-primary)' : 'var(--color-border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'border var(--duration-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--color-brand-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      height: 'var(--tap-min)',
      padding: '0 40px 0 16px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      fontSize: 'var(--fs-body)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-primary)',
      appearance: 'none',
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--color-text-muted)',
      pointerEvents: 'none'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--color-text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-brand-primary)' : 'var(--warm-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--color-border)',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    onClick: () => onChange(item),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 2px',
      position: 'relative',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: active === item ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)'
    }
  }, item, active === item && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 2,
      background: 'var(--color-brand-primary)',
      borderRadius: '2px'
    }
  }))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral',
  size = 'md'
}) {
  const tones = {
    neutral: {
      bg: 'var(--warm-100)',
      fg: 'var(--color-text-secondary)'
    },
    navy: {
      bg: 'var(--navy-50)',
      fg: 'var(--navy-700)'
    },
    olive: {
      bg: 'var(--olive-50)',
      fg: 'var(--olive-700)'
    },
    live: {
      bg: 'var(--error-100)',
      fg: 'var(--error-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const fs = size === 'sm' ? 'var(--fs-micro)' : 'var(--fs-caption)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontSize: fs,
      fontWeight: 'var(--fw-medium)',
      fontFamily: 'var(--font-sans)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'neutral',
  visible
}) {
  const tones = {
    neutral: 'var(--navy-800)',
    success: 'var(--success-500)',
    error: 'var(--error-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 32,
      left: '50%',
      transform: `translateX(-50%) translateY(${visible ? '0' : '12px'})`,
      opacity: visible ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      background: tones[tone] || tones.neutral,
      color: '#fff',
      padding: '12px 22px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      boxShadow: 'var(--shadow-lg)',
      pointerEvents: 'none',
      zIndex: 200
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '120%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--navy-800)',
      color: '#fff',
      fontSize: 'var(--fs-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '72px',
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map(item => {
    const isActive = item.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      onClick: () => onChange(item.key),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: isActive ? 'var(--color-brand-primary)' : 'var(--color-text-muted)'
      }
    }, item.icon, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-micro)',
        fontWeight: isActive ? 'var(--fw-semibold)' : 'var(--fw-regular)'
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  links,
  active,
  logo,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '72px',
      padding: '0 var(--space-8)',
      background: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--color-brand-primary)'
    }
  }, logo), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    onClick: () => onNavigate && onNavigate(l.key),
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      cursor: 'pointer',
      color: active === l.key ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
      textDecoration: 'none'
    }
  }, l.label)))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens/HomeScreen.jsx
try { (() => {
window.HomeScreen = function HomeScreen({
  nav,
  ds
}) {
  const {
    VideoThumbnailCard,
    Tag,
    Tabs
  } = ds;
  const [tab, setTab] = React.useState('추천');
  const rows = [{
    title: '예수님의 비유',
    items: [{
      title: '선한 사마리아인',
      series: '누가복음 10장',
      duration: '12:30',
      progress: 40,
      tag: 'NEW'
    }, {
      title: '탕자의 비유',
      series: '누가복음 15장',
      duration: '09:44',
      progress: 80
    }, {
      title: '씨 뿌리는 자',
      series: '마태복음 13장',
      duration: '11:05'
    }]
  }, {
    title: '성경 인물',
    items: [{
      title: '다윗과 골리앗',
      series: '사무엘상 17장',
      duration: '15:02'
    }, {
      title: '요셉의 꿈',
      series: '창세기 37장',
      duration: '13:40'
    }, {
      title: '에스더의 용기',
      series: '에스더서',
      duration: '10:18',
      tag: 'NEW'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--color-brand-primary)'
    }
  }, "CLS Bible TV"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 24,
      height: 24,
      color: 'var(--color-text-secondary)',
      cursor: 'pointer'
    },
    onClick: () => nav('search')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 12px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['추천', '최신', '시리즈'],
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 100px'
    }
  }, rows.map(row => /*#__PURE__*/React.createElement("div", {
    key: row.title,
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      marginBottom: 12
    }
  }, row.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, row.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    style: {
      minWidth: 220,
      flexShrink: 0
    },
    onClick: () => nav('player', it)
  }, /*#__PURE__*/React.createElement(VideoThumbnailCard, it))))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens/MyScreen.jsx
try { (() => {
window.MyScreen = function MyScreen({
  nav,
  ds
}) {
  const {
    Switch,
    Card,
    IconButton
  } = ds;
  const [autoplay, setAutoplay] = React.useState(true);
  const [notify, setNotify] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      height: '100%',
      overflowY: 'auto',
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--navy-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user",
    style: {
      width: 26,
      height: 26,
      color: 'var(--color-brand-primary)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, "\uC740\uD61C \uB2D8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "2025\uB144\uBD80\uD130 \uD568\uAED8\uD558\uACE0 \uC788\uC5B4\uC694"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "\uC790\uB3D9 \uC7AC\uC0DD"), /*#__PURE__*/React.createElement(Switch, {
    checked: autoplay,
    onChange: e => setAutoplay(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border)',
      margin: '12px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "\uC0C8 \uC601\uC0C1 \uC54C\uB9BC"), /*#__PURE__*/React.createElement(Switch, {
    checked: notify,
    onChange: e => setNotify(e.target.checked)
  }))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens/MyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens/PlayerScreen.jsx
try { (() => {
window.PlayerScreen = function PlayerScreen({
  nav,
  ds,
  video
}) {
  const {
    IconButton,
    ProgressBar,
    Tag,
    Button
  } = ds;
  const v = video || {
    title: '선한 사마리아인',
    series: '누가복음 10장'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--warm-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      background: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play",
      style: {
        width: 26,
        height: 26
      }
    }),
    label: "\uC7AC\uC0DD",
    variant: "filled",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-left",
      style: {
        width: 20,
        height: 20,
        color: '#fff'
      }
    }),
    label: "\uB2EB\uAE30",
    onClick: () => nav('home')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 40,
    tone: "accent"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "navy"
  }, "\uBE44\uC720"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      marginTop: 12,
      color: 'var(--color-text-primary)'
    }
  }, v.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, v.series), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.7,
      marginTop: 16
    }
  }, "\uAC15\uB3C4\uB97C \uB9CC\uB09C \uC0AC\uB78C\uC744 \uB3C4\uC6B4 \uC0AC\uB9C8\uB9AC\uC544\uC778\uC758 \uC774\uC57C\uAE30\uB97C \uD1B5\uD574 \uC9C4\uC815\uD55C \uC774\uC6C3 \uC0AC\uB791\uC774 \uBB34\uC5C7\uC778\uC9C0 \uD568\uAED8 \uB098\uB220\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "heart",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\uC990\uACA8\uCC3E\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share-2",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\uACF5\uC720\uD558\uAE30"))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens/PlayerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens/SearchScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
window.SearchScreen = function SearchScreen({
  nav,
  ds
}) {
  const {
    Input,
    Tag,
    VideoThumbnailCard
  } = ds;
  const [q, setQ] = React.useState('');
  const suggestions = ['선한 사마리아인', '다윗과 골리앗', '탕자의 비유', '에스더', '요셉'];
  const results = [{
    title: '선한 사마리아인',
    series: '누가복음 10장',
    duration: '12:30'
  }, {
    title: '선한 목자',
    series: '요한복음 10장',
    duration: '08:52'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 12px',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 22,
      height: 22,
      cursor: 'pointer'
    },
    onClick: () => nav('home')
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uB9D0\uC500, \uC778\uBB3C, \uBE44\uC720 \uAC80\uC0C9",
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        width: 18,
        height: 18,
        color: 'var(--color-text-muted)'
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    tone: "neutral"
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 20px 100px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, results.map(r => /*#__PURE__*/React.createElement(VideoThumbnailCard, _extends({
    key: r.title
  }, r, {
    onClick: () => nav('player', r)
  })))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens/SearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screens/WebHome.jsx
try { (() => {
window.WebHome = function WebHome({
  nav,
  ds
}) {
  const {
    VideoThumbnailCard,
    Tag,
    Button
  } = ds;
  const rows = [{
    title: '예수님의 비유',
    items: [{
      title: '선한 사마리아인',
      series: '누가복음 10장',
      duration: '12:30',
      tag: 'NEW'
    }, {
      title: '탕자의 비유',
      series: '누가복음 15장',
      duration: '09:44'
    }, {
      title: '씨 뿌리는 자',
      series: '마태복음 13장',
      duration: '11:05'
    }, {
      title: '열 처녀 비유',
      series: '마태복음 25장',
      duration: '10:12'
    }]
  }, {
    title: '성경 인물',
    items: [{
      title: '다윗과 골리앗',
      series: '사무엘상 17장',
      duration: '15:02'
    }, {
      title: '요셉의 꿈',
      series: '창세기 37장',
      duration: '13:40'
    }, {
      title: '에스더의 용기',
      series: '에스더서',
      duration: '10:18',
      tag: 'NEW'
    }, {
      title: '룻의 신실함',
      series: '룻기',
      duration: '09:05'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-brand-primary)',
      padding: '72px 64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--warm-0)',
      fontFamily: 'var(--font-serif)',
      fontSize: 40,
      fontWeight: 600,
      maxWidth: 560,
      lineHeight: 1.3
    }
  }, "\uC608\uC218\uB2D8\uC758 \uBE44\uC720\uC640 \uC131\uACBD \uC778\uBB3C\uC744 \uB178\uB798\uC640 \uC601\uC0C1\uC73C\uB85C \uB9CC\uB098\uBCF4\uC138\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--navy-100)',
      fontSize: 16,
      maxWidth: 520,
      lineHeight: 1.7
    }
  }, "\uB530\uB73B\uD55C CCM \uBBA4\uC9C1\uBE44\uB514\uC624\uB85C \uC131\uACBD \uC18D \uC774\uC57C\uAE30\uB97C \uC27D\uACE0 \uD3B8\uC548\uD558\uAC8C \uC804\uD574\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => nav('watch')
  }, "\uC774 \uC774\uC57C\uAE30 \uBCF4\uB7EC\uAC00\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 64px'
    }
  }, rows.map(row => /*#__PURE__*/React.createElement("div", {
    key: row.title,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 23,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, row.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, row.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    onClick: () => nav('watch', it)
  }, /*#__PURE__*/React.createElement(VideoThumbnailCard, it))))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screens/WebHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screens/WebSeries.jsx
try { (() => {
window.WebSeries = function WebSeries({
  nav,
  ds
}) {
  const {
    VideoThumbnailCard,
    Tabs
  } = ds;
  const [tab, setTab] = React.useState('예수님의 비유');
  const items = {
    '예수님의 비유': [{
      title: '선한 사마리아인',
      series: '누가복음 10장',
      duration: '12:30',
      tag: 'NEW'
    }, {
      title: '탕자의 비유',
      series: '누가복음 15장',
      duration: '09:44'
    }, {
      title: '씨 뿌리는 자',
      series: '마태복음 13장',
      duration: '11:05'
    }, {
      title: '열 처녀 비유',
      series: '마태복음 25장',
      duration: '10:12'
    }, {
      title: '선한 목자',
      series: '요한복음 10장',
      duration: '08:52'
    }, {
      title: '용서할 수 없는 종',
      series: '마태복음 18장',
      duration: '11:30'
    }],
    '성경 인물': [{
      title: '다윗과 골리앗',
      series: '사무엘상 17장',
      duration: '15:02'
    }, {
      title: '요셉의 꿈',
      series: '창세기 37장',
      duration: '13:40'
    }, {
      title: '에스더의 용기',
      series: '에스더서',
      duration: '10:18',
      tag: 'NEW'
    }, {
      title: '룻의 신실함',
      series: '룻기',
      duration: '09:05'
    }]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      marginBottom: 20,
      fontFamily: 'var(--font-serif)'
    }
  }, "\uC2DC\uB9AC\uC988"), /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(items),
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 28
    }
  }, items[tab].map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    onClick: () => nav('watch', it)
  }, /*#__PURE__*/React.createElement(VideoThumbnailCard, it)))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screens/WebSeries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screens/WebWatch.jsx
try { (() => {
window.WebWatch = function WebWatch({
  nav,
  ds,
  video
}) {
  const {
    IconButton,
    Tag,
    Button,
    VideoThumbnailCard
  } = ds;
  const v = video || {
    title: '선한 사마리아인',
    series: '누가복음 10장'
  };
  const related = [{
    title: '선한 목자',
    series: '요한복음 10장',
    duration: '08:52'
  }, {
    title: '탕자의 비유',
    series: '누가복음 15장',
    duration: '09:44'
  }, {
    title: '용서할 수 없는 종',
    series: '마태복음 18장',
    duration: '11:30'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 64px',
      display: 'flex',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      background: 'var(--navy-900)',
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play",
      style: {
        width: 30,
        height: 30
      }
    }),
    label: "\uC7AC\uC0DD",
    variant: "filled",
    size: "lg"
  })), /*#__PURE__*/React.createElement(Tag, {
    tone: "navy"
  }, "\uBE44\uC720"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 600,
      marginTop: 14,
      color: 'var(--color-text-primary)'
    }
  }, v.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, v.series), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.8,
      marginTop: 18,
      maxWidth: 640
    }
  }, "\uAC15\uB3C4\uB97C \uB9CC\uB09C \uC0AC\uB78C\uC744 \uB3C4\uC6B4 \uC0AC\uB9C8\uB9AC\uC544\uC778\uC758 \uC774\uC57C\uAE30\uB97C \uD1B5\uD574 \uC9C4\uC815\uD55C \uC774\uC6C3 \uC0AC\uB791\uC774 \uBB34\uC5C7\uC778\uC9C0 \uD568\uAED8 \uB098\uB220\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "heart",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\uC990\uACA8\uCC3E\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share-2",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\uACF5\uC720\uD558\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      marginBottom: 14,
      color: 'var(--color-text-primary)'
    }
  }, "\uC774\uC5B4\uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, related.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    onClick: () => nav('watch', r)
  }, /*#__PURE__*/React.createElement(VideoThumbnailCard, r))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screens/WebWatch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.VideoThumbnailCard = __ds_scope.VideoThumbnailCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
