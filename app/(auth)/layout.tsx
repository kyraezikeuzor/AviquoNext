import LayoutInterface from "@/utils/Interfaces";

export default function AuthLayout({ children }: LayoutInterface) {
  return <main className="flex justify-center min-h-screen">{children}</main>;
}
