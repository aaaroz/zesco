import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import { FC, ReactElement } from "react";

const productLinks = ["preview", "rendering", "observability", "security"];
const resourceLinks = ["deck", "pricing", "customer", "integration"];
const companyLinks = ["about", "career", "partners", "privacy policy"];
const medsosLinks = [
  {
    icon: <FacebookOutlined />,
    href: "https://facebook.com/rmdnmar",
    name: "facebook",
  },
  {
    icon: <WhatsAppOutlined />,
    href: "https://wa.me/081213294383",
    name: "whatsapp",
  },
  {
    icon: <InstagramOutlined />,
    href: "https://instagram.com/rmdnmar",
    name: "instagram",
  },
  {
    icon: <TikTokOutlined />,
    href: "https://tiktok.com/@zorraboy",
    name: "tiktok",
  },
];
export const Footer: FC = (): ReactElement => {
  return (
    <footer className="bg-muted pt-16 pb-10 space-y-8">
      <div className="container flex flex-col lg:flex-row justify-between gap-20 mb-20">
        <div className="max-w-sm">
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <Link href="/">
                  <h1 className="text-3xl font-mono flex gap-2 items-center">
                    <Code2Icon className="size-9 shrink-0" />
                    Zesco
                  </h1>
                </Link>
              </div>
              <p className="text-lg">
                Development Tools Hub - Empowering Developers Worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="space-y-4 w-full text-left">
            <h1 className="text-primary-foreground text-lg font-semibold">
              Products
            </h1>
            <div className="flex flex-col gap-1">
              {productLinks.map((link, index) => (
                <Link
                  href="#"
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 w-full text-left">
            <h1 className="text-primary-foreground text-lg font-semibold">
              Resources
            </h1>
            <div className="flex flex-col gap-1">
              {resourceLinks.map((link, index) => (
                <Link
                  href="#"
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 w-full text-left">
            <h1 className="text-primary-foreground text-lg font-semibold">
              Company
            </h1>
            <div className="flex flex-col gap-1">
              {companyLinks.map((link, index) => (
                <Link
                  href="#"
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 w-full text-left">
            <h1 className="text-primary-foreground text-lg font-semibold">
              Medsos
            </h1>
            <div className="flex flex-col gap-1">
              {medsosLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize flex items-center gap-1"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">
        &copy; 2024 Development Tools Hub. All rights reserved.
      </p>
    </footer>
  );
};
