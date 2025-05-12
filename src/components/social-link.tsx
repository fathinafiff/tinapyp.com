import Link from "next/link";
import { Youtube, Instagram, Mail } from "lucide-react";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
        fill="currentColor"
      />
    </svg>
  );
}

const SocialLinks = ({
  youtubeLink,
  instagramLink,
  tiktokLink,
  email,
  classname,
}: {
  youtubeLink: string;
  instagramLink: string;
  tiktokLink: string;
  email: string;
  classname: string;
}) => {
  return (
    <div className={`flex space-x-6 ${classname}`}>
      <Link
        href={youtubeLink}
        target="_blank"
        className="text-gray-500 hover:text-red-600 transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={24} />
      </Link>
      <Link
        href={instagramLink}
        target="_blank"
        className="text-gray-500 hover:text-pink-600 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </Link>
      <Link
        href={tiktokLink}
        target="_blank"
        className="text-gray-500 hover:text-black transition-colors"
        aria-label="TikTok"
      >
        <TikTokIcon />
      </Link>
      <Link
        href={`mailto:${email}`}
        className="text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Email"
      >
        <Mail size={24} />
      </Link>
    </div>
  );
};

export default SocialLinks;
