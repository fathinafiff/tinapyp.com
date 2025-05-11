import React from "react";
import Link from "next/link";
import ProfileSection from "@/components/profile-section";
import LatestVideo from "@/components/latest-video";

const Home = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <ProfileSection
        name="Fathin Afif"
        bio={
          <>
            Hi! I’m Fathin Afif 👋 — founder of{" "}
            <Link href={"https://nightcoders.id"} target={"_blank"}>
              <strong>Nightcoders</strong>
            </Link>
            , developer, and AI enthusiast based in Aceh 🇮🇩. I help startups and
            enterprises build apps and intelligent systems.
          </>
        }
        ctaText={
          <Link
            href="mailto:fathin@nightcoders.id"
            className="text-blue-600 font-medium mt-2 inline-block"
          >
            Let’s build something — email me!
          </Link>
        }
      />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4">Latest Video</h2>
        <LatestVideo />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold mb-4">🚀 Explore Our Products</h2>
        <a
          href="https://nightcoders.id"
          target="_blank"
          className="text-blue-600 font-medium"
        >
          View all apps we’ve built →
        </a>
      </div>

      <div className="mt-20 flex justify-center space-x-6 text-gray-500">
        <a href="https://github.com/fathinafiff" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/fathinafiff" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:fathin@nightcoders.id">Email</a>
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        © 2025 Fathin Afif, All Rights Reserved
      </p>
    </main>
  );
};

export default Home;
