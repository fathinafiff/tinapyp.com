import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import picofme from "@/public/picofme.png";

interface ProfileSectionProps {
  name: string;
  bio: React.ReactNode;
  ctaText: React.ReactNode;
}

const ProfileSection = ({ name, bio, ctaText }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6 py-8">
      <div className="flex-shrink-0">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={picofme}
            alt={name}
            width={128}
            height={128}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg text-muted-foreground">{bio}</p>
        <Button
          variant="link"
          className="p-0 h-auto text-blue-600 flex items-center gap-2"
        >
          <Mail className="h-4 w-4" />
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
