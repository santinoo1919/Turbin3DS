"use client";

import { useColorPreset } from "./color-preset-provider";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "./theme-provider";

const presets = [
  {
    id: "default",
    name: "Default",
    // Dynamic based on theme
    color: "",
  },
  {
    id: "nature",
    name: "Nature",
    color: "#EAEFBD",
  },
  {
    id: "forest",
    name: "Forest",
    color: "#90BE6D",
  },
  {
    id: "sunset",
    name: "Sunset",
    color: "#EA9010",
  },
  {
    id: "midnight",
    name: "Midnight",
    color: "#37371F",
  },
];

interface ColorPresetPickerProps {
  compact?: boolean;
}

export function ColorPresetPicker({ compact = false }: ColorPresetPickerProps) {
  const { preset, setPreset } = useColorPreset();
  const { theme } = useTheme();

  // Get the appropriate default color based on the current theme
  const getDefaultColor = () => {
    return theme === "dark" ? "#fff" : "#000";
  };

  return (
    <div className="flex items-center gap-2">
      {!compact && (
        <span className="text-sm font-medium mr-2">Color Presets:</span>
      )}
      <div className="flex gap-1">
        {presets.map((p) => (
          <Tooltip key={p.id}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`${compact ? "h-7 w-7" : "h-8 w-8"} rounded-full ${
                  preset === p.id ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
                onClick={() => setPreset(p.id as any)}
                style={{
                  backgroundColor:
                    p.id === "default" ? getDefaultColor() : p.color,
                }}
                aria-label={`Switch to ${p.name} theme`}
              >
                <span className="sr-only">{p.name}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{p.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
