import { readFileSync } from "fs";
import path from "path";
import PortalClient from "./PortalClient";

export const revalidate = 60;

export const metadata = {
  title: "Client Portal | Beyond Care",
  robots: { index: false, follow: false },
};

export type Resource = {
  id: string;
  name: string;
  category: string;
  type: string;
  filename: string;
  description: string;
  version: string;
  added: string;
  isNew: boolean;
  versions: { v: string; date: string; note: string; current: boolean }[];
};

export default function PortalPage() {
  const manifestPath = path.join(process.cwd(), "public/portal/manifest.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

  return <PortalClient initialResources={manifest.resources} />;
}
