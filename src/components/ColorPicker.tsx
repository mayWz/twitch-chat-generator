import { hexToPercent, percentToHex } from "@/helpers";

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export const ColorPicker = ({ label, value, setValue }: Props) => {
  const color = value.substring(0, 7);
  const alpha = value.substring(7);

  return (
    <div className="ColorPicker">
      <span>{label}</span>
      <label>
        {color}
        <input
          type="color"
          value={color}
          onChange={(e) => setValue(e.target.value + alpha)}
        />
      </label>
      Alpha {hexToPercent(alpha)}%
      <input
        type="range"
        min="0"
        max="100"
        value={hexToPercent(alpha)}
        onChange={(e) => setValue(color + percentToHex(+e.target.value))}
      />
    </div>
  );
};
