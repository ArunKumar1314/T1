import { LinearGradient } from "react-native-linear-gradient";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function CustomLinearGradient({ children }: Props) {
  return (
    <LinearGradient
      colors={["#C8E6A7", "#E2F5C3"]}
      start={{ x: 0, y: 0.6 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
