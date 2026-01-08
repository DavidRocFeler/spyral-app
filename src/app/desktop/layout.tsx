// app/desktop/layout.tsx
import ConditionalLayout from "./ConditionLayout";

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConditionalLayout>
      {children}
    </ConditionalLayout>
  );
}