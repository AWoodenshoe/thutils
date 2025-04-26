# 🛠️ thutils

Reusable UI components by Thomas

# Usage

-   Copy and paste into projects. Configure for specific needs. Extra styling required to make it look good.

# 📦 Components

### Toggle

A simple iOS-style switch.

```
import Toggle from "./components/Toggle";

function Example() {
    const [enabled, setEnabled] = useState(false);

    return (
        <Toggle
            checked={enabled}
            onChange={setEnabled}
        />
    );
}
```

### Slider

A minimal, responsive slider with thumb styling.

```
import Slider from "./components/Slider";

function Example() {
    const [value, setValue] = useState(15);

    return (
        <Slider
            value={value}
            min={1}
            max={60}
            onChange={setValue}
        />
    );
}
```

-   Supports disabled state
