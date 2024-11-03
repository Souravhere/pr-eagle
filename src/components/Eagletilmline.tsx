import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Phase 1",
      content: (
        <div>
          <ul className="text-gray-200 sm:text-lg text-sm font-normal mb-4 list-disc list-inside">
            <li>Website & Social Media Launch</li>
            <li>Tokenomics Release</li>
            <li>Roadmap Release</li>
            <li>Token Release</li>
            <li>Airdrop Campaign</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div>
          <ul className="text-gray-200 sm:text-lg text-sm font-normal mb-4 list-disc list-inside">
            <li>Marketing Campaign</li>
            <li>CMC & CoinGecko Listing</li>
            <li>CEX Listings</li>
            <li>Building Global Partnerships</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div>
          <ul className="text-gray-200 sm:text-lg text-sm font-normal mb-4 list-disc list-inside">
            <li>Community Development</li>
            <li>Reflection of Holder Opinions</li>
            <li>New Ways to Spend $EAGLES in Real Life</li>
            <li>Mass Marketing Campaigns for $EAGLES Awareness</li>
            <li>App Integrations + Tools</li>
            <li>Collaborations & Partnerships</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-black p-2 rounded-lg shadow-lg">
      <Timeline data={data} />
    </div>
  );
}
